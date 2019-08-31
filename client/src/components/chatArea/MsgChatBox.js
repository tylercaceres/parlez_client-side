import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

import MsgEmojiIcon from './MsgEmojiIcon';
import MsgSubmitBtn from './MsgSubmitBtn';
import MsgInputField from './MsgInputField';

const MsgChatBox = () => {
	const useStyles = makeStyles((theme) => ({
		button: {
			margin: theme.spacing(1)
		},
		leftIcon: {
			marginRight: theme.spacing(1)
		},
		rightIcon: {
			marginLeft: theme.spacing(1)
		},
		iconSmall: {
			fontSize: 20
		},
		container: {
			display: 'flex',
			alignItems: 'center',
			margin: '0'
		},
		emoji: {
			padding: '1em'
		}
	}));
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Box className={classes.emoji}>
				<MsgEmojiIcon></MsgEmojiIcon>
			</Box>
			<MsgInputField></MsgInputField>
			<Box className={classes.emoji}>
				<MsgSubmitBtn></MsgSubmitBtn>
			</Box>
		</Box>
	);
};

export default MsgChatBox;
