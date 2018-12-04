// Make connection
var socket = io.connect();

var message = document.getElementById("message");
var handle = document.getElementById("handle");
var btn = document.getElementById("send");
var output = document.getElementById("output");
var feedback = document.getElementById("feedback");

btn.addEventListener("click", function() {
  socket.emit("chat", {
    message: message.value,
    handle: handle.value
  });
});

message.addEventListener("keypress", function() {
  socket.emit("typing", handle.value);
});

//Listen for events
socket.on("chat", function(data) {
  feedback.innerHTML = "";
  addChat(data);
});

socket.on("typing", function(data) {
  feedback.innerHTML = "<p><em>" + data + " is typing a message</em></p>";
});

socket.on("init", function(data) {
  data.map(addChat);
});

function addChat(data) {
  output.innerHTML =
    "<p><strong>" +
    data.handle +
    ": </strong>" +
    data.message +
    "</p>" +
    output.innerHTML;
}
