/*
fetch('items.json').then(function (response) {
    return response.json();

}).then(function (json) {
    items = json;
    console.log('Dati: ', items.ring[1])
}).catch(function (err) {
    console.log('Fetch problem: ' + err.message);
});
*/

/*
fetch("./items.json")
.then(response => {
   return response.json();
})
.then(data => console.log(data));
*/

/*Configuro file json*/
import items from './items.json' assert {type:"json"};
console.log(items);

/*MODALE MENU*/
const menuOptions = document.querySelector('.menu')
const menuButton = document.querySelector('#menu-button')
const menuCloseButton = document.querySelector('#close-button')

//Apro il menu
menuButton.addEventListener('click', function () {
    menuOptions.classList.toggle('menu-show')
});

//Chiudo il menu
menuCloseButton.addEventListener('click', closeMenu)
//Funzione per chiudere il menu
function closeMenu() {
    menuOptions.classList.remove('menu-show')
};

/*
$(menuThing).on('click', function(){
     $(menuThing).toggle(false);
     $(this).toggle(true);
})
*/


/* --GALLERY-- */
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}