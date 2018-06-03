import React from 'react';
import PropTypes from 'prop-types'

const AirFliteDetails = (props) => {        
    const { id, Man, Mdl, To, From  } = props.match.params        
   // console.log('**AirFliteDetails - props'+props)
    return (

        <div >
          <ul>
          <li>ID: {id}</li>
          <li>Man: {Man}</li>
          <li>Mdl: {Mdl}</li>
          <li>To: {To}</li>
          <li>From: {From}</li>
          </ul>
        </div>
   
    );
    }
    export default AirFliteDetails;