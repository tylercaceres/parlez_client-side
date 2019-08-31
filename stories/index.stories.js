//tyler imports **********
import MsgInputFieldStory from './sub-stories/message-input-field';
import MsgSubmitButtonStory from './sub-stories/message-submit-button';
import MsgEmojiIconStory from './sub-stories/message-emoji-icon';
import MsgChatItemStory from './sub-stories/message-chat-item';
import MsgChatItemListStory from './sub-stories/message-chat-item-list';
import MsgChatBoxStory from './sub-stories/message-chat-box';

//selin imports **********
import ContactButton from "../src/components/ContactList/ContactButton";
import ForumRoundedIcon from "@material-ui/icons/ForumRounded";
import RecentActorsRoundedIcon from "@material-ui/icons/RecentActorsRounded";
import RoundSettingsButton from "../src/components/ContactList/RoundSettingsButton";

// tyler stories **********
MsgSubmitButtonStory();
MsgInputFieldStory();
MsgEmojiIconStory();
MsgChatItemStory();
MsgChatItemListStory();
MsgChatBoxStory();

//selin stories **********
// Contact Buttons
storiesOf("ContactButton", module)
  .addParameters({
    backgrounds: [{ name: "dark", value: "#222f3e", default: true }]
  })
  .add("Chats", () => (
    <ContactButton>
      <ForumRoundedIcon />
    </ContactButton>
  ))
  .add("Chats_Clickable", () => (
    <ContactButton onClick={action("button-clicked")}>
      <ForumRoundedIcon />
    </ContactButton>
  ))
  .add("Chats_Selected", () => (
    <ContactButton selected onClick={action("button-clicked")}>
      <ForumRoundedIcon />
    </ContactButton>
  ))
  .add("Contacts", () => (
    <ContactButton>
      <RecentActorsRoundedIcon />
    </ContactButton>
  ))
  .add("Contacts_Clickable", () => (
    <ContactButton onClick={action("button-clicked")}>
      <RecentActorsRoundedIcon />
    </ContactButton>
  ))
  .add("Contacts_Selected", () => (
    <ContactButton selected onClick={action("button-clicked")}>
      <RecentActorsRoundedIcon />
    </ContactButton>
  ));

// Chat Settings Popup Button:
storiesOf("ChatSettingButton", module)
  .add("Settings_SingleChat", () => (
    <RoundSettingsButton chatType="single"></RoundSettingsButton>
  ))
  .add("Settings_GroupChat", () => (
    <RoundSettingsButton chatType="group"></RoundSettingsButton>
  ))
  .add("Settings_Selected", () => (
    <RoundSettingsButton selected></RoundSettingsButton>
  ));

// anchen imports **********
import UserHeader from "./sub-stories/user-header";

// ancen stories **********
UserHeader();
