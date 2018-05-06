import React, {Component} from 'react';
import './media.css';
import PropTypes from 'prop-types';

class Media extends Component {
  state = {
    author: this.props.author,
    toggle: true
  }
  /*
  handleClick = (event) => {
    console.log(this.props);
    const toggle = this.state.toggle;
    const author = toggle ? 'Ricardo Cells': this.props.author;

    this.setState({
      author: author,
      toggle: !toggle
    })
  }
  */
  render = () => {
    const author = this.state.author;
    const {title, cover} = this.props;
    return (
      <div className="Media" onClick={this.props.handleClick}>
        <div className="Media-cover">
          <img className="Media-image" src={cover} />
          <h3 className="Media-title" > {title}</h3>
          <p className="Media-author" >{author}</p>
        </div>
      </div>
    )
  }
}

Media.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
}

export default Media;