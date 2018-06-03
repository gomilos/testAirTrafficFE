import React from 'react';
import PropTypes from 'prop-types'

const AirFliteDetails = (props) => {        
    const { id, Man, Mdl  } = props.match.params
    debugger
    
    console.log('**AirFliteDetails - props'+props)
    return (

        <div >
          Abrakadabra
        </div>
   
    );
    }
    export default AirFliteDetails;