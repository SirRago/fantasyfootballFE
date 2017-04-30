import React, { Component } from 'react';
import {Button, Col, Row} from 'react-bootstrap'
import logo from '../../res/logo.svg';
import Header from './Header'
import Lobby from './Lobby'
import '../App.css';

class FantasyHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: false,
      renderedScreen:'home'
    }
    this.openLobby = this.openLobby.bind(this)

  }

  openLobby(){
    this.setState({
      renderedScreen:'lobby'
    })
  }

  render() {
    var screenDisplay = null

    switch(this.state.renderedScreen) {
    case 'lobby':
      screenDisplay=(<Lobby/>)
        break;
    case "Orange":
        break;
    case "Apple":
        break;
}



    return (
      <div className="App">
        <Header/>         
           <Row>
            <Col>
              <Button className='menu-btn blue' onClick={(() => {      ;       ;})}>Home</Button>
              <Button className='menu-btn blue' onClick={(() => {  this.openLobby()    ;       ;})}>Lobby</Button>
              <Button className='menu-btn blue' onClick={(() => {      ;       ;})}>Rules</Button>
              <Button className='menu-btn blue' onClick={(() => {      ;       ;})}>About Us</Button>
              <Button className='menu-btn blue' onClick={(() => {      ;       ;})}>My Account</Button>
              <Button className='menu-btn blue' onClick={(() => {      ;       ;})}>My Leagues</Button>
              <Button className='menu-btn blue' onClick={(() => {      ;       ;})}>Help/FAQ</Button>            
            </Col>
          </Row>

          {screenDisplay}



        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Fantasy Football</h2>
        </div>
        <p className="App-intro">
          Hello! And welcome to the fantasy football.
        </p>*/}
      </div>
    );
  }
}

export default FantasyHome;
