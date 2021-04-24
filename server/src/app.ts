import * as http from "http";
import * as dotenv from "dotenv";
import * as express from "express";
import * as mongoose from "mongoose";
import * as cookieParser from "cookie-parser";

import { socketController } from "./routes/socket";
import { router } from "routes";

dotenv.config();

const app = express();
const server = http.createServer(app);

// socketController(server);

const dbKey = process.env.DB_KEY;

console.log("XDDD");

if (dbKey) {
  mongoose
    .connect(dbKey, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected with DB"))
    .catch(() => console.error("Error with DB"));
} else {
  console.log(
    `Enviroment variable 'DB_KEY' not set. Cannot connect to DataBase`
  );
}
app.all("/*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});
const port = process.env.PORT || 4001;
server.listen(port, () => console.log(`Server listening on port ${port}`));

app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());

socketController(server);

app.use(router);

app.get("/", (request, response) => {
  response.json({ info: "Teraz tylko robić :P" });
});
