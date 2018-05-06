import React from 'react';
import Media from './media';
import './playlist.css';
import './media.css';

const Playlist = (props) => (
  <div>
    <div className="Playlist-wrapper">
      <div className="PlayList">
        {
          props.playlist.map(item => <Media {...item} key={item.id} handleClick={props.handleClick}/>)
        }
      </div>
    </div>
  </div>
)

export default Playlist;
