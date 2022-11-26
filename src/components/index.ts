import { html } from '@lib/utils';

import { Navbar } from './navbar';
import { Home } from './home';
import { About } from './about';
import { Offer } from './offer';
import { Menu } from './menu';
import { Gallery } from './gallery';
import { Contact } from './contact';
import { Modal } from './modal';

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
      ${Contact()}
    </main>
    ${Modal()}
  `;
}

document.body.innerHTML = Index();
