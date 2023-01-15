/*MODALE MENU*/
const menuOptions = document.querySelector('.menu')
const menuButton = document.querySelector('#menu-button')
const menuCloseButton = document.querySelector('#close-button')

//Apro il menu
menuButton.addEventListener('click', function () {
  menuOptions.classList.toggle('menu-show');
});

//Chiudo il menu
menuCloseButton.addEventListener('click', closeMenu);
//Funzione per chiudere il menu
function closeMenu() {
  menuOptions.classList.remove('menu-show')
};

/* MODALE LOGIN */

//aprire e chiudere la finestra di login cliccando sull'icona
const loginIcon = document.querySelector('#login-icon');
const loginModal = document.querySelector('#login-modal')

loginIcon.addEventListener('click', function () {
  loginModal.classList.toggle('login-show')
});

//login form
const loginForm = document.querySelector('#login-form');
const loginName = document.querySelector('#login-name');
const loginPassword = document.querySelector('#login-password');
let welcomeUser = document.querySelector('#welcome-user')

loginForm.addEventListener('submit', function (event) {

  //Blocco il ricaricamento della pagina 
  event.preventDefault();

  // Raccolgo i dati del form
  const userName = loginName.value.trim();
  //Inserisco il nome Utente nel messaggio di benvenuto
  welcomeUser.innerHTML= `Ciao ${userName}!`;

  //Pulisco il form
  loginForm.reset();

  //Chiudo la modale
  loginModal.classList.toggle('login-show');
});



/* --ABOUT US-- */

function openAbout(aboutName, elmnt, color) {
  // Default. nascondo tutti gli elementi tabcontent
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // elimino il colore background dei tablink
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Mostro il tabcontent specifico
  document.getElementById(aboutName).style.display = "block";

  // Aggoungo un colore specifico al tablink selezionato
  elmnt.style.backgroundColor = color;
} 
// Rendo il tabcontent che voglio aperto di default
document.getElementById("defaultOpen").click();



