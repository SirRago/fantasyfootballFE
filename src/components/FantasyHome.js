import React, { Component } from 'react';
import logo from '../../res/logo.svg';
import Header from './Header'
import '../App.css';

class FantasyApp extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Fantasy Football</h2>
        </div>
        <p className="App-intro">
          Hello! And welcome to the fantasy football.
        </p>
      </div>
    );
  }
}

export default FantasyApp;
