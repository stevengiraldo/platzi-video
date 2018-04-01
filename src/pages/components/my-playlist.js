import React from 'react';
import './my-playlist.css';

function MyPlaylist(props) {
  return (
    <div className='MyPlaylist'>
      <h3>Mi Playlist</h3>
      {
        props.myPlaylist.map((item) => {
          return <p key={item.id}>{item.id}. {item.title}</p>
        })
      }
    </div>
  )
}

export default MyPlaylist;