import React from 'react';
import Playlist from './playlist';

const Category = (props) => (
  <div className="Category" key={props.id} >
    <div className="header">
      <h2 className="title" > {props.title} </h2>
      <p className="description" > {props.description} </p>
    </div>
    <Playlist handleClick={props.handleClick}
      playlist={props.playlist}
    />
  </div>
)

export default Category;