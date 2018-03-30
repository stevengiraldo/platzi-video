import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
  handleClick = (event) => {
    console.log(this.props.title)
  }
  render() {
    return (
      <div className='Media' onClick={this.handleClick}>
        <div className='Media-cover'>
          <img className='Media-img'
            src={this.props.src}
            alt=''
            width={260}
            height={160}
          />
        </div>
        <h3 className='Media-title'>{this.props.title}</h3>
        <p className='Media-author'>{this.props.author}</p>
      </div>
    )
  }
}

Media.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['audio', 'video']),
  src: PropTypes.string,
}

export default Media;