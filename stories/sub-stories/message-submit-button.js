import React from 'react'
import MsgSubmitBtn from '../../src/components/chatArea/MsgSubmitBtn'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

const story = () => {
  storiesOf('Submit Chat Button', module)
  .add('default', () => <MsgSubmitBtn onClick={action('clicked')}></MsgSubmitBtn>)
  .add('disabled', () => (
    <MsgSubmitBtn disabled >
    </ MsgSubmitBtn >
  ));
}

export default story