// Variables

const POPUP_OPENED_CLASSNAME = 'popup_open';
const BODY_FIXED_CLASSNAME = 'body_fixed';

const bodyNode = document.querySelector('body');
const popupNode = document.querySelector('.js-popup');
const btnOpenNode = document.querySelector('.js-btn');
const popupContentNode = document.querySelector('.js-popup__content');
const btnCloseNode = document.querySelector('.js-popup__close-btn');

const BURGER_OPENED_CLASSNAME = 'burger_open';
// const BURGER_BTN_OPENED_CLASSNAME = 'burger-btn_open';

const burgerNode = document.querySelector('.js-burger-mobile-menu');
const burgerBtnNode = document.querySelector('.js-burger-btn');
const burgerContentNode = document.querySelector('.js-burger__content');
const burgerCloseBtn = document.querySelector('.js-burger__close-btn');
const burgerMobileLinks = document.querySelectorAll(
  '.js-burger-mobile-menu-nav-menu__link'
);

// Popup

btnOpenNode.addEventListener('click', togglePopup);
btnCloseNode.addEventListener('click', togglePopup);

popupNode.addEventListener('click', event => {
  const isClickOutsideContent = !event
    .composedPath()
    .includes(popupContentNode);

  if (isClickOutsideContent) {
    togglePopup();
  }
});

function togglePopup() {
  popupNode.classList.toggle(POPUP_OPENED_CLASSNAME);
  bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
}

// Burger

burgerBtnNode.addEventListener('click', toggleBurger);

burgerNode.addEventListener('click', event => {
  const isClickOutsideContent = !event
    .composedPath()
    .includes(burgerContentNode);

  if (isClickOutsideContent) {
    toggleBurger();
  }
});

burgerCloseBtn.addEventListener('click', closeBurgerMenu);

function toggleBurger() {
  burgerNode.classList.toggle(BURGER_OPENED_CLASSNAME);
  bodyNode.classList.toggle(BODY_FIXED_CLASSNAME);
  // burgerBtnNode.classList.toggle(BURGER_BTN_OPENED_CLASSNAME);
}

function closeBurgerMenu() {
  burgerNode.classList.remove(BURGER_OPENED_CLASSNAME);
  bodyNode.classList.remove(BODY_FIXED_CLASSNAME);
}

burgerMobileLinks.forEach(link => {
  link.addEventListener('click', function () {
    closeBurgerMenu();
  });
});
