import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { FetchAllUsers } from './components/FetchAllUsers';
import { FetchSpecificUser } from './components/FetchSpecificUser';
import { CreateUser } from './components/CreateUser';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">RTK Query Example</h1>
          <FetchAllUsers />
          <FetchSpecificUser />
          <CreateUser />
        </div>
      </div>
    </Provider>
  );
}

export default App;
