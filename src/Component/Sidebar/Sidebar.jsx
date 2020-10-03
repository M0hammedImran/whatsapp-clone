import React from 'react';

import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import './Sidebar.css';
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import SidebarChat from '../SidebarChat/SidebarChat';

const Sidebar = ({ rooms }) => (
  <div className="sidebar">
    <div className="sidebar__header">
      <Avatar src="https://avatars2.githubusercontent.com/u/52968617?s=400&u=cc285f24e1c5f626cbb2fd6baffcd4d2dc995927&v=4" />
      <div className="sidebar__headerRight">
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
    <div className="sidebar__search">
      <div className="sidebar__searchContainer">
        <SearchOutlined />
        <input
          type="text"
          name="search"
          placeholder="Search or Start a new Chat"
        />
      </div>
    </div>
    <div className="sidebar_chats">
      <SidebarChat addNewChat />
      {rooms.length >= 1 && rooms[0].length >= 1
        ? React.Children.toArray(
            rooms.map((room) => <SidebarChat room={room} />)
          )
        : ''}
    </div>
  </div>
);

export default Sidebar;
