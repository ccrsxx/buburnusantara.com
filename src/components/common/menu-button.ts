import { html } from '@lib/utils';

type MenuButtonProps = {
  menu: string;
  index: number;
};

export function MenuButton({ menu, index }: MenuButtonProps): string {
  const indexOfThree = index % 3;

  return html`
    <button
      id=${menu}
      class="menu-button animated-element fade-bottom
       ${!indexOfThree
        ? 'delay-100'
        : indexOfThree === 1
        ? 'delay-200'
        : 'delay-300'}"
    >
      ${menu}
    </button>
  `;
}
