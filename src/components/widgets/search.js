import React, {Component} from 'react';
import './search.css';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Luis Fonsi'
    }
  }

  componentDidMount() {
    this.setState({
      value: this.input.value.replace(/ /g, '-')
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }
  handleInputChange = (event) => {
    this.setState({
      value: event.target.value.replace(/ /g, '-')
    })
  }
  setInputRef = (element) => {
    this.input = element;

  }
  render = () => (
    <form
      className="Search"
      onSubmit={this.handleSubmit}>
      <input
        ref={this.setInputRef}
        type="text"
        placeholder="Search for your favorite video"
        className="Search-input"
        onChange={this.handleInputChange}
        value={this.state.value}
        />
    </form>
  )
}

export default Search;