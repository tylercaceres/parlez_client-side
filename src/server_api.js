// import React, {useContext} from 'react';
// import {ChatViewContext, FriendContext} from './Context';
// const {friendState, dispatchFriend} = useContext(FriendContext);
let socket = require('socket.io-client')('ws://localhost:8080');

const sendUserId = user_id => {
	socket.emit('initialize', user_id);
};

const loadInitialChatroomsData = cb => {
	socket.on('initial message data', data => {
		console.log('DATA_ONLOAD', data);
		cb(data);
	});

	// return () => {
	//   socket.removeEventListener("initial data", data => {
	//     cb(data);
	//   });
	// };
};

const loadInitialFriendsData = cb => {
	socket.on('friendlist data', data => {
		console.log('FRIENDLIST DATA', data);
		cb(data);
	});
};

// send newly generated message:
const sendMessage = msg => {
	socket.emit('send message', msg);
};

const receiveMessage = cb => {
	socket.on('new chatroom message', msg => {
		console.log('MSG_RECEIVED', msg);
		cb(msg);
	});
};

export {sendUserId, loadInitialChatroomsData, loadInitialFriendsData, sendMessage, receiveMessage, socket};
