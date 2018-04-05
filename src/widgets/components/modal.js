import React from 'react';
import './modal.css';

function Modal(props) {
  return (
    <div className='Modal'>
      <h1>Esto es una modal</h1>
      {props.children}
      <button onClick={props.handleClick}>close</button>
    </div>
  )
}

export default Modal;