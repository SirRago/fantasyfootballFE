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



    render() {
        var formData = (<Form><div className='feedback-icon-div'>

        </div>
            <div>
                <FormGroup controlId='formValidationNull' validationState={null}>
                    <h6 >young text</h6>
                    <FormControl placeholder='Feedback mandatory for dislike.'   ref={DOMcomponent => { this.textBoxDOM = DOMcomponent }} type='text' />
                </FormGroup>
            </div>
        </Form>)
        return (
            <Modal
                show={this.props.isOpen}
                container={this}>

                <Modal.Header >
                    <Modal.Title id='contained-modal-title'>Feedback</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>Registration Form!</h2>
                    {formData}
                </Modal.Body>
                <Modal.Footer>
                    <Button className='close-feedback-btn' onClick={(() => { this.closeModal() })}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
