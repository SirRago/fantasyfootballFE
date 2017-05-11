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
                <img src ={'../../res/footballbackground.jpeg'}/>
                <Row>
                    <Col xs={2}>
                    </Col>
                    <Col xs={1}>
                        <Row>
                            <Col xs={6}>
                                <img src ={require('../../res/member_defaultpic.gif')} alt='memberpic' style={{height:40, width:40}} className='user-image'/>
                            </Col>
                            <Col xs={6}>
                                john jay
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={4}>
                        Hello World
                    </Col>
                    <Col xs={2}>
                        Balance
                    </Col>
                    <Col xs={3}>
                    </Col>
                </Row>
            </div>
        )
    }
}