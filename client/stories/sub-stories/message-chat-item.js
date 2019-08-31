import React from 'react';
import MsgChatItem from '../../src/components/chatArea/MsgChatItem';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

const story = () => {
	storiesOf('Message Chat Item', module)
		.add('my message', () => (
			<MsgChatItem
				displayName='galeontiger'
				createdTimeStamp={'23 June 2019, 5:00PM'}
				creator='galeontiger'>
				Message 1
			</MsgChatItem>
		))
		.add('their message', () => (
			<MsgChatItem
				displayName='galeontiger'
				createdTimeStamp={'23 June 2019, 5:00PM'}
				creator='bob'>
				Message 2
			</MsgChatItem>
		))
		.add('automated message', () => (
			<MsgChatItem
				displayName='galeontiger'
				createdTimeStamp={'23 June 2019, 5:00PM'}
				creator='bot'>
				Message 3
			</MsgChatItem>
		));
};

export default story;
