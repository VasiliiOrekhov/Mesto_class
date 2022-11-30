import { popup, popupBackground } from './constants';

export function openForm(event) {
  popup.classList.add('popup-opened');
  popupBackground.classList.add('popup-background-opened');
  //popup.style.display = 'flex';
}

export function closeForm(event) {
  popup.classList.remove('popup-opened');
  popupBackground.classList.remove('popup-background-opened');
}
