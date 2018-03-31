import React from 'react';
import Media from './media';
import Play from '../../icons/components/play';
import './playlist.css';

function Playlist(props) {
  const playlist = props.playlist
  return (
    <div className='Playlist'>
      <Play size={30} color='red' />
      {
        playlist.map((item) => {
          return <Media
            {...item}
            key={item.id}
          />
        })
      }
    </div>
  )
}

export default Playlist;