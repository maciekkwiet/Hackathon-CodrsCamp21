import { User } from "@models/user";
import { rooms } from "@models/Rooms";

interface UserJoinPayload {
  name: string;
  roomId: string;
  isAdmin: boolean;
}

const onUserJoin = (io: any, socket: any) => ({
  name,
  roomId,
  isAdmin,
}: UserJoinPayload) => {
  try {
    console.log("dupa on user join");
    const user = new User(name, socket.id, isAdmin);
    const room = rooms.getRoom(roomId);
    const message = `${name} has joined the room: ${roomId}`;
    room.addUser(user);
    socket.join(roomId.toString());
    console.log("dupa on user join 2");
    io.to(roomId).emit("USER_JOINED", room.getUsers());
    io.to(roomId).emit("FEED", message);
  } catch (ex) {
    console.error(ex);
  }
};

export { onUserJoin };
