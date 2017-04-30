import React from 'react'
import { Row, Col, Modal, FormGroup, FormControl, Button, Form, Glyphicon } from 'react-bootstrap'
import ReactDOM from 'react-dom'

export default class RegisterModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

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
        alert("user " + usernameText)
        this.closeModal()
    }



    render() {

        var badInputAlert= null

        var formData = (<Form>
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
