import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { SocketIOProvider } from 'socketio-hooks';

ReactDOM.render(
  <React.StrictMode>
    <SocketIOProvider url="/">
      <App />
    </SocketIOProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
