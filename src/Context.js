import React, {useReducer} from 'react';

const initialMasterState = {
	userId: null,
	isLoggedIn: false,
	friendsView: false,
	activeChat: null,
	// hover: null,
	chatrooms: []
};

let masterReducer = (state, action) => {
	switch (action.type) {
		case 'SIGNUP':
			return {...state, userId: action.id, isLoggedIn: action.data};
		case 'LOAD_INITIAL_DATA':
			return {...state, chatrooms: action.data};
		case 'CHAT_VIEW':
			return {...state, friendsView: false};
		case 'FRIENDS_VIEW':
			return {...state, friendsView: true};
		case 'ACTIVATE_CHAT':
			return {...state, friendsView: false, activeChat: action.id};
		case 'HOVER_ON':
			return {...state, hover: action.id};
		case 'HOVER_OFF':
			return {...state, hover: null};
		case 'ADD_MESSAGE':
			const temp = state.chatrooms.map(chatroom => {
				if (chatroom.id === action.data.chatroom) {
					return {...chatroom, messages: [...chatroom.messages, action.data.message]};
				} else {
					return {...chatroom};
				}
			});
			return {...state, chatrooms: temp};
		default:
			throw new Error(`Unsupported action type: ${action.type}`);
	}
};

const ChatViewContext = React.createContext(initialMasterState);

const ChatViewProvider = props => {
	const [masterState, dispatch] = useReducer(masterReducer, initialMasterState);

	return <ChatViewContext.Provider value={{masterState, dispatch}}>{props.children}</ChatViewContext.Provider>;
};

/********************************* FRIENDS CONTEXT ***********************************/

const initialFriendState = {
	selectedFriend: null,
	friends: []
};

let friendReducer = (state, action) => {
	switch (action.type) {
		case 'SELECT_FRIEND':
			return {...state, selectedFriend: action.data};
		case 'LOAD_FRIENDS':
			return {...state, friends: action.data};
		default:
			throw new Error(`Unsupported action type: ${action.type}`);
	}
};

const FriendContext = React.createContext(initialFriendState);

const FriendProvider = props => {
	const [friendState, dispatchFriend] = useReducer(friendReducer, initialFriendState);

	return <FriendContext.Provider value={{friendState, dispatchFriend}}>{props.children}</FriendContext.Provider>;
};

/********************************* NEW MSG CONTEXT ***********************************/

const initialMsgState = {
	newMessage: '',
	charCount: 0,
	showEmoji: false,
	msgBtnStatus: true,
	countDisplay: '0 characters'
};

let msgReducer = (state, action) => {
	switch (action.type) {
		case 'NEW_MESSAGE':
			return {...state, newMessage: action.data};
		case 'MSG_AND_EMOJI':
			return {...state, newMessage: action.data};
		case 'SHOW_EMOJI':
			return {...state, showEmoji: !state.showEmoji};
		case 'MESSAGE_SENT':
			return {
				...state,
				newMessage: '',
				countDisplay: '0 characters',
				msgBtnStatus: true
			};
		case 'CHECK_COUNT':
			return {...state, msgBtnStatus: !true};
		case 'UPDATE_COUNT':
			return {
				...state,
				charCount: action.data
			};
		case 'DISPLAY_COUNT':
			return {
				...state,
				countDisplay: `${state.charCount.toString()} characters`
			};
		default:
			throw new Error(`Unsupported action type: ${action.type}`);
	}
};

const MsgContext = React.createContext(initialMsgState);

const MsgProvider = props => {
	const [msgState, dispatch] = useReducer(msgReducer, initialMsgState);

	return <MsgContext.Provider value={{msgState, dispatch}}>{props.children}</MsgContext.Provider>;
};

export {ChatViewContext, ChatViewProvider, FriendContext, FriendProvider, MsgContext, MsgProvider};
