import { html } from '@lib/utils';
import { CustomIcon } from './custom-icon';

export function Loading(): string {
  return html`
    <i class="flex w-full justify-center">
      ${CustomIcon({ iconName: 'SpinnerIcon' })}
    </i>
  `;
}
