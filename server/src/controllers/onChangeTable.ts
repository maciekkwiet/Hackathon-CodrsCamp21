import { rooms } from "@models/Rooms";
interface TablePayload {
  roomId: string;
  data: any;
}

const onChangeTable = (io: any, socket: any) => ({
  roomId,
  data,
}: TablePayload) => {
  try {
    const room = rooms.getRoom(roomId);
    const message = `Table was changed in room: ${roomId}`;
    socket.join(roomId.toString());
    io.to(roomId).emit("CHANGED_TABLE", room.setTableData(data));
    io.to(roomId).emit("FEED", message);
  } catch (ex) {
    console.error(ex);
  }
};

export { onChangeTable };
