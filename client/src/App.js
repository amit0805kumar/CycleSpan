import React, { Fragment, useEffect } from 'react';
import './App.css';
import './vendors/script.js'
import $ from 'jquery'
import { findDOMNode } from 'react-dom'

//Components
import Landing from './components/layout/Landing'
import Nav from './components/layout/Nav'
import BgPattern from './components/layout/BgPattern'
import Cycles from './components/cycles/Cycles'



const App = () => {

  return <Fragment>
    <BgPattern></BgPattern>
    <Nav></Nav>
    <Landing></Landing>
    <Cycles></Cycles>
  </Fragment>
}



export default App;
