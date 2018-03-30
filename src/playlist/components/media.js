import React, { Component } from 'react';
import './media.css';

class Media extends Component {

  render() {
    return (
      <div className='Media'>
        <div className='Media-cover'>
          <img className='Media-img'
            src='./images/covers/responsive.jpg' 
            alt='' 
            width={260} 
            height={160} 
          />
        </div>
        <h3 className='Media-title'>¿Por qué aprender Responsive Design?</h3>
        <p className='Media-author'>Steven Giraldo</p>
      </div>
    )
  }
}

export default Media;