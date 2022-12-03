import { html } from '@lib/utils';
import { menus, allMenus } from '@constants/menu';
import { ProductsCategory } from './common/products-category';

export function Menu(): string {
  return html`
    <section
      id="menu"
      class="hidden-section grid min-h-screen content-center justify-items-center gap-12"
      data-index="3"
    >
      <div
        class="animated-element fade-bottom grid content-center gap-4 text-center"
      >
        <h2 class="section-title">Delicious Menu</h2>
        <p class="section-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          aliquid unde rem odio dolor quae illum reiciendis quia similique
          voluptates in, eos optio voluptatem. Dolorum quis eaque delectus
          nostrum nemo.
        </p>
      </div>
      <div class="flex flex-wrap items-center justify-center gap-4">
        ${menus.reduce((acc, menu, index) => {
          const indexOfFour = 1 + (index % 4);
          const fadeDelayClass = `fade-delay-${indexOfFour * 100}`;

          return (
            acc +
            html`
              <div class="animated-element fade-bottom ${fadeDelayClass}">
                <button class="menu-button smooth-tab" id="${menu}">
                  ${menu}
                </button>
              </div>
            `
          );
        }, '')}
      </div>
      <div class="main-container md:min-h-[580px]">
        ${allMenus.reduce(
          (acc, { category, products }) =>
            acc + ProductsCategory({ category, products }),
          ''
        )}
      </div>
    </section>
  `;
}
