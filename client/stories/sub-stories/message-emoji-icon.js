import React from 'react'
import MsgEmojiIcon from '../../src/components/chatArea/MsgEmojiIcon'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

const story = () => {
  storiesOf('Emoji Icon', module)
  .add('default', () => <MsgEmojiIcon onClick={action('clicked')}></MsgEmojiIcon>)
}

export default story