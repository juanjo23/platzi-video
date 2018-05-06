import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Media from './playlist/components/media';
import data from './api.json';
import PlayList from './playlist/components/playlist';

class App extends Component {
  render() {
    console.log('data => ', data);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <PlayList data={data} />
      </div>
    );
  }
}

export default App;
