import { Button } from '@material-ui/core';
import React from 'react';

import { auth, provider } from '../../utils/firebase';
import './Login.css';

const Login = ({ setUser }) => {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        // console.log(result);
        const { displayName, email, photoURL } = result.user;
        setUser({ displayName, email, photoURL });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.keyreply.com%2Fhs-fs%2Fhubfs%2FWhatsApp_Logo_1.png%3Fwidth%3D2067%26name%3DWhatsApp_Logo_1.png&f=1&nofb=1"
          alt="Whatsapp-Logo"
        />
        <div className="login__text">
          <h1>Sign in to Whatsapp</h1>
        </div>
        <Button onClick={signIn}>Sign in with Google</Button>
      </div>
    </div>
  );
};

export default Login;
