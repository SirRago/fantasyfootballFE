import React from 'react'
import { ReactNative, AsyncStorage } from 'react-native'
import { Row, Col, Button, Glyphicon } from 'react-bootstrap'
import RegisterModal from './RegisterModal'
import ReactDOM from 'react-dom'
import axios from 'axios'
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
  }

  openRegistrationModal() {
    this.setState({ openModal: true })
  }

  closeRegistrationModal() {
    this.setState({ openModal: false })
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
    var loginHeaderdata = null

    if (authKey == null) {

      loginHeaderdata =
        (
          <div>
            <RegisterModal isOpen={this.state.openModal} closeModal={this.closeRegistrationModal} />
            <img src={require('../../res/footballbackground.jpeg')}
              className='top-background'/>
            <Row style={{ height: '230px' }}>
              <Col xs={10} />
              <Col xs={2}>
                <h4 style={{ textAlign: 'left' }}>User</h4>
                <input placement='right ' className='form-control' style={{ marginRight: '10px', marginTop: '10px', height: '28px' }} placeholder='Username' ref={DOMcomponent => { this.usernameLogin = DOMcomponent }} />
                <h4 style={{ textAlign: 'left' }}>Password</h4>
                <input className='form-control' style={{ marginRight: '10px', marginTop: '10px', height: '28px' }} placeholder='Password' ref={DOMcomponent => { this.passwordLogin = DOMcomponent }} />
                <Button className='loginButton' onClick={(() => { this.loginUser() })}>
                  <Glyphicon className='glyphicon glyphicon-log-in' ></Glyphicon>
                  &nbsp;&nbsp;Login
                    </Button>

                <Button className='registerButton' onClick={(() => { this.openRegistrationModal() })}>
                  <Glyphicon className='glyphicon glyphicon-log-in' ></Glyphicon>
                  &nbsp;&nbsp;Register
                    </Button>
              </Col>
            </Row>
          </div>)
    }
    else {
      loginHeaderdata = (
        <div>
          <img src={require('../../res/footballbackground.jpeg')}
            className='top-background'></img>
          <Row style={{ height: '230px' }}>
            <h2>User logged in</h2>
          </Row>
          <Button className='logoutButton' onClick={(() => { this.logoutUser() })}>
            <Glyphicon className='glyphicon glyphicon-log-out' ></Glyphicon>
            &nbsp;&nbsp;Logout
              </Button>

        </div>
      )
    }

    return (
      loginHeaderdata


    )
  }
}