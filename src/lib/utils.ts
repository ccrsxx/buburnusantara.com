const body = document.body;

function html(
  strings: string | TemplateStringsArray,
  ...values: unknown[]
): string {
  return String.raw({ raw: strings }, ...values);
}

export { body, html };
