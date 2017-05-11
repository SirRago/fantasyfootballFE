import { Router, Redirect, Route, browserHistory } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './components/Header';

ReactDOM.render(
  <Header />,
  document.getElementById('root')
);
