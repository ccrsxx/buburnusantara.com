import { html } from '@lib/utils';

import { Navbar } from './navbar';
import { Home } from './home';
import { About } from './about';
import { Offer } from './offer';
import { Menu } from './menu';
import { Gallery } from './gallery';
import { ReservationModal } from './modal/reservation-modal';
import { ImageModal } from './modal/image-modal';

function Index(): string {
  // prettier-ignore
  return html`
    ${Navbar()}
    <main>
      ${Home()}
      ${About()}
      ${Offer()}
      ${Menu()}
      ${Gallery()}
    </main>
    ${ReservationModal()}
    ${ImageModal()}
  `;
}

document.body.innerHTML = Index();
