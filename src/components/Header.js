import React from 'react'
import { Row, Col } from 'react-bootstrap'
import RegisterModal from './RegisterModal'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
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

  render() {
    return (
      <div>
          <RegisterModal isOpen={this.state.openModal} closeModal={this.closeRegistrationModal} />
        <Row className='header-parent'>
          <Col xs={1} className='brand-name-tab'>
          </Col>
          <div className='header-background'>
            <Col xs={4} className='brand-name-tab' >
              <div className='brand-name-text'>
                Fantasy Football
              </div>
            </Col>
            <Col xs={2} className='header-tab'>
              <div className='header-tab-text'>son ta ma baitch</div>
            </Col>
            <Col xs={2} className=''>
              <div className=''>&nbsp;</div>
            </Col>
            <Col xs={1} className='header-tab'>
              <div className='header-tab-text' onClick={(() => { this.openRegistrationModal() })}>Register</div>
            </Col>
            <Col xs={2} className='header-tab'>
                <div className='header-tab-text'>Login</div>
            </Col>
          </div>
        </Row>
      </div>
    )
  }
}