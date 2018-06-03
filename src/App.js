import React, { Component } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header.js'
import Home from './components/Home'
import Main from './components/Main'

class App extends Component {

  render() {
    return (
      <Router>
      <Main />
      </Router>
    );
  }
}

export default App