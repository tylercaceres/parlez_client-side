let socket = require("socket.io-client")("ws://localhost:8080");

const loadInitialData = cb => {
  socket.on("initial data", data => {
    console.log("DATA_ONLOAD", data);
    cb(data);
  });

  // return () => {
  //   socket.removeEventListener("initial data", data => {
  //     cb(data);
  //   });
  // };
};
export { loadInitialData };

// send newly generated message:
const sendMessage = msg => {
  socket.emit("send message", msg);
};
export { sendMessage };
