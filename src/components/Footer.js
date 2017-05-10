
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import RegisterModal from './RegisterModal'


export default class Footer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }



    render() {
        

        


        return (
        <div className="footer">

                <Row>
                    <Col xs={2}>
                    </Col>
                    <Col xs={3}>
                        <h4 className = 'footer-columns'>Connect</h4>
                        
                            <p className = 'footer-p'>some crap 
                            </p>
                            <p className = 'footer-p'>some other crap 
                            </p>
                            <p className = 'footer-p'>SOme real shit
                            </p>
                            <p className = 'footer-p'>some other crap 
                            </p>                              
                        
                            
                    </Col>
                    <Col xs={3}>
                        <h4 className = 'footer-columns'>something</h4>
                        <ul>
                            <p className = 'footer-p'>
                                <a href="http://www.google.com">Google</a>
                                <br></br>
                                <span>Google Search Engine</span>
                            </p>
                            <br></br>
                            <p className = 'footer-p'>
                                <a href="http://www.yahoo.com">Yahoo</a>
                                <br></br>
                                <span>Yahoo Search Engine</span>
                            </p>
                        </ul>
                    </Col>
                    <Col xs={3}>
                        <h4 className = 'footer-columns'>fmdkfmds</h4>
                    </Col>
                    <Col xs={1}>
                    </Col>
                </Row>
            </div>


        )
    }
}