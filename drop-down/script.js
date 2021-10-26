"use strict";

const toggleDropdown = function () {
  const dropdown = document.querySelector('.c-drop')
  dropdown.classList.toggle('show');
}

const clickEl = document.querySelector('.click');
clickEl.addEventListener('click', toggleDropdown);

window.onclick = function (event) {
  const dropdown = document.querySelector('.c-drop')
  if (!event.target.matches('.c-trigger')) {
    dropdown.classList.remove('show');
  }
}
