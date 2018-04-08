import React, { Component } from 'react';
import './video.css';

class Video extends Component {
  togglePlay() {
    if(this.props.pause) {
      this.video.play()
    } else {
      this.video.pause()
    }
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.pause !== this.props.pause) {
      this.togglePlay()
    }
  }
  setRef = element => {
    this.video = element
  }
  render() {
    const {
      handleLoadedMetadata,
      handleTimeUpdate,
    } = this.props
    return (
      <div className='Video'>
        <video
          autoPlay={this.props.autoplay}
          width={500}
          src='http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4'
          ref={this.setRef}
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
        />
      </div>
    )
  }
}

export default Video;