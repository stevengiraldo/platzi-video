import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';

class VideoPlayer extends Component {
  render() {
    return (
      <VideoPlayerLayout>
        <Title title='Esto es un video' />
        <Video />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;