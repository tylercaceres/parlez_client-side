import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import Box from '@material-ui/core/Box';

import './MsgChatItem.scss';

const MsgChatItem = ({displayName, createdTimeStamp, creator, children}) => {
	const useStyles = makeStyles((theme) => ({
		card: {
			maxWidth: '60%',
			marginTop: '0.25em',
			marginBottom: '0.25em',
			'&:hover .optionBtn': {opacity: '1.0'}
		},
		header: {
			paddingTop: '0em',
			paddingBottom: '0em',
			paddingRight: '0.5em',
			paddingLeft: '0.5em',
			background:
				creator === displayName
					? 'orange'
					: creator === 'bot'
					? 'green'
					: 'pink',
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
					action={
						<IconButton className='optionBtn'>
							<MoreVertIcon />
						</IconButton>
					}
					title={creator}
					subheader={createdTimeStamp}
				/>
				<CardContent className={classes.root}>
					<Typography variant='subtitle2' color='textPrimary'>
						{children}
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};

export default MsgChatItem;
