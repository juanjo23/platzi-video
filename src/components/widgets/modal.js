import React from 'react';
import './modal.css';

const Modal = (props) => (
  <div>
    <div className="Modal">
      esto es un modal
      {props.children}
      <button onClick={props.handleClick}>cerrar</button>
    </div>
  </div>
);
export default Modal;