const navLinks = document.querySelectorAll('.nav-link');
const hiddenSections = document.querySelectorAll('.hidden-section');

const menuButtons = document.querySelectorAll('.menu-button');

const viewableImages: NodeListOf<HTMLImageElement> =
  document.querySelectorAll('.viewable-image');

const imageModalLinks: NodeListOf<HTMLAnchorElement> =
  document.querySelectorAll('.image-modal-link');

const menuCategories: NodeListOf<HTMLDivElement> =
  document.querySelectorAll('.menu-category');

const navbar = document.getElementById('navbar') as HTMLElement;
const mainTitle = document.getElementById('home') as HTMLElement;

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

const imageModal = document.getElementById('image-modal') as HTMLDialogElement;

const imageModalBackdrop = document.getElementById(
  'image-modal-backdrop'
) as HTMLDivElement;

const imageModalImage = document.getElementById(
  'image-modal-image'
) as HTMLImageElement;

const contactForm = document.getElementById('contact-form') as HTMLFormElement;

const contactSubmitButton = document.getElementById(
  'contact-submit-button'
) as HTMLButtonElement;

export {
  navbar,
  navLinks,
  mainTitle,
  imageModal,
  contactForm,
  menuButtons,
  viewableImages,
  menuCategories,
  hiddenSections,
  imageModalImage,
  imageModalLinks,
  reservationForm,
  reservationModal,
  imageModalBackdrop,
  contactSubmitButton,
  reservationOpenButton,
  reservationCloseButton,
  reservationSubmitButton,
  reservationModalBackdrop
};
