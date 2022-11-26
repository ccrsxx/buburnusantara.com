import { html } from '@lib/utils';
import type { InputFieldProps } from './input-field';

export function InputReserve({
  id,
  type,
  style,
  label,
  useTextArea
}: InputFieldProps): string {
  return html`
    <div class="${style ?? ''} grid gap-1">
      <label class="self-start" for="${id}">${label}</label>
      ${useTextArea
        ? html`<textarea
            id="${id}"
            name="${id}"
            rows="7"
            class="smooth-tab rounded-md p-2 ring-2 ring-slate-200 focus-visible:ring-blue-400"
            required
          ></textarea>`
        : html`<input
            id="${id}"
            type="${type ?? 'text'}"
            name="${id}"
            class="smooth-tab rounded-md p-2 ring-2 ring-slate-200 focus-visible:ring-blue-400"
            required
          />`}
    </div>
  `;
}
