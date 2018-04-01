import React from 'react';
import FriendLabel from './friend-label';

function PlaylistFriends(props) {
  return (
    <div className='PlaylistFriends'>
      <h3>Playlists de amigos</h3>
      {
        props.friends.map((item) => {
          return <FriendLabel
            {...item}
            key={item.id}
          />
        })
      }
    </div>
  )
}

export default PlaylistFriends;