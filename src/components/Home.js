import React from 'react';
import GetGeolocation from '../api/geolocation'
import api from '../api/api'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      aircraftListPerGeoLocation:[],
      shareGeolocation:true,

    }
  }
 
  handleChange(event) {
    debugger
    let selectedItem = event.target.value 
    this.props.history.push('/AirFlite/'+selectedItem)
    //this.setState({selectedAF: event.target.value});
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
    
    let message = "Don't have geolocation"
    let selectList = ""
    let link = (<Link to={`/AirFlite/7869131`}>7869131</Link>)
    if(this.state.aircraftListPerGeoLocation.length > 0 ){
      message = "Have geolocation"
      selectList = (<select onChange={this.handleChange}>{this.state.aircraftListPerGeoLocation.map(item => 
        {
          debugger
          
          return <option key={item.Id} value={`${item.Id}/${item.Man}/${item.Mdl}/${item.To}/${item.From}`}>{`${item.Alt} ${item.Call}`}</option>
        }        
      )}</select>)
    }
    return (
      <div>Hello, 
      <h2>{message}</h2>
      <div>{selectList}</div>
      
    </div>
  )
  }
}

export default Home