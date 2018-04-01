import React from 'react';
import logo from '../../../images/logo.png';
import './related.css';
import MyPlaylist from './my-playlist';
import PlaylistFriends from './playlist-friends';

function Related(props) {
  return (
    <div className='Related'>
      <img src={logo} width={250} />
      <MyPlaylist myPlaylist={props.myPlaylist} />
      <PlaylistFriends friends={props.friends}/>
    </div>
  )
}

export default Related;