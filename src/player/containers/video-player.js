import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';

class VideoPlayer extends Component {
  state = {
    pause: false,
  }
  togglePlay = (event) => {
    this.setState({
      pause: !this.state.pause
    })
  }
  componentDidMount() {
    this.setState({
      pause: (!this.props.autoplay)
    })
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title title='Esto es un video' />
        <PlayPause 
          handleClick={this.togglePlay}
          pause={this.state.pause}
        />
        <Video 
          autoplay={this.props.autoplay}
          pause={this.state.pause}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;