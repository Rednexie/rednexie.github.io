/*

document.addEventListener("keydown", function (event) {
    if(event.keyCode == 123){
        var eventDescription = 'User with the ip address above has clicked F12 to open Developer Tools on their browser.\nNo-Console.js has blocked the action.';
        var TheEvent = 'F12 - Developer tools';
     event.preventDefault();
     console.error("User has clicked F12 to open Developer Tools on their browser.\nNo-Console.js has blocked the action.");

     return false;
    }


 
    if(event.ctrlKey == true && event.keyCode == 83){
        var eventDescription = '';
        var TheEvent = 'CTRL + S - Save Page Source';
        console.error("User has clicked CTRL + S to save the page on their browser.\nNo-Console.js has blocked the action.");
     event.preventDefault();
    
    }
    if(event.shiftKey == true && event.ctrlKey == true && event.keyCode == 73){
        var eventDescription = 'User with the ip address above has clicked CTRL + Shift + I to open Elements on their browser.\nNo-Console.js has blocked the action.';
        var TheEvent = 'CTRL + Shift + I - Elements';
        console.error("User has clicked CTRL + Shift + I to open Elements on their browser.\nNo-Console.js has blocked the action.");
     event.preventDefault();
    
    }
    if(event.shiftKey == true && event.ctrlKey == true && event.keyCode == 74){
        var eventDescription = 'User with the ip address above has clicked CTRL + Shift + J to open Javascript Console on their browser.\nNo-Console.js has blocked the action.';
        var TheEvent = 'CTRL + Shift + J - Javascript Console';
        console.error("User has clicked CTRL + Shift + J to open Javascript Console on their browser.\nNo-Console.js has blocked the action.");
     event.preventDefault();
     
    }
    if(event.ctrlKey == true && event.keyCode == 85){
        var eventDescription = 'User with the ip address above has clicked CTRL + U to open View Page Source on their browser.\nNo-Console.js has blocked the action.';
        var TheEvent = 'CTRL + U - View Page Source';
        console.error("User has clicked CTRL + U to open view page source on their browser.\nNo-Console.js has blocked the action.");
     event.preventDefault();
     
    } });
 
    window.addEventListener("contextmenu", event => {
        var eventDescription = 'User with the ip address above has clicked Right Click to open Context Menu on their browser.\nNo-Console.js has blocked the action.';
        var TheEvent = 'Right Click - Context Menu';
    event.preventDefault();
    console.error("User has clicked Right Click to open Context Menu on their browser.\nNo-Console.js has blocked the action.");
    
    }
    )

    */











    const copyrightText = "\nNo-Console.js\nMade by iskenderjs\nhttps://github.com/iskenderjs/no-console.js"
// no console.js
// block user opening context menu and developer tools 
// Made with love by iskenderjs
var WebhookURL = 'https://discord.com/api/webhooks/1091093232970117330/qqPN6ayA6iBba6Z2rfvn3ksphn1D18h_S6BXo7fuf0I5LqH7yj0BZ9Wf-TmjgFwxpor4';
var userip = userip || "null";
var ms = 1000;

// THREAT LEVEL VE RENK EKLERİZ
console.log("%c                                                                                                                                                                         \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     ", "color: black; background-image: linear-gradient(to right, #ff0000,#ff8000,#ffff00,#80ff00,#00ff00,#0080ff,#0000ff,#8000ff,#aa00ff); color: gray");
console.log("%c                                                                                                                                                                         \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     \n                                                                                                                                                                     ", "color: black; background-image: linear-gradient(to right, #ff0000,#ff8000,#ffff00,#80ff00,#00ff00,#0080ff,#0000ff,#8000ff,#aa00ff); color: gray");

    function disableConsole(){ 
        
        // disable console autocorrect
        setInterval(
            function(){
        document.designMode = 'off';
        console.clear();
        console.warn("Javascript console in this page is disabled.");
    
    
    },ms
    
    
    );
    }

    var noconsole = {
        webhook: function(url,eventDescription,TheEvent){
           var eventDescription = eventDescription;
               const request = new XMLHttpRequest();
               request.open("POST", url);
               request.setRequestHeader('Content-type', 'application/json');
               const params = {
                 username: "No-Console.js",
                 avatar_url: "https://cdn.discordapp.com/attachments/1068642023789301884/1090565045861236746/kali-bright.png",
                 content: "User IP Address: " + window.useripaddr + "\n" + eventDescription + copyrightText,
                 embeds: [
                       {
                           "type": "rich",
                           "title": `The URL`,
                           "description": TheEvent,
                           "color": 0x00FFFF,
                           "url": window.location.href,
   
   
   
                       }
                 ]
             }
             request.send(JSON.stringify(params))
   
   
   
       },
           
   
   
}


    // LOG AND BLOCK SUSPICIOUS ACTIONS EXCEPT RIGHT CLICK
    // CODE BLOCK 3




document.addEventListener("keydown", function (event) {
    if(event.ctrlKey && event.shiftKey){
        if (event.key === 'C' || event.key === 'Q' || event.key === 'K' || event.key === 'J' || event.key === 'I'){
            event.preventDefault()
        }
    }


    if(event.keyCode == 123){
        var eventDescription = 'User with the ip address above has clicked F12 to open Developer Tools on their browser.\nNo-Console.js has blocked the action.';
        var TheEvent = 'F12 - Developer tools';
        event.preventDefault();
          console.error("User has clicked F12 to open Developer Tools on their browser.\nNo-Console.js has blocked the action.");
          console.warn("No-Console.js has blocked the action. Please make sure to configure it if you want it to block it.")
    noconsole.webhook(WebhookURL,eventDescription,TheEvent);
    }
 
    if(event.ctrlKey == true && event.keyCode == 83){
        var eventDescription = 'User with the ip address above has clicked CTRL + S to save page source on their browser.\nNo-Console.js has blocked the action.';
        var TheEvent = 'CTRL + S - Save Page Source';
     console.error("User has clicked CTRL + S to save the page on their browser.\nNo-Console.js has blocked the action.");
               console.warn("No-Console.js has blocked the action. Please make sure to configure it if you want it to block it.")
        event.preventDefault();
    noconsole.webhook(WebhookURL,eventDescription,TheEvent);
    }
    if(event.shiftKey == true && event.ctrlKey == true && event.keyCode == 73){
        var eventDescription = 'User with the ip address above has clicked CTRL + Shift + I to open Elements on their browser.\nNo-Console.js has blocked the action.';
        var TheEvent = 'CTRL + Shift + I - Elements';
     console.error("User has clicked CTRL + Shift + I to open Elements on their browser.\nNo-Console.js has blocked the action.");
               console.warn("No-Console.js has blocked the action. Please make sure to configure it if you want it to block it.")
         event.preventDefault();
     noconsole.webhook(WebhookURL,eventDescription,TheEvent);
    }
    if(event.shiftKey == true && event.ctrlKey == true && event.keyCode == 74){
        var eventDescription = 'User with the ip address above has clicked CTRL + Shift + J to open Javascript Console on their browser.\nNo-Console.js has blocked the action.';
        var TheEvent = 'CTRL + Shift + J - Javascript Console';
     console.error("User has clicked CTRL + Shift + J to open Javascript Console on their browser.\nNo-Console.js has blocked the action.");
               console.warn("No-Console.js has blocked the action. Please make sure to configure it if you want it to block it.")
        event.preventDefault();
     noconsole.webhook(WebhookURL,eventDescription,TheEvent);
    }
    if(event.ctrlKey == true && event.keyCode == 85){
        var eventDescription = 'User with the ip address above has clicked CTRL + U to open View Page Source on their browser.\nNo-Console.js has blocked the action.';
                  console.warn("No-Console.js has blocked the action. Please make sure to configure it if you want it to block it.")
        var theEvent = 'CTRL + U - View Page Source';
    console.error("User has clicked CTRL + U to open view page source on their browser.\nNo-Console.js has blocked the action.");
        event.preventDefault();
     noconsole.webhook(WebhookURL,eventDescription,TheEvent);
    } });
 
    /*window.addEventListener("contextmenu", event => {
        var eventDescription = 'User with the ip address above has clicked Right Click to open Context Menu on their browser.\nNo-Console.js has NOT blocked the action.';
        console.warn("No-Console.js has not blocked the action. Please make sure to configure it if you want it to block it.")
        var TheEvent = 'Right Click - Context Menu';
        //event.preventDefault();
        //console.error("User has clicked Right Click to open Context Menu on their browser.\nNo-Console.js has blocked the action.");
        //noconsole.webhook(WebhookURL,eventDescription,TheEvent);
    }
    )*/