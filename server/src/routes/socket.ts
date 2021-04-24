const socket = require("socket.io");
import * as http from "http";
import { onUserJoin } from "@controllers/onUserJoin";

const socketController = (server: http.Server): void => {
  const io = socket(server);

  io.on("connect", (socket: any): void => {
    console.log("DUPAV33");
    socket.on("USER_JOINED", onUserJoin(io, socket));
    console.log("DUPAV11");
  });
};

export { socketController };
