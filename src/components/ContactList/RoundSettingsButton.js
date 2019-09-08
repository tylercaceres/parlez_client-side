import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const RoundSettingsButton = props => {
  const singleChatOptions = ["Delete Chat", "Close"];
  const groupChatOptions = ["Leave Group", "Delete Chat", "Close"];

  const [popupElementSingle, setPopupElementSingle] = useState(false);
  const [popupElementGroup, setPopupElementGroup] = useState(false);
  const openSingle = Boolean(popupElementSingle); // sets popupElement to true
  const openGroup = Boolean(popupElementGroup);

  const handleClickSingle = event => {
    setPopupElementSingle(event.currentTarget);
  };

  const handleClickGroup = event => {
    setPopupElementGroup(event.currentTarget);
  };

  const handleCloseSingle = option => {
    if (option === "Delete Chat") {
      console.log("DELETE");
    }
    setPopupElementSingle(false);
  };

  const handleCloseGroup = () => {
    setPopupElementGroup(false);
  };

  const renderMenu = (
    <>
      <Menu
        anchorEl={popupElementSingle}
        open={openSingle}
        onClose={handleCloseSingle}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: 200
          }
        }}
      >
        {singleChatOptions.map(option => (
          <MenuItem key={option} onClick={() => handleCloseSingle(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
      <Menu
        anchorEl={popupElementGroup}
        open={openGroup}
        onClose={handleCloseGroup}
        PaperProps={{
          style: {
            maxHeight: 48 * 4.5,
            width: 200
          }
        }}
      >
        {groupChatOptions.map(option => (
          <MenuItem key={option} onClick={handleCloseGroup}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );

  return (
    <div>
      <IconButton
        onClick={
          props.chatType === "group" ? handleClickGroup : handleClickSingle
        }
        disabled={props.selected}
        // chatType={props.chatType}
      >
        <MoreVertIcon />
      </IconButton>

      {renderMenu}
    </div>
  );
};

export default RoundSettingsButton;
