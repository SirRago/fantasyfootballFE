import { Router, Redirect, Route, browserHistory } from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import 'bootstrap/dist/css/bootstrap.css'
import FantasyHome from './components/FantasyHome';

ReactDOM.render(
  <FantasyHome />,
  document.getElementById('root')
);
