import { html } from '../lib/utils';

import { Navbar } from './navbar';
import { Home } from './home';
import { About } from './about';
import { Offer } from './offer';
import { Menu } from './menu';

export function Index(): string {
  // prettier-ignore
  return html`
    ${Navbar()}
    <main>
      ${Home()}
      ${About()}
      ${Offer()}
      ${Menu()}
    </main>
  `;
}

document.body.innerHTML = html`${Index()}`;
