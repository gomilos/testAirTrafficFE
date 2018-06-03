import React from 'react'
import { Switch, Route } from "react-router-dom"
import Home from './Home.js'
import AirFliteDetails from './AirFliteDetails.js'
import NoMatch from './NoMatch.js'

const Main = (props) => {
  return (
    <div className="content-wrapper">
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Home" component={Home} />          
        <Route path="/AirFlite/:id/:Man/:Mdl/:To/:From" component={AirFliteDetails}/>   
        <Route component={NoMatch}/>
        </Switch>
    </div>
  )
};

export default Main;