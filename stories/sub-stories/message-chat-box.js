import React from 'react';
import {storiesOf} from '@storybook/react';

import MsgChatBox from '../../src/components/chatArea/MsgChatBox';

const story = () => {
	storiesOf('Message Chat Box', module).add('default view', () => (
		<MsgChatBox></MsgChatBox>
	));
};

export default story;
