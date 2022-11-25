const navLinks = document.querySelectorAll('.nav-link');
const hiddenSections = document.querySelectorAll('.hidden-section');
const menuButtons = document.querySelectorAll('.menu-button');

const menuCategories: NodeListOf<HTMLElement> =
  document.querySelectorAll('.menu-category');

const navbar = document.getElementById('navbar') as HTMLElement;
const mainTitle = document.getElementById('home') as HTMLElement;
const menuContainer = document.getElementById('menu-container') as HTMLElement;

const reservationModal = document.getElementById(
  'reservation-modal'
) as HTMLDialogElement;

const reservationModalBackdrop = document.getElementById(
  'reservation-modal-backdrop'
) as HTMLDivElement;

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
  menuCategories,
  hiddenSections,
  reservationForm,
  reservationModal,
  reservationOpenButton,
  reservationCloseButton,
  reservationSubmitButton,
  reservationModalBackdrop
};
