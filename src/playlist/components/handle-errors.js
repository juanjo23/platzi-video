import React, {Component} from 'react';

export default class HandleErrors extends Component {
  state = {
    handleError: false
  }

  componentDidCatch(errors, info) {
    this.setState({
      handleError: true
    })
  }
  render = () => (this.state.handleError ? <p> a pinchi error </p> : this.props.children );
}