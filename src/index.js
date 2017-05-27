// import { Router, Redirect, Route, browserHistory } from 'react-router'
// import React from 'react'
// import ReactDOM from 'react-dom'
// import FantasyHome from './components/FantasyHome';

import './index.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'bootstrap/dist/css/bootstrap.css'

// ReactDOM.render(
//   <FantasyHome />,
//   document.getElementById('root')
// );


////////////////////////  FROM  scotch.io tutorial    ////////////////////////////////////

// ./src/index.jsx
import React, { Component } from 'react';
import { render } from 'react-dom';
// Import routing components
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import Header from './components/Header'
import Lobby from './components/Lobby'

class Home extends React.Component {
    render(){
        return (<h1>Home Page</h1>);
    }
}

// More components
class Car extends React.Component {
    render(){
        return (<h1>Cars page</h1>);
    }
}

class About extends React.Component {
    render(){
        return (<h1>About page</h1>);
    }
}

render(
    <Router history={hashHistory}>
        <Route path="/" component={Header}>
            <IndexRoute component={Lobby} />
            <Route path="/cars" component={Car}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('root')
);
////////////////////////////////////////////////