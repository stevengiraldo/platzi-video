import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './media.css';

class Media extends Component {
  render() {
    return (
      <div className='Media'>
        <div className='Media-cover'>
          <img className='Media-img'
            src={this.props.cover}
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