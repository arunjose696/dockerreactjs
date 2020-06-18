import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
	  <img src={logo} className="App-logo" alt="logo" />
	  <img src={logo} className="App-logo" alt="logo" />
	  <img src={logo} className="App-logo" alt="logo" />
        </div>
	<div className="App-header1">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>just testing a second header</h2>

        </div>

	    
        <p className="App-intro">
          To get jiji started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
