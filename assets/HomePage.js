
String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

window.onload = function(){

  var siteTitle = document.getElementById("siteTitle");
  var siteName = "Fragrance Island";
  var currentName = "                ";
  siteTitle.innerHTML = currentName;
  
  var j = 0;
  var nr = siteName.length;
  intervalTitle = setInterval(() => {
    currentName = currentName.replaceAt(j, siteName[j]);
    let newname = currentName.replaceAt(nr - 1 - j, siteName[nr - 1 - j]);
    currentName = currentName.replaceAt(nr - 1 - j, siteName[nr - 1 - j]);

    siteTitle.innerHTML = newname;
    j++;
    if(j == nr/2){
      clearInterval(intervalTitle);
    }
  }, 2000)

  var p3 = document.getElementsByClassName("p3")[0];
  var p4 = document.getElementsByClassName("p4")[0];
  var section3 = ["TRANSPORT ", "GRATUIT"];
  var section4 = ["LA ", "COMENZI ", "PESTE ", "100 ", "DE ", "LEI "];
  var index1 = 0;
  var index2 = 0;
  var lg3 = section3.length;
  var lg4 = section4.length;

  intervalSection = setInterval(() => {
    if(index1 < lg3)
    {
      p3.innerHTML = p3.innerHTML + section3[index1];
      index1++;
    }
    if(index2 < lg4){
      p4.innerHTML = p4.innerHTML + section4[index2];
      index2++;
    }
    if(index1 == lg3 && index2 == lg4){
      clearInterval(intervalSection);
    }
  },333);

  //Hide/Show Promo Button
  var hideButton = document.getElementById("hideButton");
  hideButton.onclick = function(){
    var slideshows = document.getElementsByClassName("slideshow-container");
    for(var slideshow of slideshows){
      if(slideshow.style.display != "none"){
        slideshow.style.display = "none";
      }
      else{
        slideshow.style.display = "block";
      }
    }
  }

}

var slideIndex = 0;
var interval = setInterval(function(){
  showSlides(slideIndex);
}, 2000);

// Next/previous controls
function plusSlides(n) {
  clearInterval(interval);
  showSlides(slideIndex += n - 1);
  
}

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(interval);
  showSlides(slideIndex = n);
}



function showSlides(n) {
  var i;
 
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n >= slides.length) {slideIndex = 0}
  if (n < 0) {slideIndex = slides.length - 1}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";//Toate imaginile sunt ascunse
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); 
  }
  slides[slideIndex].style.display = "block"; //Afisam  doar imaginea curenta
  dots[slideIndex].className += " active"; 
  slideIndex+=1;
}

document.title = "Fragrance Island";
var person = prompt("Cum te numesti?", "Harry Potter");
if(person != null){
  setTimeout(() => { 
    document.title = "Salut, " + person;
    setTimeout(() => {
      document.title = "Fragrance Island"}, 2000)
  }, 2000);
}

// String.prototype.replaceAt = function(index, replacement) {
//   return this.substr(0, index) + replacement + this.substr(index + replacement.length);
// }

// window.onload = function(){

//   var siteTitle = document.getElementById("siteTitle");
//   var siteName = "Fragrance Island";
//   var currentName = "                ";
//   siteTitle.innerHTML = currentName;
//   var j = 0;
//   var nr = siteName.length;
//   intervalTitle = setInterval(() => {
//     currentName = currentName.replaceAt(j, siteName[j]);
//     let newname = currentName.replaceAt(nr - 1 - j, siteName[nr - 1 - j]);
//     currentName = currentName.replaceAt(nr - 1 - j, siteName[nr - 1 - j]);
//     siteTitle.innerHTML = newname;
//     j++;
//     if(j == nr/2){
//       clearInterval(intervalTitle);
//     }
//   }, 100)

//   var p3 = document.getElementsByClassName("p3")[0];
//   var p4 = document.getElementsByClassName("p4")[0];
//   var section3 = ["TRANSPORT ", "GRATUIT"];
//   var section4 = ["LA ", "COMENZI ", "PESTE ", "100 ", "DE ", "LEI "];
//   var index1 = 0;
//   var index2 = 0;
//   var lg3 = section3.length;
//   var lg4 = section4.length;

//   intervalSection = setInterval(() => {
//     if(index1 < lg3)
//     {
//       p3.innerHTML = p3.innerHTML + section3[index1];
//       index1++;
//     }
//     if(index2 < lg4){
//       p4.innerHTML = p4.innerHTML + section4[index2];
//       index2++;
//     }
//     if(index1 == lg3 && index2 == lg4){
//       clearInterval(intervalSection);
//     }
//   },333);

//   //Hide/Show Promo Button
//   var hideButton = document.getElementById("hideButton");
//   hideButton.onclick = function(){
//     var slideshows = document.getElementsByClassName("slideshow-container");
//     for(var slideshow of slideshows){
//       if(slideshow.style.display != "none"){
//         slideshow.style.display = "none";
//       }
//       else{
//         slideshow.style.display = "block";
//       }
//     }
//   }

// }

