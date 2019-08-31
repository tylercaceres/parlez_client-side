import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	textField: {
		marginLeft: theme.spacing(1),
		marginRight: theme.spacing(1),
		width: 200
	},
	dense: {
		marginTop: 19
	},
	menu: {
		width: 200
	}
}));

const MsgChatItem = () => {
	const classes = useStyles();

	return (
		<Box color='text.primary'>
			{(props) => <Button {...props}>BUTTON</Button>}
		</Box>
	);
};

export default MsgChatItem;
