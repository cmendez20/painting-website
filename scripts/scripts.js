const burgerMenu = document.querySelector('#burger-menu');
const navbarRight = document.querySelector('#navbarRight');
const closeMenu = document.querySelector('#closeMenu');
const navbarLinks = document.querySelectorAll('.navbar__link');

const mobileView = window.matchMedia('(max-width: 850px)');

burgerMenu.addEventListener('click', () => {
  navbarRight.classList.toggle('reveal');
  burgerMenu.classList.toggle('hidden');
  closeMenu.classList.toggle('reveal');
})

closeMenu.addEventListener('click', () => {
  navbarRight.classList.toggle('reveal');
  burgerMenu.classList.toggle('hidden');
  closeMenu.classList.toggle('reveal');
});


collapseNavbar(mobileView); // Call listener function at run time
mobileView.addListener(collapseNavbar); // Attach listener function on state changes 


function collapseNavbar(mobileView) {
  if (mobileView.matches) {
    navbarLinks.forEach(element => {
      element.addEventListener('click', () => {
        navbarRight.classList.toggle('reveal');
        closeMenu.classList.toggle('reveal');
        burgerMenu.classList.toggle('hidden');
      });
    });
  } else {
    navbarLinks.forEach(element => {
      element.addEventListener('click', () => {
        // navbarRight.classList.toggle('reveal');
        closeMenu.classList.toggle('hidden');
        burgerMenu.classList.toggle('hidden');
      });
    });
  }
}

