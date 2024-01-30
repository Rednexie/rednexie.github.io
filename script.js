setInterval(() => {
  let p = document.createElement('p');
  p.innerText = window.location.hostname;
  document.body.appendChild(p);
},0)
