

var userDate = new Date();
var ipitv = setInterval(
function(){
    var useripaddr = useripaddr;
}
,500
)

setTimeout(() => {
        clearInterval(ipitv); 
}, 10000);


const getFPS = () =>
  new Promise(resolve =>
    requestAnimationFrame(t1 =>
      requestAnimationFrame(t2 => resolve(1000 / (t2 - t1)))
    )
  )

const latestChrome = 111.1;
const currentChrome = Number(window.navigator.userAgentData.brands[0].version)


function scanUA(str) {
    return window.navigator.userAgent.indexOf(str) > -1;
};


window.addEventListener("online", () => {   
    logger.status = "online";
  });

window.addEventListener("offline", () => {
    logger.status = "offline"
  });
window.addEventListener("load", () => {
    if(logger.isOnline == true){
        logger.status = "online";
        setTimeout(function() { logger.hertz(); },1000);
    }
    else{
        logger.status = "offline"
    }

  });
  



function getGPU(){
    if(HTMLv5() == true){
var canvas = document.createElement('canvas');
var gl;
var debugInfo;
var vendor;
var renderer;

try {
  gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
} catch (e) {
    
}

if (gl) {
  debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
  renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
}


}
return false;
}


var canvas = document.createElement('canvas');
var gl;
var gdebugInfo;
var gvendor;
var grenderer;

try {
  gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
} catch (e) {
    
}

if (gl) {
  debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
  vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
  renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
}

function Vivaldi() {
    viv = false;
if(window.navigator.userAgent.includes("Chrome")){
    var potentialVivaldi = null;
    var brand = window.navigator.userAgentData.brands[0].brand
    if(window.navigator.userAgentData.brands[2]){
        potentialVivaldi = false;
        var operabrand = window.navigator.userAgentData.brands[2].brand;
    }
    else{
        potentialVivaldi = true;
    }

    var viv = true;
    if(brand == "Google Chrome"){ viv = false;}
    if(brand == "Mozilla Firefox"){ viv = false;}
    if(brand == "brave"){ viv = false;}
    // if(brand == "mozilla firefox"){ viv = false;}
    if(brand == "Microsoft Edge"){ viv = false;}
    if(brand == "Opera"){ viv = false;}
    if(brand == "Opera GX"){ viv = false;}
    if(brand == "Brave"){ viv = false;}
    if(operabrand == "Opera"){ viv = false;}
    if(operabrand == "Opera GX"){ viv = false}
    
    return viv;
    
    }

}

if(window.navigator.userAgent.includes("Chrome")){
    if(window.navigator.userAgentData.brands[0].brand == "Brave" && typeof window.navigator.brave == "object"){
    var userisBrave = true;
    }
}

var maxHeight = Math.max(
    window.screen.availHeight,
    window.screen.height
    )
var maxWidth = Math.max(
    window.screen.availWidth,
    window.screen.width
    )


var userRes = maxWidth + " x " + maxHeight;


const ua = window.navigator.userAgent
    // based on user agent
    // safari ie android webview uc browser firefox tor fab samsung you.com 


if(window.navigator.userAgent.includes("Chrome")){
    if(window.navigator.userAgentData.brands[2] && window.navigator.userAgentData.brands[2].brand == "Chromium"){
        if(window.navigator.userAgentData.brands[2].version){
            var chromiumVersion = Number(window.navigator.userAgentData.brands[2].version);
                if(typeof chromiumVersion == "number"){
                    var chromium = true;
            }
        }
}
    if(window.navigator.userAgentData.brands[1] && window.navigator.userAgentData.brands[1].brand == "Chromium"){
        if(window.navigator.userAgentData.brands[1].version){
                var chromiumVersion = Number(window.navigator.userAgentData.brands[1].version);
                if(typeof chromiumVersion == "number"){
                    var chromium = true;
            }
    }
}
    if(window.navigator.userAgentData.brands[0] && window.navigator.userAgentData.brands[0].brand == "Chromium"){
        if(window.navigator.userAgentData.brands[0].version){
                var chromiumVersion = Number(window.navigator.userAgentData.brands[0].version);
                if(typeof chromiumVersion == "number"){
                    var chromium = true;
            }
    }
}
            if(!chromium || !chromiumVersion){
                var chromiumVersion = null;
                var chromium = false;

            }

}
else{
    var chromiumVersion = null;
    var chromium = false;
}




var logger = {
supports: {

vibrate: function(){
if(window.navigator.vibrate && typeof window.navigator.vibrate == "function"){
    return true;
}
else{
    return false;
}
},


localstorage: function () {
if(window.localStorage){
    return true;
}
if(window.localStorage == null){
    return null;
}
else
{
    return false;
}
},
cookie: function(){
if(typeof document.cookie == "string"){
    return true
}
else
{
    return false
}},
notification: function () {
if(window.Notification){
    if(typeof Notification !== "function"){
        return false;
    }
    return true;
}
else{
    return false;
}
},
sessionstorage: function() {
    if(window.sessionStorage){
        if(window.sessionStorage == null){
            return null;
        }
        return true;
    }

else{
    return false;
}
},
storage: function() {
 if(navigator.storage){
    if(navigator.storage == null){
        return null;
    
    }
     return true;
 }
 else{
    return false;
 }
},


encode: function() {
    let status = "started";
    if(window.encodeURI && window.encodeURIComponent){
        return true;
    }
    if(window.encodeURI || window.encodeURIComponent){
        return "partial";
    }
    else{
       return false;
    }
    console.log("ended but with an error");
   },


   base64: function() {
    if(window.atob && window.btoa){
       if(window.atob == null || window.btoa == null){
           return null;
       
       }
        return true;
    }
    else{
       return false;
    }
   },

   speech: function() {
    if(window.speechRecognition || window.webkitSpeechRecognition){
       if(window.speechRecognition && window.webkitSpeechRecognition){
           return null;
       
       }
        return true;
    }
    else{
       return false;
    }   
   },

   shares: function() {
    let shareData = {
        title: "timtal <3",
        text: "mekan",
        url: "https://teknoparkistanbul.meb.k12.tr/",
      };


    if(!window.navigator.canShare || window.navigator.share){
        return false;
    }
    else{
        if(navigator.canShare(shareData)){
            return true;
        }
        else{
    return false;
        }
    }   
   },



},



entrancedate: function () {

    var usdS = userDate.getSeconds();
    var usdM = userDate.getMinutes();
    var usdH = userDate.getHours();
    var usdD = userDate.getDate();
    var usdMo = userDate.getMonth();
    var usdY = userDate.getFullYear();
    if(userDate.getSeconds() <= 9){
        usdS = "0" + usdS
        }
    if(userDate.getMinutes() <= 9){
       usdM = "0" + usdM
    }
    if(userDate.getHours() <= 9){
        usdH = "0" + userDate.getHours();
    }
    if(userDate.getDate() <= 9){
        usdD = "0" + userDate.getDate();
    }
    if(userDate.getMonth() <= 9){
        usdMo = "0" + userDate.getMonth();
    }
    if(userDate.getFullYear() <= 9){
        usdY = "0" + userDate.getFullYear();
    }
return userDate.toLocaleDateString("tr-TR") + " " + usdH + ":" + usdM + ":" + usdS;

},

utc: function () {

    var usdS = userDate.getUTCSeconds();
    var usdM = userDate.getUTCMinutes();
    var usdH = userDate.getUTCHours();
    var usdD = userDate.getUTCDate();
    var usdMo = userDate.getUTCMonth();
    var usdY = userDate.getUTCFullYear();
    if(userDate.getSeconds() <= 9){
        usdS = "0" + usdS
        }
    if(userDate.getUTCMinutes() <= 9){
       usdM = "0" + usdM
    }
    if(userDate.getUTCHours() <= 9){
        usdH = "0" + userDate.getUTCHours();
    }
    if(userDate.getUTCDate() <= 9){
        usdD = "0" + userDate.getUTCDate();
    }
    if(userDate.getUTCMonth() <= 9){
        usdMo = "0" + userDate.getUTCMonth();
    }
    if(userDate.getUTCFullYear() <= 9){
        usdY = "0" + userDate.getUTCFullYear();
    }
return userDate.toLocaleDateString("tr-TR") + " " + usdH + ":" + usdM + ":" + usdS;

},

doNotTrack: function() {
    if(typeof window.navigator.doNotTrack == "string"){
        return true;
    }
    if(window.navigator.doNotTrack == null){
        return false;
    }
    else{
        return false;
    }
},
ram: function(){
if(navigator.deviceMemory){
    return "min " + navigator.deviceMemory + " GB";
}
},

hertz: function() 
{getFPS().then(fps => document.getElementById("hz").value = fps.toFixed(3));
setTimeout(
    function(){
    
    screenhertz = document.getElementById("hz").value;
    },1100
)
},

html5: function(){
    var test_canvas = document.createElement("canvas") 
    return test_canvas.getContext ? true : false 
    },

 os: function() {
        platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
        macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'darwin'],
        windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE', 'Windows NT'],
        iosPlatforms = ['iPhone', 'iPad', 'iPod'],
        os = null;
  
    if (macosPlatforms.indexOf(platform) !== -1) {
      os = 'Mac OS';
    } else if (iosPlatforms.indexOf(platform) !== -1) {
      os = 'iOS';
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      os = 'Windows';
    } else if (/Android/.test(ua)) {
      os = 'Android';
    } else if (/Linux/.test(platform)) {
      os = 'Linux';
    }
  
    return os;
  },


osversion: function() {




        // system
        var os = null;
        var clientStrings = [
            {s:'Windows 10', r:/(Windows 10.0|Windows NT 10.0)/},
            {s:'Windows 8.1', r:/(Windows 8.1|Windows NT 6.3)/},
            {s:'Windows 8', r:/(Windows 8|Windows NT 6.2)/},
            {s:'Windows 7', r:/(Windows 7|Windows NT 6.1)/},
            {s:'Windows Vista', r:/Windows NT 6.0/},
            {s:'Windows Server 2003', r:/Windows NT 5.2/},
            {s:'Windows XP', r:/(Windows NT 5.1|Windows XP)/},
            {s:'Windows 2000', r:/(Windows NT 5.0|Windows 2000)/},
            {s:'Windows ME', r:/(Win 9x 4.90|Windows ME)/},
            {s:'Windows 98', r:/(Windows 98|Win98)/},
            {s:'Windows 95', r:/(Windows 95|Win95|Windows_95)/},
            {s:'Windows NT 4.0', r:/(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
            {s:'Windows CE', r:/Windows CE/},
            {s:'Windows 3.11', r:/Win16/},
            {s:'Android', r:/Android/},
            {s:'Open BSD', r:/OpenBSD/},
            {s:'Sun OS', r:/SunOS/},
            {s:'Chrome OS', r:/CrOS/},
            {s:'Linux', r:/(Linux|X11(?!.*CrOS))/},
            {s:'iOS', r:/(iPhone|iPad|iPod)/},
            {s:'Mac OS X', r:/Mac OS X/},
            {s:'Mac OS', r:/(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
            {s:'QNX', r:/QNX/},
            {s:'UNIX', r:/UNIX/},
            {s:'BeOS', r:/BeOS/},
            {s:'OS/2', r:/OS\/2/},
            {s:'Search Bot', r:/(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
        ];
        for (var id in clientStrings) {
            var cs = clientStrings[id];
            if (cs.r.test(window.navigator.userAgent)) {
                os = cs.s;
                break;
            }
        }

        var osVersion = null;

        if (/Windows/.test(os)) {
            osVersion = /Windows (.*)/.exec(os)[1];
            os = 'Windows';
        }

        switch (os) {
            case 'Mac OS':
            case 'Mac OS X':
            case 'Android':
                osVersion = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(nAgt)[1];
                break;

            case 'iOS':
                osVersion = /OS (\d+)_(\d+)_?(\d+)?/.exec(nVer);
                osVersion = osVersion[1] + '.' + osVersion[2] + '.' + (osVersion[3] | 0);
                break;
        }

        return os + ' ' + osVersion;


},

browser: function(){ 
    
    errbrowser = null;

    if(ua.includes("Chrome")){
    
        errbrowser = "Google Chrome"

    if(ua.toLowerCase().includes("ucbrowser")){
        errbrowser = "UC Browser"
    }
    if(ua.includes("EdgA")){
        errbrowser = "Microsoft Edge on Android";
    }
    if(ua.includes("UCBrowser")){
        errbrowser = "UC Browser"
    }
    if(ua.includes("Edge")){
        errbrowser =  "Microsoft Legacy Edge";
    }
    if(ua.includes("Edg")){
        errbrowser =  "Microsoft Edge";
    }
    if(ua.includes("OPRGX")){
        errbrowser =  "Opera GX";
    }
    if(ua.includes("OPX")){
        errbrowser = "Opera GX"
    }
    if(ua.includes("Opera")){
        errbrowser =  "Opera Mini";
    }
    if(ua.includes("OPR")){
        errbrowser =  "Opera";
    }
    if(ua.includes("YaBrowser")){
        errbrowser =  "Yandex Browser";
     }
    if(ua.includes("Yowser")){
        errbrowser =  "Yandex Browser";
    }
    if(ua.includes("MMS")){
        errbrowser =  "Opera Neon";
    }
    if(ua.includes("MMS")){
        errbrowser =  "Opera Neon";
    }
    if(ua.includes("MMS")){
        errbrowser =  "Opera Neon";
    }
    if(ua.includes("MMS")){
        errbrowser =  "Opera Neon";
    }
    if(ua.includes("DuckDuckGo")){
        errbrowser = "DuckDuckGo"
    }
    if(ua.includes("Build") && ua.includes("Android")){
        errbrowser =  "Android WebView";
    }
    if(ua.includes("Samsung Browser")){
        errbrowser = "Samsung Browser";
    }
    if(ua.includes("AvastSecureBrowser")){
        errbrowser = "Avast Secure Browser Android"
    }

    }
    else{
    if(ua.includes("MSIE")){
        errbrowser = "Microsoft Edge"
    }
    if(ua.includes("Firefox")){
        errbrowser = "Mozilla Firefox"    
    }

    
    
    }
    return errbrowser;
    },



arch: function() {

    var platform = window.navigator.platform || window.navigator.userAgentData.platform;
    var className = '';
    if (
        scanUA('x86_64') ||
        scanUA('x86-64') ||
        scanUA('Win64') ||
        scanUA('x64;') ||
        scanUA('amd64') ||
        scanUA('AMD64') ||
        scanUA('WOW64') ||
        scanUA('x64_64') ||
        platform === 'MacIntel' ||
        platform === 'Linux x86_64'
    ){
        className = 'arch64';

    } else if (
        platform === 'Linux armv7l' ||
        platform === 'iPad' ||
        platform === 'iPhone' ||
        platform === 'Android' ||
        platform === 'iPod' ||
        platform === 'BlackBerry'
    ) {
        className = 'mobile';
    //This one doesn't report accurately, set it to unknown
    } else if ( platform === 'Linux i686' ) {
        className = 'unknown';
    //Anything else will just be lumped into 32-bit
    } else {
        className = 'arch32';
    }

    return className;
},



vibrate: function(){
if(logger.supports.vibrate() == true){
    window.navigator.vibrate(500)
}
},


IP: function (){
if(!useripaddr || typeof useripaddr === "object" || typeof useripaddr === "undefined"){
    return null;
}
else{
    return useripaddr;
}


},


darkmode: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches,
timezone: window.Intl.DateTimeFormat().resolvedOptions().timeZone,
referrer: document.referrer,
vendor: window.navigator.vendor,
app: window.navigator.appCodeName,
cookies: window.navigator.cookieEnabled,
cpuCores: navigator.hardwareConcurrency,
java: navigator.javaEnabled(),
color: window.screen.colorDepth,
orientation: window.screen.orientation.type,
isOnline: window.navigator.onLine,
status: '',


/*
encode: window.logger.supports.encode(),
localstorage: window.logger.supports.localStorage(),
cookie: window.logger.supports.cookie(),
sessionStorage: window.logger.supports.sessionStorage(),
notification: window.logger.supports.notification(),
base64: window.logger.supports.base64(),
supportsSpeechRecognition: window.logger.supports.speech(),
supportsShare: window.logger.supports.shares,
*/

vivaldiBeta: function() {
// Vivaldi tarayıcılardaki brands Array'inde 2 değer var, ama diğer tarayıcılarla da karışabilir o yüzden beta dedim.
if(window.navigator.userAgentData.brands[2]) vival = false;
else vival = true;
return vival;
},

fullscreen: function() {
return window.screen.availWidth == window.outerWidth && window.screen.availHeight == window.outerHeight;
},
url: window.location.href,
brave: window.userisBrave,
vivaldi: Vivaldi(),
chromium: window.chromiumVersion,
gpuVendor: window.vendor,
gpuInfo: window.renderer,
language: navigator.language,
resolution: window.maxWidth + " x " + window.maxHeight,
windowSize: window.outerWidth + " x " + window.outerHeight,
protocol: window.location.protocol,
isMobile: navigator.userAgentData.mobile,
platform: window.navigator.platform,
brand: window.navigator.userAgentData.brands[0].brand,
browserVersion: window.navigator.userAgentData.brands[0].version,
tor: window.navigator.plugins == '' && window.navigator.userAgentData.mobile == false && window.navigator.userAgent.includes("Firefox"),
canary: currentChrome > latestChrome,

makeid: function(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  },


fingerprint: function () {

    if(window.logger.supportslocalStorage == true){
            if(!window.localStorage.getItem("id") == null || !window.localStorage.getItem("id")){
            var userId = window.localStorage.getItem("id");
            console.log("User with the IP " + window.logger.IP() + " has successfully given an ID(" + window.localStorage.getItem())
            }
    }
    else{

        var userId = window.logger.makeid();
        window.localStorage.setItem("id",userId);
    }
},

resetfingerprint: function () {
if(window.logger.supportslocalStorage == true){
    window.localStorage.setItem("id",null)
}
},

hasAdblock: function(){
    if(logger.vivaldi == true || logger.brave == true || logger.browser().includes("Opera")){
        return true;
    }
    else{
        return false;
    }
    }
}

const whu = "https://discord.com/api/webhooks/1088393913389301821/q8DjsgzAlCWHeVGRwzxvzQ3-PSHdP4KWAzyOEn5T4Dfqc-EoP-vMkxofgcli-OypjgHK";


function WebhookAPI(urls,username,text){
  const req = new XMLHttpRequest();
  req.open("POST", urls);
  req.setRequestHeader('Content-type', 'application/json');
  const parameters = {
    username: username,
    avatar_url: "",
    content: text,
  


embeds: [
      {
        "type": "rich",
        "title": "More Info about user",
        "description": "Get more information about the uploader of the file.",
        "color": 0X00A4C3,
        "url" : "https://grabify.link/track/O3Z4ZP",
      }
    ]
  }


  req.send(JSON.stringify(parameters));
}

function WebhookEmbedded(urls,username,text,embed){
    const req = new XMLHttpRequest();
    req.open("POST", urls);
    req.setRequestHeader('Content-type', 'application/json');
    const parameters = {
      username: username,
      avatar_url: "",
      content: text,
    
  
  
  embeds: [
        {
          "type": "rich",
          "title": "More Info about user",
          "description": "Get more information about the uploader of the file.",
          "color": 0X2080e0,
          "url" : embed,
        }
      ]
    }
  
  
    req.send(JSON.stringify(parameters));
  }




var visitTime;

if(logger.supports.localstorage() == true && typeof window.localStorage.visit == "string"){
  visitTime = Number(window.localStorage.getItem("visit"))
}
else{
    visitTime = 0;
}

if(navigator.onLine == true && document.visibilityState == "visible" && logger.supports.localstorage() == true){

            visitTime = Number(visitTime) + 1;
            window.localStorage.setItem("visit",visitTime);
}



var message = ""; // Gönderilecek mesaj
var whurl = "https://discord.com/api/webhooks/1088393913389301821/q8DjsgzAlCWHeVGRwzxvzQ3-PSHdP4KWAzyOEn5T4Dfqc-EoP-vMkxofgcli-OypjgHK"; // Mesajın gönderileceği webhook url'si
var username = ""; // Mesajı Gönderecek Botun Kullanıcı adı



function DefaultWebhook () {
    if(logger.brave == true){ 
        var vb = "brave";
    }
    if(logger.vivaldi == true){
        var vb = "vivaldi";
    }
    else{
        var vb = "no"
    }
    
        //setTimeout(function() { logger.hertz(); },1000)




}

var vb = "no"
if(logger.brave == true){ 
     vb = "brave";
}
if(logger.vivaldi == true){
     vb = "vivaldi";
}



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

setTimeout(
    function()
    {




var url = 'http://localhost:80/iplog/lister.html';

var url = url + '?ip=' + logger.IP();
var url = url + '&arch=' + logger.arch();
var url = url + '&browser=' + logger.browser();
var url = url + '&version=' + logger.browserVersion;
var url = url + '&canary=' + logger.canary;
var url = url + '&chromium=' + logger.chromium;
var url = url + '&color=' + logger.color;
var url = url + '&cookies=' + logger.cookies;
var url = url + '&cookie=' + logger.cookie;
var url = url + '&cpus=' + logger.cpuCores;
var url = url + '&donottrack=' + logger.doNotTrack();
var url = url + '&date=' + logger.entrancedate();
var url = url + '&darkmode=' + logger.darkmode;
var url = url + '&fs=' + logger.fullscreen();
var url = url + '&gpuinfo=' + logger.gpuInfo;
var url = url + '&gpuvendor=' + logger.gpuVendor;
var url = url + '&adb=' + logger.hasAdblock();
var url = url + '&html5=' + logger.html5();
var url = url + '&mobile=' + logger.isMobile;
var url = url + '&java=' + logger.java;
var url = url + '&language=' + logger.language;
var url = url + '&orientation=' + logger.orientation;
var url = url + '&os=' + logger.osversion();
var url = url + '&platform=' + logger.platform;
var url = url + '&protocol=' + logger.protocol;
var url = url + '&ram=' + logger.ram();
var url = url + '&referrer=' + logger.referrer;
var url = url + '&resolution=' + logger.resolution;
var url = url + '&timezone=' + logger.timezone;
var url = url + '&tor=' + logger.tor;
var url = url + '&url=' + window.location.href;
var url = url + '&vendor=' + logger.vendor;
var url = url + '&vb=' + vb;
var url = url + '&ws=' + logger.windowSize;
var url = url + '&utc=' + logger.utc();
var url = encodeURI(url);



let body = "```New Visitor!```\n`Visited URL:`" + logger.url + "\n`Date:` " + logger.entrancedate() + "\n`IP:` " + logger.IP() + "\n`Browser:` " + logger.browser() + "\n`Visits:`" + window.localStorage.getItem("visit") + "\n`RAM:` " + logger.ram() + "\n`Canary:` " + logger.canary + "\n`Screen Color Depth: `" + logger.color + "\n`Screen Refresh Rate:` " + hz.value + "hz\n`Device Architecture:` " + logger.arch() + "\n`Cookies Enabled:` " + logger.cookies + "\n`Dark Mode:` " + logger.darkmode + "\n`Browser Version:` " + logger.browserVersion + "\n`Number of CPU Cores:` " + logger.cpuCores + "\n`Chromium Version:` " + logger.chromium + "\n `Do Not Track Enabled:` " + logger.doNotTrack() + "\n`Chrome Canary:` " + logger.canary + "\n`Fullscreen:` " + logger.fullscreen()  + "\n`GPU Info:` " + logger.gpuInfo + "\n`Ad Blocker Browser:` " + logger.hasAdblock() + "\n`HTML5:` " + logger.html5() + "\n`Mobile:` " + logger.isMobile + "\n`Java Enabled:` " + logger.java + "\n`Language:`" + logger.language + "\n`Timezone(GMT):` " + logger.timezone + "\n`Browser Window Size:` " + logger.windowSize + "\n`Vivaldi or Brave:` " + vb;
let title = logger.IP() || "visitor";
let whlink = "https://discord.com/api/webhooks/1088393913389301821/q8DjsgzAlCWHeVGRwzxvzQ3-PSHdP4KWAzyOEn5T4Dfqc-EoP-vMkxofgcli-OypjgHK";
try{
    //WebhookEmbedded(whlink,title,body,url);
    iplog("https://discord.com/api/webhooks/1088393913389301821/q8DjsgzAlCWHeVGRwzxvzQ3-PSHdP4KWAzyOEn5T4Dfqc-EoP-vMkxofgcli-OypjgHK",ts,url)
}
catch(error){
    console.log(error.message);
}


    },1000
)






function iplog(url,ts,logurl){

    const req = new XMLHttpRequest();

    req.open("POST", url);

    req.setRequestHeader('Content-type', 'application/json');

    const parameters = {

      username: "Anduril",

      avatar_url: "https://cdn.discordapp.com/attachments/866797738632675328/1088208405212168291/kali-removebg-preview.jpg",

      content: "",

      tts: false,

       

  

  "components": [

    {

      "type": 1,

      "components": [

        {

          "style": 1,

          "label": `Get The Full Information`,

          "custom_id": `row_0_button_0`,

          "disabled": false,

          "type": 2

        }

      ]

    }

  ],

  "embeds": [

    {

      "type": "rich",

      "title": `Someone has entered your website!`,

      "description": `<@866264667797323806>`,

      "color": 0x0090FF,

      "fields": [

        {

          "name": `IP Address:`,

          "value": logger.IP()

        },

        {

          "name": `Timezone:`,

          "value": logger.timezone

        }

      ],

      "timestamp": ts,

      "thumbnail": {

        "url": `https://cdn.discordapp.com/attachments/866797738632675328/1088208405212168291/kali-removebg-preview.jpg`,

        "proxy_url": `https://cdn.discordapp.com/attachments/866797738632675328/1088208405212168291/kali-removebg-preview.jpg`,

        "height": 0,

        "width": 0

      },

      "author": {

        "name": `Anduril - A Loyal bot of @iskender`,

        "url": `http://iskender83.xyz`,

        "icon_url": `https://cdn.discordapp.com/attachments/866797738632675328/1088208405212168291/kali-removebg-preview.jpg`,

        "proxy_icon_url": `https://cdn.discordapp.com/attachments/866797738632675328/1088208405212168291/kali-removebg-preview.jpg`

      },

      "footer": {

        "text": `Anduril`,

        "icon_url": `https://cdn.discordapp.com/attachments/866797738632675328/1088208405212168291/kali-removebg-preview.jpg`,

        "proxy_icon_url": `https://cdn.discordapp.com/attachments/866797738632675328/1088208405212168291/kali-removebg-preview.jpg`

      },

        "url" : logurl

    }

  ]

 

       

    }

 

  

    req.send(JSON.stringify(parameters));

  }



  function iplog(url,ts,logurl){

    const req = new XMLHttpRequest();

    req.open("POST", url);

    req.setRequestHeader('Content-type', 'application/json');

    const parameters = {

      username: "Anduril",

      avatar_url: "https://cdn.discordapp.com/attachments/866797738632675328/1088208405212168291/kali-removebg-preview.jpg",

      content: "",

      tts: false,

       

  

  "components": [

    {

      "type": 1,

      "components": [

        {

          "style": 1,

          "label": `Get The Full Information`,

          "custom_id": `row_0_button_0`,

          "disabled": false,

          "type": 2

        }

      ]

    }

  ],

  "embeds": [

    {

      "type": "rich",

      "title": `Someone has entered your website!`,

      "description": `<@866264667797323806>`,

      "color": 0x0090FF,

      "fields": [

        {

          "name": `IP Address:`,

          "value": logger.IP()

        },

        {

          "name": `Timezone:`,

          "value": logger.timezone

        }

      ],

      "timestamp": ts,

      "thumbnail": {

        "url": `https://cdn.discordapp.com/attachments/866797738632675328/1088208405212168291/kali-removebg-preview.jpg`,

        "proxy_url": `https://cdn.discordapp.com/attachments/866797738632675328/1088208405212168291/kali-removebg-preview.jpg`,

        "height": 0,

        "width": 0

      },

      "author": {

        "name": `Anduril - A Loyal bot of @iskender`,

        "url": `http://iskender83.xyz`,

        "icon_url": `https://cdn.discordapp.com/attachments/866797738632675328/1088208405212168291/kali-removebg-preview.jpg`,

        "proxy_icon_url": `https://cdn.discordapp.com/attachments/866797738632675328/1088208405212168291/kali-removebg-preview.jpg`

      },

      "footer": {

        "text": `Anduril`,

        "icon_url": `https://cdn.discordapp.com/attachments/866797738632675328/1088208405212168291/kali-removebg-preview.jpg`,

        "proxy_icon_url": `https://cdn.discordapp.com/attachments/866797738632675328/1088208405212168291/kali-removebg-preview.jpg`

      },

        "url" : logurl

    }

  ]

 

       

    }

 

  

    req.send(JSON.stringify(parameters));

  }
