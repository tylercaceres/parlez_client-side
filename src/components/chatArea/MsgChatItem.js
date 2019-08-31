import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';

import MoreVertIcon from '@material-ui/icons/MoreVert';

const MsgChatItem = ({displayName, createdTimeStamp, creator, children}) => {
	const useStyles = makeStyles((theme) => ({
		card: {
			width: '50%',
			float:
				creator === displayName ? 'right' : creator === 'bot' ? '' : 'left',
			margin: '0 auto'
		},
		avatar: {
			backgroundColor: red[500]
		},
		header: {
			background:
				creator === displayName
					? 'orange'
					: creator === 'bot'
					? 'green'
					: 'pink',
			color: 'black'
		},
		test: {
			margin: theme.spacing(0)
		}
	}));
	const classes = useStyles();

	return (
		<Card className={classes.card}>
			<CardHeader
				className={classes.header}
				avatar={
					<Avatar aria-label='avatar' className={classes.avatar}></Avatar>
				}
				action={
					<IconButton aria-label='settings'>
						<MoreVertIcon />
					</IconButton>
				}
				title={creator}
				subheader={createdTimeStamp}
			/>
			<CardContent>
				<Typography variant='body2' color='textPrimary'>
					{children}
				</Typography>
			</CardContent>
		</Card>
	);
};

export default MsgChatItem;
