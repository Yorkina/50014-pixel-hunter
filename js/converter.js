export function convertStringToElement(htmlString) {
  const template = document.createElement('template');
  template.innerHTML = htmlString;
  return template;
}
