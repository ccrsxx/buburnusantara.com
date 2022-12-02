import { html } from '@lib/utils';
import type { InputFieldProps } from './input-field';

export type InputReserveProps = InputFieldProps & {
  useSelect?: boolean;
};

export function InputReserve({
  id,
  type,
  style,
  label,
  customId,
  useSelect,
  useTextArea
}: InputReserveProps): string {
  return html`
    <div class="${style ?? ''} grid gap-1">
      <label class="self-start" for="${customId ?? id}">${label}</label>
      ${useSelect
        ? html`
            <select
              class="smooth-tab rounded-md bg-white p-2 ring-2 ring-slate-200 focus-visible:ring-blue-400"
              name="${customId ?? id}"
              id="${id}"
              required
            >
              <option value="" selected disabled hidden>
                Choose many people
              </option>
              <option value="1">1 People</option>
              <option value="2">2 People</option>
              <option value="3">3 People</option>
              <option value="4">4+ People</option>
            </select>
          `
        : useTextArea
        ? html`
            <textarea
              id="${customId ?? id}"
              name="${id}"
              rows="7"
              class="smooth-tab rounded-md p-2 ring-2 ring-slate-200 focus-visible:ring-blue-400"
              required
            ></textarea>
          `
        : html`
            <input
              id="${customId ?? id}"
              type="${type ?? 'text'}"
              name="${id}"
              class="smooth-tab rounded-md p-2 ring-2 ring-slate-200 focus-visible:ring-blue-400"
              required
            />
          `}
    </div>
  `;
}
