import React, {Component} from 'react';
import './vide-player.css';
import {Title} from './title';

export default class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.media = props.media;
  }
  render = () => (
    <div className="video-player">
      <Title title={this.media.title} />
      <video
        controls
        autoPlay
        poster={this.media.cover}
        src={this.media.src }
        width={'100%'}>
      </video>
    </div>
  )
}