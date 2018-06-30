import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

import Day from './Day';
import Form from './Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">What Went Well?</h1>
        </header>
        <Form />
        <Day />
        <Day />
        <Day />
      </div>
    );
  }
}

export default App;
