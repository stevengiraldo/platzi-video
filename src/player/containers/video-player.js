import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';

class VideoPlayer extends Component {
  render() {
    return (
      <VideoPlayerLayout>
        <video
          controls
          autoPlay
          width={500}
          src='http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;