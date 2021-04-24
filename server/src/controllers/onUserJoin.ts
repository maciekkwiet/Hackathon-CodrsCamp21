import * as socketio from "socket.io";

import { User } from "@models/User";
import { rooms } from "@models/Rooms";

interface UserJoinPayload {
  name: string;
  roomId: string;
  isAdmin: boolean;
}

const onUserJoin = (io: socketio.Server, socket: socketio.Socket) => ({
  name,
  roomId,
  isAdmin,
}: UserJoinPayload) => {
  console.log("TEST1");
  try {
    const user = new User(name, socket.id, isAdmin);
    console.log("TEST2");
    const room = rooms.getRoom(roomId);
    console.log("TEST3");
    const message = `${name} has joined the room: ${roomId}`;
    console.log("TEST4");
    room.addUser(user);
    console.log("TEST5");
    socket.join(roomId.toString());
    console.log("TEST6");
    io.to(roomId).emit("USER_JOINED", room.getUsers());
    io.to(roomId).emit("FEED", message);
  } catch (ex) {
    console.error(ex);
  }
};

export { onUserJoin };
