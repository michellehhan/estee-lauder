// HOVER IMAGES
function hover(element) {
  element.setAttribute('src', 'https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_PYL501_640x640_1.jpg');
}

function unhover(element) {
  element.setAttribute('src', 'https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_PYL501_640x640_0.jpg');
}

function hover1(element) {
  element.setAttribute('src', 'https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_YA6FCT_640x640_1.jpg');
}

function unhover1(element) {
  element.setAttribute('src', 'https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_YA6FCT_640x640_0.jpg');
}

function hover2(element) {
  element.setAttribute('src', 'https://www.esteelauder.com/media/export/cms/products/640x640/el_prod_77491_640x640_4.jpg');
}

function unhover2(element) {
  element.setAttribute('src', 'https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_PG5001_640x640_0.jpg');
}

function hover3(element) {
  element.setAttribute('src', 'https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_PE0W66_640x640_1.jpg');
}

function unhover3(element) {
  element.setAttribute('src', 'https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_PE0W66_640x640_0.jpg');
}

function hover4(element) {
  element.setAttribute('src', 'https://www.esteelauder.com/media/export/cms/products/640x640/el_prod_101853_640x640_0.jpg');
}

function unhover4(element) {
  element.setAttribute('src', 'https://www.esteelauder.com/media/export/cms/products/640x640/el_sku_PGJJ01_640x640_0.jpg');
}

function hover5(element) {
  element.setAttribute('src', 'estee-lauder-images/5.jpg');
}

function unhover5(element) {
  element.setAttribute('src', 'estee-lauder-images/0(1).jpg');
}
// END OF HOVER IMAGES


document.getElementById('vid').play();

// IMAGE SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
// END OF IMAGE SLIDESHOW

// TOPNAV
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}