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

const reservationModalForm = document.getElementById(
  'reservation-modal-form'
) as HTMLFormElement;

const reservationModalOpenButton = document.getElementById(
  'reservation-modal-open-button'
) as HTMLButtonElement;

const reservationModalCloseButton = document.getElementById(
  'reservation-modal-close-button'
) as HTMLButtonElement;

const reservationModalSubmitButton = document.getElementById(
  'reservation-modal-submit-button'
) as HTMLButtonElement;

const imageModal = document.getElementById('image-modal') as HTMLDialogElement;

const imageModalBackdrop = document.getElementById(
  'image-modal-backdrop'
) as HTMLDivElement;

const imageModalImage = document.getElementById(
  'image-modal-image'
) as HTMLImageElement;

const toastModal = document.getElementById('toast-modal') as HTMLDialogElement;

const toastModalBackdrop = document.getElementById(
  'toast-modal-backdrop'
) as HTMLDivElement;

const toastModalTitle = document.getElementById(
  'toast-modal-title'
) as HTMLElement;

const toastModalDescription = document.getElementById(
  'toast-modal-description'
) as HTMLParagraphElement;

const checkmarkIcon = document.getElementById('checkmark-icon') as HTMLElement;

const contactForm = document.getElementById('contact-form') as HTMLFormElement;

const contactSubmitButton = document.getElementById(
  'contact-submit-button'
) as HTMLButtonElement;

export {
  navbar,
  navLinks,
  mainTitle,
  imageModal,
  toastModal,
  contactForm,
  menuButtons,
  checkmarkIcon,
  viewableImages,
  menuCategories,
  hiddenSections,
  imageModalImage,
  imageModalLinks,
  toastModalTitle,
  reservationModal,
  toastModalBackdrop,
  imageModalBackdrop,
  contactSubmitButton,
  reservationModalForm,
  toastModalDescription,
  reservationModalBackdrop,
  reservationModalOpenButton,
  reservationModalCloseButton,
  reservationModalSubmitButton
};
