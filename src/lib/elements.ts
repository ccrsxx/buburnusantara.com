const navbar = document.querySelector('header') as HTMLElement;
const mainTitle = document.querySelector('.main-title') as HTMLElement;

const navLinks = document.querySelectorAll('.nav-link');
const hiddenSections = document.querySelectorAll('.section-hide');

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
  hiddenSections,
  reservationForm,
  reservationDialog,
  reservationOpenButton,
  reservationCloseButton,
  reservationSubmitButton
};
