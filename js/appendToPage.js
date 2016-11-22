export default function (element) {
  const mainElement = document.getElementById('main');
  mainElement.innerHTML = '';
  mainElement.appendChild(element);
}
