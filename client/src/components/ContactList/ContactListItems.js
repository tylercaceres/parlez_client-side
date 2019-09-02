import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import ChatAvatar from "./ChatAvatar";
import ChatSettingsButton from "./RoundSettingsButton";
import Badge from "@material-ui/core/Badge";
import { Typography } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";

// const color = "rgba(0, 0, 255, .2)";
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    "&:hover": {
      boxShadow: "0 4px 8px 0 grey"
    }
  }
}));

// const theme = createMuiTheme({
//   overrides: {
//     // Style sheet name
//     MuiCardHeader: {
//       // Name of the rule
//       action: {
//         // Some CSS
//         opacity: "0"
//       }
//     },
//     MuiCard: {
//       "&:hover": {
//         MuiCardHeader: {
//           // Name of the rule
//           action: {
//             // Some CSS
//             opacity: "1"
//           }
//         }
//       }
//     }
//   }
// });

const useStyles_two = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    backgroundColor: "lightGrey"
  }
}));

const listStyle = {
  listStyle: "none"
};

const ContactListItem = props => {
  const classes = useStyles();
  const classes_two = useStyles_two();

  return (
    <li onClick={props.onClick} style={listStyle}>
      <Card className={props.selected ? classes_two.card : classes.card}>
        {/* <ThemeProvider theme={theme}> */}
        <CardHeader
          // disableTypography
          avatar={
            <Badge badgeContent={11} color="secondary">
              <ChatAvatar avatar={props.chatAvatar} />
            </Badge>
          }
          action={<ChatSettingsButton chatType={props.chatType} />}
          title={<Typography varaiant="h1">{props.chatName}</Typography>}
          subheader={props.recentMessage}
        />
        {/* </ThemeProvider> */}
      </Card>
    </li>
  );
};

export default ContactListItem;
