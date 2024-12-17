import React, { useEffect } from 'react';
import { useGetUsersQuery, useLazyGetUsersQuery } from '../services/api';

export const FetchAllUsers: React.FC = () => {
  // const { data, error, isLoading } = useGetUsersQuery();
  const [fetchAllUsers, { data, error, isLoading }] = useLazyGetUsersQuery();

  useEffect(() => {
    fetchAllUsers();
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center p-4">
        <p className="text-red-600">{JSON.stringify(error)}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col justify-center items-center p-4">
      <h2 className="text-xl font-bold mb-4">Fetch All Users</h2>
      <pre className="bg-gray-100 p-4 rounded">
        {JSON.stringify(data, null, 2)}
      </pre>
      <button onClick={() => fetchAllUsers()}>Refetch</button>
    </div>
  );
};
