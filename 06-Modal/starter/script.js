'use strict';

const showModalButtons = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');

const backdrop = document.querySelector('.overlay');
const closeModalButton = document.querySelector('.close-modal');

const hideModal = () => {
  modal.classList.add('hidden');
  backdrop.classList.add('hidden');
};

const showModal = () => {
  modal.classList.remove('hidden');
  backdrop.classList.remove('hidden');
};

for (let i = 0; i < showModalButtons.length; i++) {
  showModalButtons[i].addEventListener('click', showModal);
}

closeModalButton.addEventListener('click', hideModal);

backdrop.addEventListener('click', hideModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) hideModal();
});
