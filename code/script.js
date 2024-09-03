const params = new URLSearchParams(window.location.search);
const url_base64 = params.get('u')
if(!params){

}
else{
        
    try{
        const url = atob(atob(url_base64));
        fetch(url)
            .then(res => res.text())
            .then(text => {
                     console.log(text);
                    document.body.innerHTML = text.replaceAll('<', '&lt;').replaceAll('>','&gt;').replaceAll('\n', '<br>');
            })
            .catch(console.error)
    }
    catch(err){
        
    }
}
