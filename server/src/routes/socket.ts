import * as socketio from 'socket.io';
import * as http from 'http';
import { onUserJoin } from '@controllers/onUserJoin';

const socketController = (server: http.Server): void => {
  const io = socketio(server);

  io.on('connect', (socket: socketio.Socket): void => {
    console.log('DUPAV33')
    socket.on('USER_JOINED', onUserJoin(io, socket));
    console.log('DUPAV11')
  });
};

export { socketController };
