import React from 'react';
import './modal.css';

const Modal = (props) => (
  <div>
    <div className="Modal">
      {props.children}
      <button onClick={props.handleClick}>cerrar</button>
    </div>
  </div>
);
export default Modal;