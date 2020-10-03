import React, { useState } from 'react';

import { Avatar, IconButton } from '@material-ui/core';
import MoreVert from '@material-ui/icons/MoreVert';
import AttachFile from '@material-ui/icons/AttachFile';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import InsertEmoticonOutlined from '@material-ui/icons/InsertEmoticonOutlined';

import './Chat.css';
import MicIcon from '@material-ui/icons/Mic';
import axios from '../../utils/axios';

const Chat = ({ messages }) => {
  const [input, setInput] = useState('');
  const sendMessage = (e) => {
    e.preventDefault();
    axios
      .post('/messages/new', {
        name: 'imran',
        message: input,
        timestamp: new Date().toUTCString(),
        received: true,
      })
      .catch((err) => {
        console.log(err);
      });
    setInput('');
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar />
        <div className="chat__headerInfo">
          <h3>Room Name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        {React.Children.toArray(
          // eslint-disable-next-line object-curly-newline
          messages.map(({ message, name, timestamp, received }) => (
            <p className={`chat__message ${received && 'chat__receiver'}`}>
              <span className="chat__name">{name}</span>
              {message}
              <span className="chat__timestamp">{timestamp}</span>
            </p>
          ))
        )}
      </div>
      <div className="chat__footer">
        <InsertEmoticonOutlined />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
};

export default Chat;
