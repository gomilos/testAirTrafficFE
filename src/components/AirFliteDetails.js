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
          <li>manufacturer’s name: {Man}</li>
          <li>description of the aircraft’s model: {Mdl}</li>
          <li>Destination To: {To}</li>
          <li>Destination From: {From}</li>
          <li><img src={logoUrl} alt={Op} title={Op}/></li>
          </ul>
        </div>
   
    );
    }
    export default AirFliteDetails;