import React from 'react';
import MsgChatItem from '../../src/components/chatArea/MsgChatItem';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

const story = () => {
	storiesOf('Message Chat Item', module).add('default', () => (
		<MsgChatItem></MsgChatItem>
	));
};

export default story;
