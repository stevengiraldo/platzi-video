import React from 'react';
import VolumeIcon from '../../icons/components/volume';
import MuteIcon from '../../icons/components/mute';
import './volume.css';

const Volume = (props) => (
  <button className='Volume'>
    <div onClick={props.handleClick}>
      {
        !props.mute ?
        <VolumeIcon
          color='white'
          size={25}
        />
        :
        <MuteIcon
          color='white'
          size={25}
        />
      }
    </div>
    <div className='Volume-range'>
      <input
        type='range'
        min={0}
        max={1}
        step={.05}
        onChange={props.handleVolumeChange}
      />
    </div>
  </button>
)

export default Volume;