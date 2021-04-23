import React from 'react';
import { useSocket } from 'socketio-hooks';
import { AppRoutes } from './Pages/AppRoutes';


function App() {
  useSocket('FEED', msg => console.log(msg));
  return <AppRoutes />;
}

export default App;
