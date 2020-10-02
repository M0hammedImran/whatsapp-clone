import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';

const SidebarChat = ({ addNewChat }) => {
  const createChat = () => {
    const roomName = prompt('Please Enter a Name for the Chat');
    if (roomName) {
      // TODO: Add to DB
    }
  };
  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={'http://unsplash.it/30/30?random&gravity=center'} />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>This is the last message.</p>
      </div>
    </div>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  );
};

export default SidebarChat;
