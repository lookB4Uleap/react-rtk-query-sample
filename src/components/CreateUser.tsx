import { useState } from 'react';
import { useCreateUserMutation, useLazyGetUsersQuery } from '../services/api';

export const CreateUser = () => {
  const [data, setData] = useState('');
  const [createUser, { data: response, isLoading, error }] =
    useCreateUserMutation();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    await createUser({
      data,
    });
    // await fetchUsers();
  };

  return (
    <form
      className="flex flex-col items-center justify-center p-4"
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        placeholder="please enter ur name"
        value={data}
        className="p-2"
        onChange={(e) => setData(e.target.value)}
      />
      {/* <pre className="bg-gray-100 p-4 rounded">{data}</pre> */}
      {isLoading && !error ? (
        <p className="text-gray-600">Loading...</p>
      ) : error ? (
        <p className="text-gray-600">Loading...</p>
      ) : (
        data && (
          <pre className="bg-gray-100 p-4 rounded">
            {JSON.stringify(response)}
          </pre>
        )
      )}
      <button className="p-2">Create User</button>
      {/* {users && (
        <pre className="bg-gray-100 p-4 rounded">
          {JSON.stringify(users, null, 2)}
        </pre>
      )} */}
    </form>
  );
};
