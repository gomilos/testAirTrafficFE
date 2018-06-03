import React, { Component } from "react"
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header.js'
import Home from './components/Home'

class App extends Component {

  render() {
    return (
      <Home />
    );
  }
}

export default App