import React from 'react'
import MsgInputField from '../../src/components/chatArea/MsgInputField'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

const story = () => {
storiesOf('Message Input Field', module)
.add('default', () => <MsgInputField onClick={action('clicked')}></MsgInputField>);
}

export default story