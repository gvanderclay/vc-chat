import express from "express";
import socket, { Socket } from "socket.io";
const config = require("../knexfile.js")[process.env.ENV || "development"];
import knex from "knex";
const database = knex(config);

const app: express.Application = express();

const port: number | string = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

app.use(express.static("app/public"));

const io = socket(server);

io.on("connection", function(socket: Socket) {
  console.log("made socket connection", socket.id);

  database("messages")
    .select()
    .orderBy("created_at")
    .limit(100)
    .then(data => {
      socket.emit("init", data);
    });

  socket.on("chat", function(data) {
    io.sockets.emit("chat", data);
    console.log(data);
    database("messages")
      .insert({ ...data, created_at: new Date() })
      .then(result => {
        console.log(result);
      })
      .catch(err => console.warn(err));
  });

  socket.on("typing", function(data) {
    socket.broadcast.emit("typing", data);
  });
});
