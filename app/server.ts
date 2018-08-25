import express from "express";
import socket, { Socket } from "socket.io";

const app: express.Application = express();

const port: number | string = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

app.use(express.static("app/public"));

const io = socket(server);

io.on("connection", function(socket: Socket) {
  console.log("made socket connection", socket.id);

  socket.on("chat", function(data) {
    io.sockets.emit("chat", data);
  });

  socket.on("typing", function(data) {
    socket.broadcast.emit("typing", data);
  });
});
