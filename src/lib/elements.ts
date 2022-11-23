const navLinks = document.querySelectorAll('.nav-link');
const hiddenSections = document.querySelectorAll('.hidden-section');
const menuButtons = document.querySelectorAll('.menu-button');

const navbar = document.getElementById('navbar') as HTMLElement;
const mainTitle = document.getElementById('main-title') as HTMLElement;
const menuContainer = document.getElementById('menu-container') as HTMLElement;

const reservationDialog = document.getElementById(
  'reservation-dialog'
) as HTMLDialogElement;

const reservationForm = document.getElementById(
  'reservation-form'
) as HTMLFormElement;

const reservationOpenButton = document.getElementById(
  'reservation-open-button'
) as HTMLButtonElement;

const reservationCloseButton = document.getElementById(
  'reservation-close-button'
) as HTMLButtonElement;

const reservationSubmitButton = document.getElementById(
  'reservation-submit-button'
) as HTMLButtonElement;

export {
  navbar,
  navLinks,
  mainTitle,
  menuButtons,
  menuContainer,
  hiddenSections,
  reservationForm,
  reservationDialog,
  reservationOpenButton,
  reservationCloseButton,
  reservationSubmitButton
};
