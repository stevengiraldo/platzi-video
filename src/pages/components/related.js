import React from 'react';
import logo from '../../../images/logo.png';
import './related.css';
import MyPlaylist from './my-playlist';
import PlaylistFriends from './playlist-friends';

function Related(props) {
  return (
    <div className='Related'>
      <img src='./dist/images/logo.c06f5e5a2ae47006c0b77be4de6a2077.png' width={250} />
      <MyPlaylist myPlaylist={props.myPlaylist} />
      <PlaylistFriends friends={props.friends}/>
    </div>
  )
}

export default Related;