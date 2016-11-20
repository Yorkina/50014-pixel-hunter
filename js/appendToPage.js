export function appendToPage(element) {
  const mainElement = document.getElementById('main');
  mainElement.innerHTML = '';
  mainElement.appendChild(element);
}
