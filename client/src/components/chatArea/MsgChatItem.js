import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Box from '@material-ui/core/Box';

const MsgChatItem = ({displayName, createdTimeStamp, creator, children}) => {
	const useStyles = makeStyles((theme) => ({
		card: {
			width: '50%',
			// float:
			// 	creator === displayName ? 'right' : creator === 'bot' ? '' : 'left',
			marginTop: '0.25em',
			marginBottom: '0.25em'
		},
		header: {
			paddingTop: '0em',
			paddingBottom: '0em',
			background:
				creator === displayName
					? 'orange'
					: creator === 'bot'
					? 'green'
					: 'pink',
			color: 'black'
		},
		outer: {
			display: 'flex'

			// marginTop: '50px'
		}
	}));
	const classes = useStyles();

	return (
		<Box className={classes.outer}>
			<Card className={classes.card}>
				<CardHeader
					className={classes.header}
					action={
						<IconButton aria-label='settings'>
							<MoreVertIcon />
						</IconButton>
					}
					title={creator}
					subheader={createdTimeStamp}
				/>
				<CardContent>
					<Typography variant='body1' color='textPrimary'>
						{children}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default MsgChatItem;
