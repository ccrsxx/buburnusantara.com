import {
  toastModal,
  checkmarkIcon,
  toastModalTitle,
  toastModalBackdrop,
  toastModalDescription
} from '@lib/elements';
import { sleep, isInDialog } from './utils';

toastModal.addEventListener('click', handleToastModalClose);
toastModal.addEventListener('submit', handleToastModalClose);
toastModal.addEventListener('cancel', handleToastModalClose);

type ToastFireOptions = {
  title: string;
  delay?: number;
  description: string;
};

export async function toastFire({
  title,
  delay,
  description
}: ToastFireOptions): Promise<void> {
  toastModalTitle.textContent = title;
  toastModalDescription.textContent = description;

  if (delay) await sleep(delay);

  handleToastModalOpen();
}

function handleToastModalOpen(): void {
  document.body.style.overflow = 'hidden';
  checkmarkIcon.style.display = 'block';

  toastModal.showModal();
  toastModalBackdrop.classList.add('active');
}

function handleToastModalClose(e: MouseEvent | Event): void {
  if (isInDialog(e, toastModal)) return;

  document.body.style.overflow = '';
  setTimeout(() => (checkmarkIcon.style.display = 'none'), 500);

  toastModal.close();
  toastModalBackdrop.classList.remove('active');
}
