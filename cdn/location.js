var geoAcc = null;
var geoLat = null;
var geoLong = null;

window.addEventListener("load", () => {
try{
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback); 
}
catch(_){
    console.warn(_)
}
      
})

const successCallback = (position) => {
    console.log(position);
    geoAcc = position.coords.accuracy;
    geoLat = position.coords.latitude;
    geoLong = position.coords.longitude;   
    
    locations = {
        accuracy: geoAcc,
        latitude: geoLat,
        longitude: geoLong
    }
    
    logger(locations)
}  
  const errorCallback = (error) => {
    console.log(error);
  };