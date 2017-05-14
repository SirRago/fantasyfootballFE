import React from 'react'
import { Row, Col, Modal, FormGroup, FormControl, Button, Form, Glyphicon } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import axios from 'axios'

export default class ContestInfoModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            err:[],
            stuff:'',
            registerSent:false
        }
        this.closeModal = this.closeModal.bind(this)
    }

    closeModal() {
        this.setState({
        })
        this.props.closeModal()
    }




    render() {
        let contestData = this.props.data

        let bodyData =(
            <h1>Data for contest</h1>
        )


        return (
            <Modal
                show={this.props.isOpen}
                container={this}
                dialogClassName="contest-info-modal">
                

                <Modal.Header >
                    <Modal.Title id='contained-modal-title' style={{textAlign:'center'}}><h1>{contestData}</h1></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                   {bodyData}
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button className='close-registration-btn' onClick={this.closeModal}>Close</Button>
                    <Button className='confirm-registration-btn' onClick={()=>{}}>Join Contest</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}
