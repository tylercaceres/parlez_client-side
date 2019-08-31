import React from 'react';

import MsgChatItem from './MsgChatItem';

const MsgChatItemList = ({messages = [], user}) => {
	const chatItems = messages.map((msg) => {
		return (
			<MsgChatItem
				key={msg.id}
				id={msg.id}
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
