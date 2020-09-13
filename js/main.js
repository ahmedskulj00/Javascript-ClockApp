function currentTime(){
    var dt = new Date();
    var hour = dt.getHours();
    var min = dt.getMinutes();
    var sec = dt.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    var t = setTimeout(function(){ currentTime() }, 1000);
    document.getElementById("clock").innerHTML = hour + " : " + min + " : " + sec;
 
}
  function updateTime(i) {
    if (i < 10) {
      return "0" + i;
    }
    else {
      return i;
    }
  } 
  

  
  currentTime();

