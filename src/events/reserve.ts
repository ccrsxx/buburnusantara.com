import toast from 'sweetalert2';
import { Spinner } from '@components/common/spinner';
import { sendEmail } from '@lib/mail';
import {
  reservationForm,
  reservationModal,
  reservationOpenButton,
  reservationCloseButton,
  reservationSubmitButton,
  reservationModalBackdrop
} from '@lib/elements';
import type { Reservation } from '@lib/types/reservation';

reservationOpenButton.addEventListener('click', handleReservationButtonOpen);
reservationCloseButton.addEventListener('click', handleReservationDialogClose);
reservationModal.addEventListener('click', handleReservationDialogClose);

reservationForm.addEventListener('submit', handleReservationSubmit);

async function handleReservationSubmit(e: SubmitEvent): Promise<void> {
  e.preventDefault();

  reservationSubmitButton.innerHTML = Spinner();
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

  reservationModalBackdrop.classList.add('active');
  reservationModal.showModal();
}

function handleReservationDialogClose(e?: MouseEvent): void {
  const isNotACloseButton = e && e.target !== reservationCloseButton;

  if (isNotACloseButton) {
    const { clientX, clientY } = e;

    const { top, left, width, height } =
      reservationModal.getBoundingClientRect();

    const isInDialog =
      top <= clientY &&
      left <= clientX &&
      clientX <= left + width &&
      clientY <= top + height;

    if (isInDialog) return;
  }

  document.body.style.overflow = '';

  reservationModalBackdrop.classList.remove('active');
  reservationModal.close();
}
