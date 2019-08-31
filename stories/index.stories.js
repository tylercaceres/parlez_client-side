import React from 'react';

import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {linkTo} from '@storybook/addon-links';

import MsgInputFieldStory from './sub-stories/message-input-field';
import MsgSubmitButtonStory from './sub-stories/message-submit-button';
import MsgEmojiIconStory from './sub-stories/message-emoji-icon';
import MsgChatItemStory from './sub-stories/message-chat-item';

MsgSubmitButtonStory();
MsgInputFieldStory();
MsgEmojiIconStory();
MsgChatItemStory();
