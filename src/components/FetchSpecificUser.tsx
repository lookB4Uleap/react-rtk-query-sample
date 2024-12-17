import { useState } from 'react';
import { useLazyGetSpecificUserQuery } from '../services/api';

export const FetchSpecificUser = () => {
  const [userId, setUserId] = useState('');
  const [trigger, { data, isLoading, error }] = useLazyGetSpecificUserQuery();

  const handleSubmit = (e) => {
    e.preventDefault();
    trigger(userId);
  };

  return (
    <form
      className="flex flex-col items-center justify-center p-4"
      onSubmit={handleSubmit}
    >
      <input
        name="user_id"
        value={userId}
        className="p-2"
        onChange={(e) => setUserId(e.target.value)}
      />
      {/* <pre className="bg-gray-100 p-4 rounded">{userId}</pre> */}
      {isLoading ? (
        <p className="text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        data && (
          <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(data)}</pre>
        )
      )}

      <button className="p-2" type="submit">
        Get User
      </button>
    </form>
  );
};
