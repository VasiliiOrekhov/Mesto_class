import { popupPlace, popupBackground, popupProfile } from './constants';
//форма создания новой карточки
export function openPlaceForm(event) {
  popupPlace.classList.add('popup-opened');
  popupBackground.classList.add('popup-background-opened');
  //popup.style.display = 'flex';
}

export function closePlaceForm(event) {
  console.log('Place');
  popupPlace.classList.remove('popup-opened');
  popupBackground.classList.remove('popup-background-opened');
}
//форма изменения профиля
export function openProfileForm(event) {
  popupProfile.classList.add('popup-opened');
  popupBackground.classList.add('popup-background-opened');
}
export function closeProfileForm(event) {
  console.log('PPPPPPPPPPP');
  popupProfile.classList.remove('popup-opened');
  popupBackground.classList.remove('popup-background-opened');
}
