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

const reserveSubmitButton = document.getElementById(
  'reservation-submit-button'
) as HTMLButtonElement;

export {
  reservationForm,
  reservationDialog,
  reserveSubmitButton,
  reservationOpenButton,
  reservationCloseButton
};
