import React from 'react';
import Media from './media';
import Play from '../../icons/components/play';
import Volume from '../../icons/components/volume';
import Pause from '../../icons/components/pause';
import Fullscreen from '../../icons/components/fullscreen';
import './playlist.css';

function Playlist(props) {
  const playlist = props.playlist
  return (
    <div className='Playlist'>
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