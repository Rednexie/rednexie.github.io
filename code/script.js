const params = new URLSearchParams(window.location.search);
const url_base64 = params.get('u')
if(!params){

}
else{
        
    try{
        const url = atob(atob(url_base64));
        fetch(url)
            .then(res => res.text())
            .then(text => document.body.innerHTML = text.replaceAll('\n', '<br>'))
            .catch(console.error)
    }
    catch(err){
        
    }
}
