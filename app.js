// Sélectionne et stocke l'icône burger (menu mobile)
const icone = document.querySelector(".navbar-mobile i");
console.log(icone);

// Sélectionne et stocke la div modal
const modal = document.querySelector(".modal");
console.log(modal);

// Sélectionne et stocke la barre de navigation
const navbar = document.querySelector(".navbar-mobile-list");
console.log(navbar);

// Ajoute un écouteur d'événement 'click' sur l'icône
icone.addEventListener("click", function () {
  console.log("icone cliquée");

  // Bascule entre les classes 'modal' et 'change-modal' pour la div modal
  // 'change-modal' doit être une classe qui fait descendre la div jusqu'en bas de l'écran
  modal.classList.toggle("modal");
  modal.classList.toggle("change-modal");

  // Bascule entre les classes 'fa-bars' (icône burger) et 'fa-times' (icône croix) pour l'icône

  // Assurez-vous que ces classes sont correctement définies dans votre CSS ou votre bibliothèque d'icônes
  icone.classList.toggle("fa-solid");
  icone.classList.toggle("fa-times");
  icone.classList.toggle("fa-solid");
  icone.classList.toggle("fa-bars");

  // Bascule la classe 'hide-nav' pour la barre de navigation
  // 'hide-nav' doit être une classe qui cache la barre de navigation
  navbar.classList.toggle("navbar-mobile-list");
  navbar.classList.toggle("hide-nav");
});
