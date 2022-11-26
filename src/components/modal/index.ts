import { html } from '@lib/utils';
import { ReservationModal } from './reservation-modal';
import { ImageModal } from './image-modal';

export function Modal(): string {
  // prettier-ignore
  return html`
    <modal>
      ${ReservationModal()}
      ${ImageModal()}
    </modal>
  `;
}
