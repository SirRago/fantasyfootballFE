import React from 'react'
import { ReactNative, AsyncStorage } from 'react-native'
import { Row, Col, Button, Glyphicon } from 'react-bootstrap'
import RegisterModal from './RegisterModal'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Lobby from './Lobby'
import MyAccount from './MyAccount'
var WebStorage = require('react-webstorage')

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.webStorage = new WebStorage(window.sessionStorage);

    this.state = {
      openModal: false,
      renderedScreen: 'lobby'
    }
    this.openRegistrationModal = this.openRegistrationModal.bind(this)
    this.closeRegistrationModal = this.closeRegistrationModal.bind(this)
    this.openLobby = this.openLobby.bind(this);
    this.myAccount = this.myAccount.bind(this);
  }

  openRegistrationModal() {
    this.setState({ openModal: true })
  }

  closeRegistrationModal() {
    this.setState({ openModal: false })
  }

  openLobby(){
    this.setState({
      renderedScreen:'lobby',
    })
  }

  myAccount(){
    this.setState({
      renderedScreen:'myAccount',
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
      case "myAccount":
        screenDisplay=(<MyAccount/>)
          break;
      case "Apple":
          break;
    }

    console.log("state1: " + this.state.renderedScreen)


    return (
<<<<<<< Updated upstream
      <div className="global-header">
            <div className="global-header-container">
                <Row>
                    <Col xs={2}>
                        <div>
                            <Glyphicon glyph='glyphicon-thumbs-up' className='glyphicon glyphicon-thumbs-up'></Glyphicon>
                            Good Guy Fantasy
                        </div>
                    </Col>

                    <Col xs={1} className='logo-container'>
                        <section className="logo-container">
                            <a href="/" target="_self">
                                <span href="/" className="logo">SICK LOGO</span>
=======
      <div className="global-header global-header-container">
            <Row className="global-header-container global-header">
                <Col xs={2}>
                </Col>

                <Col xs={1} className='logo-container'>
                    <section className="logo-container">
                        <a href="/" target="_self">
                            <span href="/" className="logo">SICK LOGO</span>
                        </a>
                    </section>
                </Col>

                <Col xs={3}>
                    <nav className="primary-nav" data-role="global-header-menu">
                        <Row>
                            <a className="primary-nav-list" data-role="global-header-menu-content" data-maintab="<?= $m->mainTab ?>" data-rendermode="<?= $m->renderMode?>">
                            <Col xs={2}>
                                <h4>
                                    <a onClick={this.openLobby} target="_self" className="primary-nav-item"><span>Lobby</span></a>
                                </h4>
                            </Col>
                            <Col xs={3}>
                                <h4>
                                    <a onClick={this.myAccount} target="_self" className="primary-nav-item"><span>My Account</span></a>
                                </h4>
                            </Col>
                            <Col xs={2}>
                                <h4>
                                    <a onClick={this.openLobby} target="_self" className="primary-nav-item"><span>News</span></a>
                                </h4>
                            </Col>
                            <Col xs={3}>
                                <h4>
                                    <a onClick={this.openLobby} target="_self" className="primary-nav-item"><span>About Us</span></a>
                                </h4>
                            </Col>
>>>>>>> Stashed changes
                            </a>
                            </Row>
                        </nav>
                    </Col>

<<<<<<< Updated upstream
                    <Col xs={3}>
                        <nav className="primary-nav" data-role="global-header-menu">
                            <Row>
                              <a className="primary-nav-list" data-role="global-header-menu-content" data-maintab="<?= $m->mainTab ?>" data-rendermode="<?= $m->renderMode?>">
                                <Col xs={2}>
                                    <h4>
                                        <a onClick={this.openLobby} target="_self" className="primary-nav-item"><span>Lobby</span></a>
                                    </h4>
                                </Col>
                                <Col xs={3}>
                                    <h4>
                                        <a onClick={this.openLobby} target="_self" className="primary-nav-item"><span>Upcoming</span></a>
                                    </h4>
                                </Col>
                                <Col xs={2}>
                                    <h4>
                                        <a onClick={this.openLobby} target="_self" className="primary-nav-item"><span>Live</span></a>
                                    </h4>
                                </Col>
                                <Col xs={2}>
                                    <h4>
                                        <a onClick={this.openLobby} target="_self" className="primary-nav-item"><span>History</span></a>
                                    </h4>
                                </Col>
                                <Col xs={2}>
=======
                <Col xs={1}>
                </Col>

                <Col xs={3}>
                    <nav className="secondary-nav">
                        <Row>
                            <Col xs={4}>
                                <div className="header-referral-center">
>>>>>>> Stashed changes
                                    <h4>
                                        <a onClick={this.openLobby} target="_self" className="primary-nav-item">Earn Cash<br></br><span style={{fontSize: 11}}>Refer Friends</span></a>
                                    </h4>
<<<<<<< Updated upstream
                                </Col>
                               </a>
                              </Row>
                            </nav>
                        </Col>

                    <Col xs={1}>
                    </Col>

                    <Col xs={3}>
                        <nav className="secondary-nav">
                            <Row>
                                <Col xs={4}>
                                    <div className="header-referral-center">
                                        <h4>
                                            <a onClick={this.openLobby} target="_self" className="primary-nav-item">Earn Cash<br></br><span style={{fontSize: 11}}>Refer Friends</span></a>
                                        </h4>
                                    </div>
                                </Col>
                                <Col xs={4} className="balance">
                                    <div>
                                        <span id="balance" className="balance-money">$0</span><br></br>
                                        <span>Balance</span>
                                    </div>
                                </Col>
                                <Col xs={4} className="funds-button-container">
                                        <Button className='funds-button' onClick={(this.openLobby)}>Add Funds</Button>
                                </Col>
                                </Row>
                        </nav>
                      </Col>

                    <Col xs={2}>
                    </Col>
                    
                  </Row>
	      </div>
=======
                                </div>
                            </Col>
                            <Col xs={4} className="balance">
                                <div>
                                    <span id="balance" className="balance-money">$0</span><br></br>
                                    <span>Balance</span>
                                </div>
                            </Col>
                            <Col xs={4} className="funds-button-container">
                                    <Button className='funds-button' onClick={(this.openLobby)}>Add Funds</Button>
                            </Col>
                        </Row>
                    </nav>
                    </Col>

                <Col xs={3}>
                </Col>
            </Row>
>>>>>>> Stashed changes
        <div>
        {screenDisplay}
        </div>
      </div>
    );
  }
}