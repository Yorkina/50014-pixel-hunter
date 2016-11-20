export function compile(htmlString) {
  const template = document.createElement('div');
  template.innerHTML = htmlString;
  return template;
}
