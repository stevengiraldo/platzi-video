import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import VideoPlayerControls from '../components/video-player-controls';

function formattedTime(secs) {
  const minutes = parseInt(secs / 60, 10)
  const seconds = parseInt(secs % 60, 10)
  return `${leftPad(minutes.toString())}:${leftPad(seconds.toString())}`
}
function leftPad(number) {
  const pad = '00'
  return pad.substring(0, pad.length - number.length) + number 
}

class VideoPlayer extends Component {
  state = {
    pause: false,
    duration: 0,
    currentTime: 0,
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
  handleLoadedMetadata = event => {
    this.video = event.target;
    this.setState({
      duration: formattedTime(this.video.duration)
    })
  }
  handleTimeUpdate = event => {
    this.setState({
      currentTime: formattedTime(this.video.currentTime)
    })
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title title='Esto es un video' />
        <VideoPlayerControls>
          <PlayPause 
            handleClick={this.togglePlay}
            pause={this.state.pause}
          />
          <Timer
            duration={this.state.duration}
            currentTime={this.state.currentTime}
          />
        </VideoPlayerControls>
        <Video 
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;