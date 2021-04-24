const socket = require("socket.io");
import * as http from "http";
import { onUserJoin } from "@controllers/onUserJoin";
import { onChangeTable } from "@controllers/onChangeTable";

const socketController = (server: http.Server): void => {
  const io = socket(server, { allowEIO3: true });

  io.on("connection", (socket: any): void => {
    socket.on("USER_JOIN", onUserJoin(io, socket));
    socket.on("CHANGE_TABLE", onChangeTable(io, socket));
  });
};

export { socketController };
