import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ChatAvatar from './ChatAvatar';
import ChatSettingsButton from './RoundSettingsButton';
import Badge from '@material-ui/core/Badge';
import {Typography} from '@material-ui/core';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import {ChatViewContext} from '../../Context';

const useStyles = makeStyles((theme) => ({
	card: {
		maxWidth: 500,
		'&:hover': {
			boxShadow: '0 4px 8px 0 grey'
		}
	}
}));

const theme = createMuiTheme({
	overrides: {
		MuiCardHeader: {
			action: {
				opacity: '1'
			}
		}
	}
});

const theme2 = createMuiTheme({
	overrides: {
		MuiCardHeader: {
			action: {
				opacity: '0'
			}
		}
	}
});

const useStyles_two = makeStyles((theme) => ({
	card: {
		maxWidth: 500,
		backgroundColor: 'lightGrey'
	}
}));

const listStyle = {
	listStyle: 'none'
};

const ContactListItem = (props) => {
	const {masterState, dispatch} = useContext(ChatViewContext);
	// console.log('CONTACT-LIST-ITEMS', masterState);

	const classes = useStyles();
	const classes_two = useStyles_two();

	// const handleMouseOver = () => {
	// 	// console.log("MOUSE HOVERRR");
	// 	dispatch({type: 'HOVER_ON', id: props.id});
	// };

	// const handleMouseLeave = () => {
	// 	// console.log("MOUSE LEFTTTT");
	// 	dispatch({type: 'HOVER_OFF'});
	// };
	// onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}

	return (
		<li onClick={props.onClick} style={listStyle}>
			<Card className={props.selected ? classes_two.card : classes.card}>
				<ThemeProvider theme={props.hover ? theme : theme2}>
					<CardHeader
						avatar={
							<Badge badgeContent={11} color='secondary'>
								<ChatAvatar avatar={props.chatAvatar} />
							</Badge>
						}
						action={<ChatSettingsButton chatType={props.chatType} />}
						title={<Typography varaiant='h1'>{props.chatName}</Typography>}
						subheader={props.recentMessage}
					/>
				</ThemeProvider>
			</Card>
		</li>
	);
};

export default ContactListItem;
