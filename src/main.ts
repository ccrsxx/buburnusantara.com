import './style.scss';

import toast from 'sweetalert2';
import {
  reservationForm,
  reservationDialog,
  reserveSubmitButton,
  reservationOpenButton,
  reservationCloseButton
} from './lib/elements';
import { sendEmail } from './lib/mail';
import type { Reservation } from './lib/types/reservation';

reservationOpenButton.addEventListener('click', handleReservationButtonOpen);
reservationCloseButton.addEventListener('click', handleReservationDialogClose);

reserveSubmitButton.addEventListener('click', handleReservationDialogClose);
reservationForm.addEventListener('submit', handleReservationSubmit);

async function handleReservationSubmit(e: SubmitEvent): Promise<void> {
  e.preventDefault();

  const formData = new FormData(reservationForm);
  const reservation = Object.fromEntries(formData) as Reservation;

  await sendEmail(reservation);

  handleReservationDialogClose();

  reservationForm.reset();

  await toast.fire({
    title: 'Reservation sent!'
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

if (import.meta.hot) import.meta.hot.accept();
