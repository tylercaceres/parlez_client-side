let socket = require("socket.io-client")("ws://localhost:8080");

// emits userId to retrieve user's data
const initialize = user_id => {
  socket.emit("initialize", user_id);
};

// loads user's chatrooms/friends
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
export { initialize, loadInitialData };

// send newly generated message:
const sendMessage = msg => {
  socket.emit("send message", msg);
};
export { sendMessage };
