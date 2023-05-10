setInterval(statusNow, 1000);

function statusNow(){
  let sts = window.navigator.onLine;
  let stat = document.getElementById('status');
  if(sts){
    stat.innerHTML = "online";
    stat.style.color = 'green';
    document.getElementById('image').src = "images/worldwide.png";
  }
  else {
    stat.innerHTML = "offline";
    stat.style.color = 'red';
    document.getElementById('image').src = "images/network.png";
  }
}

