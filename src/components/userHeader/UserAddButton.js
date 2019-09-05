import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AddCircleIcon from "@material-ui/icons/AddCircle";

export default function SimpleMenu() {
  const [addButton, setAddButton] = useState(false);

  function handleClick(event) {
    setAddButton(event.currentTarget);
  }

  function handleClose() {
    setAddButton(null);
  }

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <AddCircleIcon />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={addButton}
        keepMounted
        open={Boolean(addButton)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Add New Friends</MenuItem>
        <MenuItem onClick={handleClose}>Create New Chat</MenuItem>
      </Menu>
    </div>
  );
}
