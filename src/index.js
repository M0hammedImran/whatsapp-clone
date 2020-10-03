import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx'
import Offline from './Component/Offline/Offline';

ReactDOM.render(
  <React.StrictMode>
    {navigator.onLine ? (
      <App />) : (
        <Offline />
      )
    }
  </React.StrictMode>,
  document.getElementById('root')
);

