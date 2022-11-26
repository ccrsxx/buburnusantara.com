import toast from 'sweetalert2';
import { Loading } from '@components/ui/loading';
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
reservationModal.addEventListener('cancel', handleReservationDialogClose);

reservationForm.addEventListener('submit', handleReservationSubmit);

async function handleReservationSubmit(e: SubmitEvent): Promise<void> {
  e.preventDefault();

  reservationSubmitButton.disabled = true;
  reservationSubmitButton.innerHTML = Loading();

  const formData = new FormData(reservationForm);
  const reservation = Object.fromEntries(formData) as Reservation;

  await sendEmail(reservation);

  handleReservationDialogClose();

  reservationForm.reset();

  reservationSubmitButton.disabled = false;
  reservationSubmitButton.innerHTML = 'Reserve Now';

  await toast.fire({
    icon: 'success',
    title: 'Your Reservation was sent!',
    text: 'We will get back to you shortly.'
  });
}

function handleReservationButtonOpen(): void {
  document.body.style.overflow = 'hidden';

  reservationModalBackdrop.classList.add('active');
  reservationModal.showModal();
}

function handleReservationDialogClose(e?: MouseEvent | Event): void {
  const isNotACloseButton =
    e &&
    'clientX' in e &&
    e.target !== reservationCloseButton &&
    (e.target as HTMLElement)?.id !== 'x-mark-icon';

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
