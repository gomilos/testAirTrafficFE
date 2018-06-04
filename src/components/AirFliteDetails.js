import React from 'react';
import PropTypes from 'prop-types'

const AirFliteDetails = (props) => {        
    const { id, Man, Mdl, To, From, Op  } = props.match.params        
   debugger
   let logo = Op.toString().replace(/ /g, "").toLowerCase()   
   let logoUrl = `https://logo.clearbit.com/${logo}.com`
    return (

        <div >
          <ul>
          <li>ID: {id}</li>
          <li>Man: {Man}</li>
          <li>Mdl: {Mdl}</li>
          <li>To: {To}</li>
          <li>From: {From}</li>
          <li><img src={logoUrl} /></li>
          </ul>
        </div>
   
    );
    }
    export default AirFliteDetails;