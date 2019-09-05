import React from 'react';
import MsgChatItemList from '../../src/components/chatArea/MsgChatItemList';
import {storiesOf} from '@storybook/react';

const messages = [
	{
		id: 0,
		creator: 'tyler',
		content: 'what whattt',
		created_at: '20 sep 2019 5pm',
		deleted: false
	},
	{
		id: 1,
		creator: 'bob',
		content: 'hello there',
		created_at: '20 sep 2019 2pm',
		deleted: true
	},
	{
		id: 2,
		creator: 'christopher',
		content: 'wow, i hate you.',
		created_at: '20 sep 2019 3pm',
		deleted: false
	},
	{
		id: 3,
		creator: 'anchen',
		content: 'i only drink sweet drinks.',
		created_at: '20 sep 2019 4pm',
		deleted: true
	},
	{
		id: 4,
		creator: 'tyler',
		content:
			'have some gatorade, you look thirsty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i think sty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i thinksty blah daoisdjasodjiausd holy moly my computer is so slow. help i need to clean it up i think',
		created_at: '20 sep 2019 5pm',
		deleted: false
	},
	{
		id: 5,
		creator: 'selin',
		content: '*sigh*',
		created_at: '20 sep 2019 6pm',
		deleted: true
	},
	{
		id: 6,
		creator: 'bot',
		content: 'have some juice my guyyyy, you look thirsty',
		created_at: '20 sep 2019 5pm',
		deleted: false
	}
];

const story = () => {
	storiesOf('Message Chat Item List', module).add('some messages', () => (
		<MsgChatItemList user='tyler' messages={messages}></MsgChatItemList>
	));
};

export default story;
