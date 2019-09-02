import React from 'react';
import classnames from 'classnames';

import Delete from '@material-ui/icons/Delete';
// import Edit from '@material-ui/icons/Edit';

import './MsgChatItem.scss';

const MsgChatItem = ({
	displayName,
	createdTimeStamp,
	creator,
	children,
	deleted
}) => {
	const outerBoxClass = classnames('outer-box', {
		'outer-box--mine': displayName === creator,
		'outer-box--theirs': displayName !== creator && displayName !== 'bot',
		'outer-box--bot': creator === 'bot'
	});

	const innerBoxClass = classnames('inner-box', {
		'inner-box--mine': displayName === creator,
		'inner-box--theirs': displayName !== creator && displayName !== 'bot',
		'inner-box--bot': creator === 'bot'
	});

	const headerBoxClass = classnames('header-box', {
		'header-box--mine': displayName === creator,
		'header-box--theirs': displayName !== creator && displayName !== 'bot',
		'header-box--bot': creator === 'bot'
	});

	const contentBoxClass = classnames('content-box', {
		'inner-box--deleted': deleted
	});

	return (
		<div className={outerBoxClass}>
			{/* <div className='box2'>something here</div> */}
			<div className={innerBoxClass}>
				<div className={headerBoxClass}>
					<span className='display-name'>{creator}</span>
					<span className='display-icons'>
						{/* <Edit
							className='edit-icon'
							onClick={() => console.log('edit button clicked')}></Edit> */}
						<Delete
							className='delete-icon'
							onClick={() => console.log('delete button clicked')}></Delete>
					</span>
				</div>
				<div className={contentBoxClass}>{children}</div>
				<div className='footer-box'>
					<span className='time-stamp'>{createdTimeStamp}</span>
				</div>
			</div>
		</div>
	);
};

export default MsgChatItem;
