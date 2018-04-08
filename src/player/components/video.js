import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  render() {
    return (
      <div className='Video'>
        <video
          autoPlay={true}
          width={500}
          src='http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
        />
      </div>
    )
  }
}

export default Video;