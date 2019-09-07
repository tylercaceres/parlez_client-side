import React, {useContext} from 'react';
import Box from '@material-ui/core/Box/Box';
import {makeStyles} from '@material-ui/core/styles';
import MsgChatItem from './MsgChatItem';
import {ChatViewContext} from '../../Context';

//helper to get active chatroom messages from chatrooms array:
const getActiveChat = (id, chatArr) => {
	for (let chat of chatArr) {
		if (chat.id === id) {
			return chat;
		}
	}
	return null;
};

const MsgChatItemList = ({user}) => {
	const {masterState} = useContext(ChatViewContext);
	let activeChat = getActiveChat(masterState.activeChat, masterState.chatrooms);

	const useStyles = makeStyles((theme) => ({
		card: {
			background: 'pink',
			marginTop: '100px'
		}
	}));
	const classes = useStyles();

	const chatItems = activeChat.messages.map((msg) => {
		return (
			<MsgChatItem
				creatorId={msg.user_id}
				creatorUsername={msg.username}
				id={msg.id}
				key={msg.id}
				createdTimeStamp={msg.created_at}
				deleted={msg.deleted}>
				{msg.content}
			</MsgChatItem>
		);
	});

	return <>{chatItems}</>;
};

export default MsgChatItemList;
