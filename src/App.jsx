import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';

import Sidebar from './Component/Sidebar/Sidebar';
import Chat from './Component/Chat/Chat';
import axios from './axios';

import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then((res) => {
      setMessages(res.data);
    });
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
      <div className="App__body">
        <Sidebar />
        <Chat messages={messages} />
      </div>
    </div>
  );
};

export default App;
