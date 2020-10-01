import React from 'react';
import Sidebar from './Component/Sidebar/Sidebar';
import Chat from './Component/Chat/Chat';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="App__body">
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default App;
