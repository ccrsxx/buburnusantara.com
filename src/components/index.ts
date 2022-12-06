import { html } from '@lib/utils';

import { Navbar } from './navbar';
import { Home } from './home';
import { About } from './about';
import { Favorite } from './favorite';
import { Menu } from './menu';
import { Gallery } from './gallery';
import { Contact } from './contact';
import { Footer } from './footer';
import { Modal } from './modal';

function Index(): string {
  // prettier-ignore
  return html`
    ${Navbar()}
    <main class="[&>*:not(:first-child):nth-child(odd)]:bg-main-background">
      ${Home()}
      ${About()}
      ${Favorite()}
      ${Menu()}
      ${Gallery()}
      ${Contact()}
    </main>
    ${Footer()}
    ${Modal()}
  `;
}

document.body.innerHTML = Index();
