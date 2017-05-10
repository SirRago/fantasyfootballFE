import React from 'react'
import { ReactNative, AsyncStorage } from 'react-native'
import { Row, Col, Button, Glyphicon } from 'react-bootstrap'
import RegisterModal from './RegisterModal'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Lobby from './Lobby'
var WebStorage = require('react-webstorage')

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.webStorage = new WebStorage(window.sessionStorage);

    this.state = {
      openModal: false
    }
    this.openRegistrationModal = this.openRegistrationModal.bind(this)
    this.closeRegistrationModal = this.closeRegistrationModal.bind(this)
    this.openLobby = this.openLobby.bind(this);
  }

  openRegistrationModal() {
    this.setState({ openModal: true })
  }

  closeRegistrationModal() {
    this.setState({ openModal: false })
  }

  openLobby(){
    this.setState({
      renderedScreen:'lobby'
    })
  }

  loginUser() {
    console.log('login clicked')

    var userEntered = ReactDOM.findDOMNode(this.usernameLogin).value
    var passEntered = ReactDOM.findDOMNode(this.passwordLogin).value
     //GET KEY FROM BACKEND FIRST

    axios.post('http://', {
      username: userEntered,
      password: passEntered 
    })
      .then((data) => {
        var data = {}
        data.authKey = 'key from data'
        this.webStorage.setItem('auth_key_GGF', data.authKey);
        this.webStorage.setItem('username_GGF', userEntered);
        this.props.loginUserMain(true)
      })
      .catch((err) => {
        var data = {}
        data.authKey = 'key from data'
        this.webStorage.setItem('auth_key_GGF', data.authKey);
        this.webStorage.setItem('username_GGF', userEntered);
        this.props.loginUserMain(true)

      })
  }

  logoutUser() {
    this.webStorage.removeItem('auth_key_GGF');
    this.webStorage.removeItem('username_GGF');
    this.props.loginUserMain(false)
  }

  render() {
    var authKey = this.webStorage.getItem('auth_key_GGF')
    var screenDisplay = null
    var loginHeaderdata = null;

    console.log("state: " + this.state.renderedScreen)

    switch(this.state.renderedScreen) {
      case 'lobby':
        screenDisplay=(<Lobby/>)
          break;
      case "Orange":
          break;
      case "Apple":
          break;
    }

    console.log("state1: " + this.state.renderedScreen)


    return (
      <div className="global-header">
            <div className="global-header-container">
                  <section className="logo-container">
                      <a href="/" target="_self" className="header-link">
                          <span href="/" className="logo logo-tagline">Logo</span>
                      </a>
                  </section>

                        <nav className="primary-nav" data-role="global-header-menu">
                            <row>
                              <a className="primary-nav-list" data-role="global-header-menu-content" data-maintab="<?= $m->mainTab ?>" data-rendermode="<?= $m->renderMode?>">
                                <Col xs={2}>
                                    <h4 className="primary-nav-item">
                                        <Button onClick={this.openLobby} className="header-button"><span>Lobby</span></Button>
                                    </h4>
                                </Col>
                                <Col xs={3}>
                                    <h4 className="primary-nav-item">
                                        <a href="/upcoming" className="primary-nav-anchor link-upcoming-contests" target="_self"><span className="link-text">Upcoming</span></a>
                                    </h4>
                                </Col>
                                <Col xs={2}>
                                    <h4 className="primary-nav-item">
                                        <a href="/live" className="primary-nav-anchor link-live-contests" target="_self"><span className="link-text">Live</span></a>
                                    </h4>
                                </Col>
                                <Col xs={2}>
                                    <h4 className="primary-nav-item">
                                        <a href="/p/MyEntryHistory" className="primary-nav-anchor link-historical-contests" target="_self"><span className="link-text">History</span></a>
                                    </h4>
                                </Col>
                                <Col xs={2}>
                                    <h4 class="primary-nav-item">
                                        <a href="/leagues" className="primary-nav-anchor link-friends-mode" target="_self"><span className="link-text">Friends</span></a>
                                    </h4>
                                </Col>
                              </a>
                            </row>
                        </nav>

                      <nav class="secondary-nav">
                          <row>
                              <Col xs={8}>
                                <div className="header-referral-center">
                                    <a href="/referrals" target="_self" className="primary-nav-anchor">
                                        Earn Cash<br></br>
                                        <span style={{fontSize:12}}>Refer friends</span>
                                    </a>
                                </div>
                            </Col>
                            <Col xs={2}>
                                <div className="header-add-funds user-balance-block">
                                    <div className="user-balance">
                                        <span id="balance" className="balance-header">$0.00</span>
                                        <span className="balance-label">Balance</span>
                                    </div>
                                    <a href="/p/AddFunds" target="_self" className="button primary tiny link-add-funds">Add funds</a>
                                </div>
                            </Col>
                            </row>
                          
                      </nav>
                  
	      </div>
        <div>
        {screenDisplay}
        </div>
      </div>
    );
  }
}