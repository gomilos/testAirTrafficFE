import axios from 'axios'
import fakeAircraftList from '../assets/AircraftList.js'

const getRandomInRange = (from, to, fixed) => {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
}

const getNearestGL = (lat,long) => {
    return fakeAircraftList.acList.filter(item => parseInt(item.Lat) == parseInt(lat)
    && parseInt(item.Long) == parseInt(long))
}

const getAvaliableFlites = (query) => {
  //  return axios.get("http://public-api.adsbexchange.com/VirtualRadar/AircraftList.json?"
  //  + "")//"lat=33.433638&lng=-112.008113&fDstL=0&fDstU=100");
  let lat = query.Lat || getRandomInRange(90,-90,6)
  let long = query.Long || getRandomInRange(180,-180,6)
  console.log(`Geolocation LAT ${lat}, LONG ${long}`)
    return new Promise(function(resolve, reject) {
        setTimeout(function(){
            let altItems = getNearestGL(lat,long)
            if(altItems.length == 0){               
                console.log('Get fake geolocation')
                altItems =fakeAircraftList.acList.filter(item =>
                    
                    {
                        console.log(item.Id+  '$$'+item.Alt + '$$' +item.Call)
                        return item.Id && item.Alt && item.Alt != 0 && item.Call && item.Call != ""
                    }
                    ).slice(1,10)
                debugger
            }
            resolve(altItems)
        }, 250);
    })
  }

  var api = {
    getVirtualRadarQueryData(query) {
   return getAvaliableFlites(query)
  }}

  export default api