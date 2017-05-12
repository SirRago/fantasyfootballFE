import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import RegisterModal from './RegisterModal'
import Footer from './Footer'

export default class MyAccount extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contestData: null,
        }
    }



    render() {


        return (
            <div className='myAccount'>
                <div className='myAccount-header'>
                    <Row>
                        <Col xs={2}>
                        </Col>
                        <Col xs={2}>
                            <Row>
                                <Col xs={3}>
                                    <img src ={require('../../res/member_defaultpic.gif')} alt='memberpic' style={{height:60, width:60}} className='user-image'/>
                                </Col>
                                <Col xs={6} style={{fontSize:10, paddingTop:15}}>
                                    John Jay<br></br>PIRATEHUNTER15
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={3}>
                            Hello World
                        </Col>
                        <Col xs={2} className='balance-containter'>
                            <span className='white-text'>$0.00</span><br></br>BALANCE
                        </Col>
                        <Col xs={3}>
                        </Col>
                    </Row>
                </div>
                <div className='myAccount-body'>
                    Darko
                </div>    
            </div>
        )
    }
}