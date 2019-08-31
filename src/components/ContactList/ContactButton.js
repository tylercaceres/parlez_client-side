import React from "react";
import Button from "@material-ui/core/Button";

const ContactButton = props => {
  return (
    <Button
      color="primary"
      size="large"
      onClick={props.onClick}
      disabled={props.selected}
    >
      {props.children}
    </Button>
  );
};

export default ContactButton;
