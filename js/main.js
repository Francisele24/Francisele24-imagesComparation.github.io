var counta = 0;
var next = document.getElementById("next");
var dispa = document.getElementById("displaya");

function classa() {
  if (counta + countb < 67){
	counta++;}
	dispa.innerHTML = counta;
  plusSlides(1);
}

var countb = 0;
var prev = document.getElementById("prev");
var dispb = document.getElementById("displayb");

function classb() {
  if (countb + counta < 67){
	countb++;}
	dispb.innerHTML = countb;
  plusSlides(1);
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}



function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  if (n < 68){
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";}
}