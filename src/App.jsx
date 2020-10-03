import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';

import Sidebar from './Component/Sidebar/Sidebar';
import Chat from './Component/Chat/Chat';
import Login from './Component/Login/Login';

import axios from './utils/axios';

import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get('/rooms')
      .then((res) => setRooms([res.data]))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get('/messages/sync')
      .then((res) => setMessages(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const pusher = new Pusher('9930a1de7b4765406160', {
      cluster: 'ap2',
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (newMessage) => {
      setMessages((m) => [...m, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      {user ? (
        <Login setUser={setUser} />
      ) : (
        <div className="App__body">
          <Sidebar rooms={rooms} />
          <Chat messages={messages} />
        </div>
      )}
    </div>
  );
};

export default App;
