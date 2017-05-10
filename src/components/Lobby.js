
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import RegisterModal from './RegisterModal'
import Footer from './Footer'
Footer

var contestData2 = [ {cost:'$10', name:'Big Event #1', duration:'One Year', lineup:'Standard Football', draft: 'August 27th, 2017', trade:'Yes - Full season', host:'smooth',members:'9 of 16 joined'} , 
{cost:'$10', name:'Big Event #1', duration:'One Year', lineup:'Standard Football', draft: 'August 27th, 2017', trade:'Yes - Full season', host:'smooth',members:'7 of 8 joined'},
{cost:'$50', name:'Big Event #2', duration:'One Year', lineup:'Standard Football', draft: 'August 31st, 2017', trade:'Yes - Full season', host:'smooth',members:'7 of 16 joined'},
{cost:'$100', name:'The Big Hundo!', duration:'One Year', lineup:'Standard Football', draft: 'August 10th, 2017', trade:'Yes - Full season', host:'smooth',members:'4 of 4 joined'}]

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contestData:contestData2
        }

    }



    render() {
        var singleContests = null
        
        singleContests = this.state.contestData.map((item, index)=>{
        return (
          <tr key={index}>
                        <td className="patch-info-drawer-header-text" >
                            <Button className='join-btn green' >Join</Button>
                        </td>
                        <td className="patch-info-drawer-header-text" >{item.cost}</td>
                        <td className="patch-info-drawer-header-text" >{item.name}</td>
                        <td className="patch-info-drawer-header-text" >{item.duration}</td>
                        <td className="patch-info-drawer-header-text" >{item.lineup}</td>
                        <td className="patch-info-drawer-header-text" >{item.draft}</td>
                        <td className="patch-info-drawer-header-text" >{item.trade}</td>
                        <td className="patch-info-drawer-header-text" >{item.host}</td>
                        <td className="patch-info-drawer-header-text" >{item.members}</td> 

          </tr> 
          )
        })

        var contestTable = (
            <table className="table cw-table-list">
                <thead >
                    <tr>
                        <th  >Join</th>
                        <th  >Cost</th>
                        <th  >Name</th>
                        <th  >Duration</th>
                        <th  >Lineup</th>
                        <th  >Draft</th>
                        <th  >Trade</th>
                        <th  >Host </th>
                        <th  >Members</th>
                    </tr>
                </thead>
                <tbody>
                    {singleContests}
                </tbody>
            </table>
        )


            

        


        return (

                <div className='lobby panel-body'>
                    <h1 style={{fontWeight:'bold',fontFamily:"Comic Sans MS"}}>Contest Lobby</h1>
                    <Row>
                         <Col xs={3} style={{'borderRight':' 1px dashed'}}>
                            <h3>Notes</h3>
                            <p style={{textAlign:'left',fontSize:'14px'}}>- All times are in <strong>CST</strong></p>
                            <p style={{textAlign:'left',fontSize:'14px'}}>- No payment information required until leagues are set!</p>
                        </Col>
                        <Col xs={6} style={{'borderRight':' 1px dashed'}}>
                            <h3>Ready to play?</h3>
                            <p style={{fontSize:'18px'}}>Please join the contest of your choice for the best fantasy experience of your life! <strong>Thank You</strong> for choosing the Good Guys! </p>
                        </Col>
                         <Col xs={3}>
                         </Col>
                    </Row>

                   {contestTable}
                   <Footer/>
                </div>
        )
    }
}