import { html } from '@lib/utils';

export type InputFieldProps = {
  id: string;
  type?: 'text' | 'email' | 'number' | 'date' | 'time' | 'tel';
  label: string;
  style?: string;
  customId?: string;
  useTextArea?: boolean;
};

export function InputField({
  id,
  type,
  label,
  style,
  customId,
  useTextArea
}: InputFieldProps): string {
  return html`
    <div
      class="${style ??
      ''} relative rounded ring-2 ring-slate-200 transition-shadow duration-200 focus-within:ring-blue-400"
    >
      ${useTextArea
        ? html`
            <textarea
              id="${customId ?? id}"
              name="${id}"
              rows="7"
              class="peer mt-6 w-full resize-y bg-inherit px-4 pb-2 text-black placeholder-transparent outline-none transition"
              placeholder=" "
              required
            ></textarea>
          `
        : html`
            <input
              class="peer mt-6 w-full bg-inherit px-4 pb-2 text-black placeholder-transparent outline-none transition"
              id="${customId ?? id}"
              name="${id}"
              type="${type ?? 'text'}"
              placeholder=" "
              required
            />
          `}
      <label
        for="${customId ?? id}"
        class="text-light-secondary dark:text-dark-secondary absolute left-4 translate-y-1 text-sm transition-all 
               peer-placeholder-shown:translate-y-3 peer-placeholder-shown:text-lg peer-placeholder-shown:text-inherit 
               peer-focus:translate-y-1 peer-focus:text-sm peer-focus:text-blue-400"
      >
        ${label}
      </label>
    </div>
  `;
}
