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