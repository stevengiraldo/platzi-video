import React from 'react';
import './friend-label.css';

function FriendLabel(props) {
  return (
    <div className='FriendLabel'>
      <div className='FriendLabel-avatar'>
        <img src={props.avatar} width={40} />
      </div>
      <p>{props.fullname}</p>
    </div>
  )
}

export default FriendLabel;