import React, {useState} from 'react';
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
			margin: '0 auto'
		}
	}));
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<MsgEmojiIcon></MsgEmojiIcon>
			<MsgInputField></MsgInputField>
			<MsgSubmitBtn></MsgSubmitBtn>
		</Box>
	);
};

export default MsgChatBox;
