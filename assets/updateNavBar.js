$(document).ready(function(){
    let login = getCookie("login"); 
    let admin = getCookie("admin");
    if(admin !== 'true'){ // dc nu e admin nu apar setarile adminului
      let a = document.getElementById("admin");
      a.classList.remove("fa");
      a.classList.remove("fa-gear");
      a.classList.remove("fa-spin");
      a.innerHTML = getCookie("user");
      a.parentNode.removeChild(a);
  }
    if(login === 'true'){ //dc  user e logat pe site scot butonul de login
        let log = document.getElementById("login");
        log.style.display = "none";
        // if(admin !== 'true'){ // dc nu e admin nu apar setarile adminului
        //     let a = document.getElementById("admin");
        //     a.classList.remove("fa");
        //     a.classList.remove("fa-gear");
        //     a.classList.remove("fa-spin");
        //     a.innerHTML = getCookie("user");
        // }
        
    }
    var promotions = document.getElementsByClassName("promotions")[0];
    var happyHours = [["10:00:00", "11:00:00"], ["15:00:00", "16:50:00"]];
    var isHappyHour = false;
    for(var hours of happyHours){
      var date = new Date();
      var hourStart = hours[0][0] + hours[0][1];
      var minutesStart = hours[0][3] + hours[0][4];
      var secondsStart = hours[0][6] + hours[0][7];
      var hourEnd = hours[1][0] + hours[1][1];
      var minutesEnd = hours[1][3] + hours[1][4];
      var secondsEnd = hours[1][6] + hours[1][7];
      var startDate = new Date();
      startDate.setHours(hourStart, minutesStart, secondsStart);
      var endDate = new Date();
      endDate.setHours(hourEnd, minutesEnd, secondsEnd);
      if(date.getTime() <= endDate.getTime() && date.getTime() >= startDate.getTime()){
        isHappyHour = true;
      }
      
    }
    if(!isHappyHour){
      promotions.style.display = "none";
    }
});

// window.onload = function(){
//     var promotions = document.getElementsByClassName("promotions")[0];
//     var happyHours = [["10:00:00", "12:00:00"], ["15:00:00", "16:50:00"]];
//     var isHappyHour = false;
//     for(var hours of happyHours){
//       var date = new Date();
//       var hourStart = hours[0][0] + hours[0][1];
//       var minutesStart = hours[0][3] + hours[0][4];
//       var secondsStart = hours[0][6] + hours[0][7];
//       var hourEnd = hours[1][0] + hours[1][1];
//       var minutesEnd = hours[1][3] + hours[1][4];
//       var secondsEnd = hours[1][6] + hours[1][7];
//       var startDate = new Date();
//       startDate.setHours(hourStart, minutesStart, secondsStart);
//       var endDate = new Date();
//       endDate.setHours(hourEnd, minutesEnd, secondsEnd);
//       if(date.getTime() <= endDate.getTime() && date.getTime() >= startDate.getTime()){
//         isHappyHour = true;
//       }
      
//     }
//     if(!isHappyHour){
//       promotions.style.display = "none";
//     }
// }

//obtine valoare cheii cname
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }