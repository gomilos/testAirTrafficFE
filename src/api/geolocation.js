import PromisedLocation from 'promised-location'
 
let options = {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 60000
};
 
//const  locator = new PromisedLocation(options);
/*locator
    .then(function (position) {
        console.log(position.coords);
    })
    .catch(function (err) {
        console.error('Position Error ', err.toString());
    });
*/
    export default function GetGeolocation(){
        
        return new PromisedLocation(options)
    }