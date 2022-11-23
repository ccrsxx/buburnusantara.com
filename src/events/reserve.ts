import toast from 'sweetalert2';
import { spinnerIcon } from '../components/ui/spinner';
import { sendEmail } from '../lib/mail';
import {
  reservationForm,
  reservationDialog,
  reservationOpenButton,
  reservationCloseButton,
  reservationSubmitButton
} from '../lib/elements';
import type { Reservation } from '../lib/types/reservation';

reservationOpenButton.addEventListener('click', handleReservationButtonOpen);
reservationCloseButton.addEventListener('click', handleReservationDialogClose);

reservationForm.addEventListener('submit', handleReservationSubmit);

async function handleReservationSubmit(e: SubmitEvent): Promise<void> {
  e.preventDefault();

  reservationSubmitButton.innerHTML = spinnerIcon;
  reservationSubmitButton.disabled = true;

  const formData = new FormData(reservationForm);
  const reservation = Object.fromEntries(formData) as Reservation;

  await sendEmail(reservation);

  handleReservationDialogClose();

  reservationForm.reset();

  reservationSubmitButton.innerHTML = 'Reserve Now';
  reservationSubmitButton.disabled = false;

  await toast.fire({
    icon: 'success',
    title: 'Reservation was sent!',
    text: 'We will get back to you shortly.'
  });
}

function handleReservationButtonOpen(): void {
  document.body.style.overflow = 'hidden';
  reservationDialog.showModal();
}

function handleReservationDialogClose(): void {
  document.body.style.overflow = '';
  reservationDialog.close();
}
