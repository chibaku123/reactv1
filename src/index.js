import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';


ReactDOM.render(
  <GoogleOAuthProvider clientId='413240623461-lte7821poe8patlkorng808f03unep6f.apps.googleusercontent.com'>
    <React.StrictMode>
    <App />
  </React.StrictMode>

  </GoogleOAuthProvider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
