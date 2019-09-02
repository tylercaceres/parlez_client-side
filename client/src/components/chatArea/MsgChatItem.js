import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Box from '@material-ui/core/Box';

import './MsgChatItem.scss';

const MsgChatItem = ({displayName, createdTimeStamp, creator, children}) => {
	const useStyles = makeStyles((theme) => ({
		card: {
			width: '40%',
			marginTop: '0.25em',
			marginBottom: '0.25em',
			'&:hover .delete-icon': {opacity: 100},
			'&:hover .edit-icon': {opacity: 100}
		},
		header: {
			paddingTop: '0em',
			paddingBottom: '0em',
			paddingRight: '0.5em',
			paddingLeft: '0.5em',
			background:
				creator === displayName
					? 'lightblue'
					: creator === 'bot'
					? 'lightgrey'
					: 'lightgreen',
			color: 'black'
		},
		outer: {
			display: 'flex',
			justifyContent:
				creator === displayName
					? 'flex-end'
					: creator === 'bot'
					? 'center'
					: 'flex-start'
		},
		root: {
			'&:last-child': {
				paddingBottom: '0em'
			},
			padding: '0.25em'
		}
	}));
	const classes = useStyles();

	return (
		<Box className={classes.outer}>
			<Card className={classes.card}>
				<CardHeader
					className={classes.header}
					title={
						<Typography align='left' variant='subtitle1'>
							{creator}
						</Typography>
					}
				/>
				<CardContent className={classes.root}>
					<Typography variant='subtitle2' color='textPrimary'>
						{children}
					</Typography>
					<Box className='content-box'>
						<Typography className='dateFormat' variant='caption'>
							{createdTimeStamp}
						</Typography>
						{displayName === creator && (
							<Box className='icon-box'>
								<Edit
									className='edit-icon'
									onClick={() => console.log('edit button clicked')}></Edit>
								<Delete
									className='delete-icon'
									onClick={() => console.log('delete button clicked')}></Delete>
							</Box>
						)}
					</Box>
				</CardContent>
			</Card>
		</Box>
	);
};

export default MsgChatItem;
