import React from 'react';
import PropTypes from 'prop-types';
import './media.css';

function Media(props) {
  return (
    <div className='Media'>
      <div className='Media-cover'>
        <img className='Media-img'
          src={props.cover}
          alt=''
          width={260}
          height={160}
        />
      </div>
      <h3 className='Media-title'>{props.title}</h3>
      <p className='Media-author'>{props.author}</p>
    </div>
  )
}

Media.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['audio', 'video']),
  src: PropTypes.string,
}

export default Media;