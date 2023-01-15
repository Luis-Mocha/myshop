/*MODALE MENU*/
const menuOptions = document.querySelector('.menu')
const menuButton = document.querySelector('#menu-button')
const menuCloseButton = document.querySelector('#close-button')

//Apro il menu
menuButton.addEventListener('click', function () {
    menuOptions.classList.toggle('menu-show')
});

//Chiudo il menu
menuCloseButton.addEventListener('click', closeMenu);
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


/* --ABOUT US-- */

function openAbout(aboutName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(aboutName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();