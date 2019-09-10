import React, { useContext } from "react";
import classnames from "classnames";
import { ChatViewContext } from "../../Context";
import { socket } from "../../server_api";

import Delete from "@material-ui/icons/Delete";
// import Edit from '@material-ui/icons/Edit';

import "./MsgChatItem.scss";

const MsgChatItem = ({ createdTimeStamp, creatorId, children, deleted, id, creatorUsername }) => {
  const { masterState, dispatch } = useContext(ChatViewContext);
  const { username, userId } = masterState;

  const outerBoxClass = classnames("outer-box", {
    "outer-box--mine": userId === creatorId,
    "outer-box--theirs": userId !== creatorId && userId !== 0,
    "outer-box--bot": creatorId === 0
  });

  const innerBoxClass = classnames("inner-box", {
    "inner-box--mine": userId === creatorId,
    "inner-box--theirs": userId !== creatorId && userId !== 0,
    "inner-box--bot": creatorId === 0
  });

  const headerBoxClass = classnames("header-box", {
    "header-box--mine": userId === creatorId,
    "header-box--theirs": userId !== creatorId && userId !== 0,
    "header-box--bot": creatorId === 0
  });

  const contentBoxClass = classnames("content-box", {
    "inner-box--deleted": deleted
  });

  const handleDeleteClick = (msg_id, creatorId) => {
    console.log("i clicked the handle delete click button");
    socket.emit("delete msg", { msg_id: msg_id, creatorId: creatorId });
  };

  return (
    <div className={outerBoxClass}>
      {/* <div className='box2'>something here</div> */}
      <div className={innerBoxClass}>
        <div className={headerBoxClass}>
          <span className="display-name">{creatorUsername}</span>
          <span className="display-icons">
            {/* <Edit
							className='edit-icon'
							onClick={() => console.log('edit button clicked')}></Edit> */}
            <Delete className="delete-icon" onClick={() => handleDeleteClick(id, creatorId)}></Delete>
          </span>
        </div>
        <div className={contentBoxClass}>{children}</div>
        <div className="footer-box">
          <span className="time-stamp">{createdTimeStamp}</span>
        </div>
      </div>
    </div>
  );
};

export default MsgChatItem;
