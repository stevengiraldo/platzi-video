import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer';
import VideoPlayerControls from '../components/video-player-controls';
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';

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
    loading: false,
    mute: false,
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
      duration: this.video.duration
    })
  }
  handleTimeUpdate = event => {
    this.setState({
      currentTime: this.video.currentTime
    })
  }
  handleProgressChange = event => {
    this.video.currentTime = event.target.value
  }
  handleSeeking = event => {
    this.setState({
      loading: true
    })
  }
  handleSeeked = event => {
    this.setState({
      loading: false
    })
  }
  handleVolumeChange = event => {
    this.video.volume = event.target.value
    if(this.state.mute) {
      this.setState({
        mute: !this.state.mute
      })
    }
  }
  toggleVolume = event => {
    this.setState({
      mute: !this.state.mute
    })
    this.video.volume = !this.video.volume
  }
  handleFullScreenClick = event => {
    console.log('click fullscreen')
    if(!document.webkitIsFullScreen) {
      this.player.webkitRequestFullScreen()
    } else {
      document.webkitExitFullscreen()
    }
  }
  setRef = element => {
    this.player = element
  }
  render() {
    return (
      <VideoPlayerLayout setRef={this.setRef}>
        <Title title='Esto es un video' />
        <VideoPlayerControls>
          <PlayPause 
            handleClick={this.togglePlay}
            pause={this.state.pause}
          />
          <Timer
            duration={formattedTime(this.state.duration)}
            currentTime={formattedTime(this.state.currentTime)}
          />
          <ProgressBar
            duration={this.state.duration}
            time={this.state.currentTime}
            handleProgressChange={this.handleProgressChange}
          />
          <Volume
            handleVolumeChange={this.handleVolumeChange}
            handleClick={this.toggleVolume}
            mute={this.state.mute}
          />
          <FullScreen
            handleFullScreenClick={this.handleFullScreenClick}
          />
        </VideoPlayerControls>
        <Spinner active={this.state.loading} />
        <Video 
          autoplay={this.props.autoplay}
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          handleSeeking={this.handleSeeking}
          handleSeeked={this.handleSeeked}
        />
      </VideoPlayerLayout>
    )
  }
}

export default VideoPlayer;