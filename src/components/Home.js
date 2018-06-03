import React from 'react';
import GetGeolocation from '../api/geolocation'
import api from '../api/api'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aircraftListPerGeoLocation:[],
      shareGeolocation:true
    }
  }
 

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentDidMount() {
    console.log('componentDidMount')
    //console.log(GetGeolocation())
    
    if(navigator.geolocation){ 
      var txt;
      if (confirm("Do you agree to share your location!")) {
        api.getVirtualRadarQueryData("").then(response => {
          console.log(JSON.stringify(response))
          debugger
          let aircraftListPerGeoLocation = [...this.state.aircraftListPerGeoLocation, ...response]
          
          this.setState({aircraftListPerGeoLocation});
        }).catch(error => console.error('Position Error ', error.toString()))
      } else {
         this.setState({shareGeolocation:{...this.state.shareGeolocation, shareGeolocation:false}});
      }     
        
      
      /*navigator.geolocation.getCurrentPosition(function (position) {
        console.log('**navigator.geolocation - position.coords - '+ JSON.stringify(position.coords));
    },function (err) {
      console.error('Position Error ', err.toString());
  },{
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
})*/
    }
    /*GetGeolocation().then(function (position) {
      console.log('position.coords - '+ JSON.stringify(position.coords));
  })
  .catch(function (err) {
      console.error('Position Error ', err.toString());
  })
    */
      }

  render() {
    debugger
    let message = !this.state.aircraftListPerGeoLocation.length > 0 || !this.state.shareGeolocation ?  "Don't have geolocation":"Have geolocation"
    return (
      <div>Hello, 
      <h2>{message}  
      </h2>
      <p>A</p>
      <Link to={`/AirFlite/7869131`}>7869131</Link>
    </div>
  )
  }
}

export default Home