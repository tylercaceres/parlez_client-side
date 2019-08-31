import React from 'react';
import Box from '@material-ui/core/Box/Box';
import {makeStyles} from '@material-ui/core/styles';

import MsgChatItem from './MsgChatItem';

const MsgChatItemList = ({messages = [], user}) => {
	const useStyles = makeStyles((theme) => ({
		card: {
			background: 'pink',
			marginTop: '100px'
		}
	}));
	const classes = useStyles();

	const chatItems = messages.map((msg) => {
		return (
			<MsgChatItem
				id={msg.id}
				key={msg.id}
				displayName={user}
				createdTimeStamp={msg.created_at}
				creator={msg.creator}>
				{msg.content}
			</MsgChatItem>
		);
	});

	return <>{chatItems}</>;
};

export default MsgChatItemList;
