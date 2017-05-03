import React from 'react'
import { Row, Col, Modal, FormGroup, FormControl, Button, Form, Glyphicon } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class RegisterModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            err:'',
            stuff:'',
            registerSent:false
        }
    }

    closeModal() {
        this.setState({
        })
        this.props.closeModal()
    }

    registerUser(){
        var usernameText = ReactDOM.findDOMNode(this.usernameText).value
        var passwordText = ReactDOM.findDOMNode(this.passwordText).value
        var passwordConfirmText = ReactDOM.findDOMNode(this.passwordConfirmText).value
        var emailText = ReactDOM.findDOMNode(this.emailText).value
        var emailConfirmText = ReactDOM.findDOMNode(this.emailConfirmText).value
        var errMessage = ''

        if(usernameText.length > 25 || usernameText == 0){errMessage+='Username must be 1-25 characters\n'}
        if(passwordText.length > 25 || passwordText == 0){errMessage+='Password must be 1-25 characters\n '}
        if(passwordText != passwordConfirmText){errMessage+='Password does not match confirmation password\n '}
        if(emailText != emailConfirmText){errMessage+='Email does not match confirmation email\n '}

      axios.post('http://localhost:5000/api/v1/register', {
        username: usernameText,
        password: passwordText,
        email:emailText 
    })
      .then((data) => {
        var data = {}
        data.authKey = 'key from data'
        this.setState({
            stuff:data['data']['status'] + " " + data['data']['message'],
            err:errMessage
        })

        // this.webStorage.setItem('auth_key_GGF', data.authKey);
        // this.webStorage.setItem('username_GGF', userEntered);
        
      })
      .catch((err) => {
        var data = {}
        data.authKey = 'key from data'
        // this.webStorage.setItem('auth_key_GGF', data.authKey);
        // this.webStorage.setItem('username_GGF', userEntered);
        

      })

    }



    render() {

        var badInputAlert= null

        var formData 
        if (this.state.registerSent == false ){
        formData = (<Form>
            {/*<div className='feedback-icon-div'>

        </div>*/}
            <div>
                <FormGroup controlId='formValidationNull' validationState={null}>
                    <Row className='registration-inputfields'>
                        <Col xs={3}>
                            <h5 >Username </h5>
                        </Col>
                        <Col xs={9}>
                             <input className='form-control' placeholder='Username'  ref={DOMcomponent => { this.usernameText = DOMcomponent }}/>
                        </Col>
                    </Row>
                    <Row className='registration-inputfields'>
                        <Col xs={3}>
                            <h5 >Password </h5>
                        </Col>
                        <Col xs={9}>
                            <input className='form-control' placeholder='Password' type='password' ref={DOMcomponent => { this.passwordText = DOMcomponent }}/>
                       
                        </Col>
                    </Row>
                    <Row className='registration-inputfields'>
                        <Col xs={3}>
                            <h5 > Confirm Password </h5>
                        </Col>
                        <Col xs={9}>
                            <input className='form-control' placeholder='Please type password again for confirmation' type='password' ref={DOMcomponent => { this.passwordConfirmText = DOMcomponent }}/>
                       
                        </Col>
                    </Row>
                    <Row className='registration-inputfields'>
                        <Col xs={3}>
                            <h5 >Email </h5>
                        </Col>
                        <Col xs={9}>
                             <input className='form-control' placeholder='Email' ref={DOMcomponent => { this.emailText = DOMcomponent }}/>
                        </Col>
                    </Row>
                    <Row className='registration-inputfields'>
                        <Col xs={3}>
                            <h5 > Confirm Email </h5>
                        </Col>
                        <Col xs={9}>
                             <input className='form-control' placeholder='Please type email again for confirmation' ref={DOMcomponent => { this.emailConfirmText = DOMcomponent }}/>
                        </Col>
                    </Row>
                    {badInputAlert}
                </FormGroup>
            </div>
        </Form>)
    }
        return (
            <Modal
                show={this.props.isOpen}
                container={this}>

                <Modal.Header >
                    <Modal.Title id='contained-modal-title' style={{textAlign:'center'}}>Registration for Good Guys Fantasy </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   
                    {formData}
                </Modal.Body>
                <Modal.Footer>
                    <Button className='close-registration-btn' onClick={(() => { this.closeModal() })}>Close</Button>
                    <Button className='confirm-registration-btn' onClick={(() => { this.registerUser() })}>Register</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
