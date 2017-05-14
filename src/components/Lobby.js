
import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import RegisterModal from './RegisterModal'
import Footer from './Footer'
Footer

var contestData2 = [ {cost:'$10', name:'Big Event #1', duration:'One Year', lineup:'Standard Football', draft: 'August 27th, 2017', trade:'Yes - Full season', host:'smooth',members:'9 of 16 joined'} , 
{cost:'$25', name:'Big Event #1', duration:'One Year', lineup:'Standard Football', draft: 'August 27th, 2017', trade:'Yes - Full season', host:'smooth',members:'7 of 8 joined'},
{cost:'$50', name:'Big Event #2', duration:'One Year', lineup:'Standard Football', draft: 'August 31st, 2017', trade:'Yes - Full season', host:'smooth',members:'7 of 16 joined'},
{cost:'$100', name:'The Big Hundo!', duration:'One Year', lineup:'Standard Football', draft: 'August 10th, 2017', trade:'Yes - Full season', host:'smooth',members:'4 of 4 joined'},
{cost:'$250', name:'Pauls nastty 250!!!!', duration:'One Year', lineup:'Standard Football', draft: 'August 10th, 2017', trade:'Yes - Full season', host:'smooth',members:'4 of 4 joined'},
{cost:'$500', name:'Cuongs 500!!', duration:'One Year', lineup:'Standard Football', draft: 'August 10th, 2017', trade:'Yes - Full season', host:'smooth',members:'4 of 4 joined'},
{cost:'$1000', name:'The Big THOUSAND!!!', duration:'One Year', lineup:'Standard Football', draft: 'August 10th, 2017', trade:'Yes - Full season', host:'smooth',members:'4 of 4 joined'},
{cost:'$1000', name:'The Big THOU!!', duration:'One Year', lineup:'Standard Football', draft: 'August 10th, 2017', trade:'Yes - Full season', host:'smooth',members:'4 of 4 joined'}]

export default class Lobby extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            allContestData:contestData2,
            contestData:contestData2,
            contestView:25
        }
        this.show25contests = this.show25contests.bind(this);
        this.show50contests = this.show50contests.bind(this);
        this.show100contests = this.show100contests.bind(this);
        this.show250contests = this.show250contests.bind(this);
        this.show500contests = this.show500contests.bind(this);
        this.show1000contests = this.show1000contests.bind(this);

    }

    show25contests(){
        let contests25 = this.state.allContestData.filter((e)=>{
            return e.cost == '$25'
        })
        this.setState({
            contestData: contests25,
            contestView:25
        })
    }

    show50contests(){
        let contests50 = this.state.allContestData.filter((e)=>{
            return e.cost == '$50'
        })
        this.setState({
            contestData: contests50,
            contestView:50
        })
    }
    show100contests(){
        let contests100 = this.state.allContestData.filter((e)=>{
            return e.cost == '$100'
        })
        this.setState({
            contestData: contests100,
            contestView:100
        })
    }
    show250contests(){
        let contests250 = this.state.allContestData.filter((e)=>{
            return e.cost == '$250'
        })
        this.setState({
            contestData: contests250,
            contestView:250
        }) 
    }
    show500contests(){
        let contests500 = this.state.allContestData.filter((e)=>{
            return e.cost == '$500'
        })
        this.setState({
            contestData: contests500,
            contestView:500
        })
    }
    show1000contests(){
        let contests1000 = this.state.allContestData.filter((e)=>{
            return e.cost == '$1000'
        })
        this.setState({
            contestData: contests1000,
            contestView:1000
        })
    }            


    render() {
        var singleContests = null
        
        singleContests = this.state.contestData.map((item, index)=>{
        return (
          <tr key={index}>
                        <td className="patch-info-drawer-header-text" >
                            <Button className='join-btn green' >Join</Button>
                        </td>
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

        let labels = null

        switch (this.state.contestView) {
        case 25:
            labels=(
                <Row className = 'label-row'>       
                    <label className= 'label-input-clicked' onClick={this.show25contests}>$25</label>
                    <label className= 'label-input' onClick={this.show50contests} >$50</label>
                    <label className= 'label-input' onClick={this.show100contests} >$100</label>
                    <label className= 'label-input' onClick={this.show250contests} >$250</label>
                    <label className= 'label-input' onClick={this.show500contests} >$500</label>
                    <label className= 'label-input' onClick={this.show1000contests} >$1000</label>
                </Row>
            )
            break;
        case 50:
            labels=(
                <Row className = 'label-row'>       
                    <label className= 'label-input' onClick={this.show25contests}>$25</label>
                    <label className= 'label-input-clicked' onClick={this.show50contests} >$50</label>
                    <label className= 'label-input' onClick={this.show100contests} >$100</label>
                    <label className= 'label-input' onClick={this.show250contests} >$250</label>
                    <label className= 'label-input' onClick={this.show500contests} >$500</label>
                    <label className= 'label-input' onClick={this.show1000contests} >$1000</label>
                </Row>
            )        
            break;
        
        case 100:
        labels=(
                <Row className = 'label-row'>       
                    <label className= 'label-input' onClick={this.show25contests}>$25</label>
                    <label className= 'label-input' onClick={this.show50contests} >$50</label>
                    <label className= 'label-input-clicked' onClick={this.show100contests} >$100</label>
                    <label className= 'label-input' onClick={this.show250contests} >$250</label>
                    <label className= 'label-input' onClick={this.show500contests} >$500</label>
                    <label className= 'label-input' onClick={this.show1000contests} >$1000</label>
                </Row>  
        )      
            break;
        case 250:
        labels=(
                <Row className = 'label-row'>       
                    <label className= 'label-input' onClick={this.show25contests}>$25</label>
                    <label className= 'label-input' onClick={this.show50contests} >$50</label>
                    <label className= 'label-input' onClick={this.show100contests} >$100</label>
                    <label className= 'label-input-clicked' onClick={this.show250contests} >$250</label>
                    <label className= 'label-input' onClick={this.show500contests} >$500</label>
                    <label className= 'label-input' onClick={this.show1000contests} >$1000</label>
                </Row>        
        )
            break;
        case 500:
        labels=(
                <Row className = 'label-row'>       
                    <label className= 'label-input' onClick={this.show25contests}>$25</label>
                    <label className= 'label-input' onClick={this.show50contests} >$50</label>
                    <label className= 'label-input' onClick={this.show100contests} >$100</label>
                    <label className= 'label-input' onClick={this.show250contests} >$250</label>
                    <label className= 'label-input-clicked' onClick={this.show500contests} >$500</label>
                    <label className= 'label-input' onClick={this.show1000contests} >$1000</label>
                </Row> 
        )       
            break;
        case 1000:
        labels=(
                <Row className = 'label-row'>       
                    <label className= 'label-input' onClick={this.show25contests}>$25</label>
                    <label className= 'label-input' onClick={this.show50contests} >$50</label>
                    <label className= 'label-input' onClick={this.show100contests} >$100</label>
                    <label className= 'label-input' onClick={this.show250contests} >$250</label>
                    <label className= 'label-input' onClick={this.show500contests} >$500</label>
                    <label className= 'label-input-clicked' onClick={this.show1000contests} >$1000</label>
                </Row>      
        )  
            break;                                    
        default:
            break;
        }

       


        return (

            //bar up top to choose sport
            

                 <div className='lobby'>
                     <Row style ={{height:'20px'}}>
                     </Row>


                     {labels}
                     <Row style={{height:'30px'}}>
                    </Row>


                        {/*<Row className = ''>
                            <Col xs={2} className='lobby-choose-sport-button'>
                                <div onClick={this.show25contests} >$25</div>
                            </Col>
                            <Col xs={2} className='lobby-choose-sport-button'>
                                <div onClick={this.show50contests}>$50</div>
                            </Col>
                            <Col xs={2} className='lobby-choose-sport-button'>
                                <div onClick={this.show100contests}>$100</div>
                            </Col>
                            <Col xs={2} className='lobby-choose-sport-button'>
                                <div onClick={this.show250contests}>$250</div>
                            </Col>
                            <Col xs={2} className='lobby-choose-sport-button'>
                                <div onClick={this.show500contests}>$500</div>
                            </Col>
                            <Col xs={2} className='lobby-choose-sport-button'>
                                <div onClick={this.show1000contests}>$1000</div>
                            </Col>
                        </Row>*/}
                        <Row>
                            {contestTable}
                        </Row>

                   {/*<Footer/>*/}
                </div>
        )
    }
}



                {/*//////////////bullshit
               
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
                    ////////////END BULLSHIT*/}