import { html } from '@lib/utils';
import { ToastModal } from './toast-modal';
import { ImageModal } from './image-modal';
import { ReservationModal } from './reservation-modal';

export function Modal(): string {
  // prettier-ignore
  return html`
    <modal>
      ${ReservationModal()}
      ${ImageModal()}
      ${ToastModal()}
    </modal>
  `;
}
