export default function (htmlString) {
  const template = document.createElement('div');
  template.innerHTML = htmlString;
  return template;
}

