import React from 'react'
import { Row, Col, Modal, FormGroup, FormControl, Button, Form, Glyphicon } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class RegisterModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            err:[],
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
        var err = []

        if(usernameText.length > 25 || usernameText == 0){err.push('Username must be 1-25 characters')}
        if(passwordText.length > 25 || passwordText == 0){err.push('Password must be 1-25 characters')}
        if(emailText.length > 25 || emailText == 0){err.push('Email must be 1-100 characters')}
        if(passwordText != passwordConfirmText){err.push('Password does not match confirmation password')}
        if(emailText != emailConfirmText){err.push('Email does not match confirmation email')}

        if (err.length != 0 ) {console.log('err was eset', err);this.setState({err:err}) }
        else{



      axios.post('http://localhost:5000/api/v1/register', {
        username: usernameText,
        password: passwordText,
        email:emailText 
    })
      .then((data) => {
          console.log('made call to backend')
        data.authKey = 'key from data'
        
        console.log(data['data']['status'] + " " + data['data']['message'])
        this.setState({
            err:err
        })

        // this.webStorage.setItem('auth_key_GGF', data.authKey);
        // this.webStorage.setItem('username_GGF', userEntered);
        
      })
      .catch((err) => {
          console.log(err)
        this.setState({
            stuff:err + " " + err.message,
            err:err
        })
        // this.webStorage.setItem('auth_key_GGF', data.authKey);
        // this.webStorage.setItem('username_GGF', userEntered);
        

      })
    }

}



    render() {
        var badInputAlert

        if(this.state.err.length != 0){
            badInputAlert= this.state.err.map((e, index)=>{
                console.log(e)
                return (<h5 className='registrationErr' key={'err'+index} >{e}</h5>)
            })
        }
        else{badInputAlert = null}

        var formData 
        if (this.state.registerSent == false ){
            formData = (<Form>
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
        else{
            formData = (
            <Form>
                <div>
                    <FormGroup controlId='formValidationNull' validationState={null}>
                        <Row className='registration-inputfields'>
                            <Col xs={3}>
                                <h5 >Username </h5>
                            </Col>
                            <Col xs={9}>
                                <i/>
                            </Col>
                        </Row>
                        <Row className='registration-inputfields'>
                            <Col xs={3}>
                                <h5 >Password </h5>
                            </Col>
                            <Col xs={9}>
                                <input/>
                        
                            </Col>
                        </Row>
                        <Row className='registration-inputfields'>
                            <Col xs={3}>
                                <h5 > Confirm Password </h5>
                            </Col>
                            <Col xs={9}>
                                <input />
                        
                            </Col>
                        </Row>
                        <Row className='registration-inputfields'>
                            <Col xs={3}>
                                <h5 >Email </h5>
                            </Col>
                            <Col xs={9}>
                                <input />
                            </Col>
                        </Row>
                        <Row className='registration-inputfields'>
                            <Col xs={3}>
                                <h5 > Confirm Email </h5>
                            </Col>
                            <Col xs={9}>
                                <input/>
                            </Col>
                        </Row>
                        {badInputAlert}
                    </FormGroup>
                </div>
            </Form>
        )}

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
