export function html(
  strings: TemplateStringsArray,
  ...values: unknown[]
): string {
  return String.raw({ raw: strings }, ...values);
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function isInDialog(
  e: MouseEvent | Event,
  dialog: HTMLDialogElement
): boolean {
  if (!(e instanceof MouseEvent)) return false;

  const { clientX, clientY } = e;

  const { top, left, width, height } = dialog.getBoundingClientRect();

  return (
    top <= clientY &&
    left <= clientX &&
    clientX <= left + width &&
    clientY <= top + height
  );
}
