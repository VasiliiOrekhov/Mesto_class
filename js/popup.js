import {
  popupPlace,
  popupBackground,
  popupProfile,
  popupOpenImg,
  name,
  link,
  names,
  author,
  newCardHeandler,
  editProfileHeandler,
  validError,
} from './constants';
//форма создания новой карточки
export function openPlaceForm(event) {
  popupPlace.classList.add('popup-opened');
  popupBackground.classList.add('popup-background-opened');
  //popup.style.display = 'flex';
}
export function closePlaceForm(event) {
  popupPlace.classList.remove('popup-opened');
  popupBackground.classList.remove('popup-background-opened');
  validError.textContent = '';
}
//валидация формы новой карточки
export function newCardVallid(event) {
  if (name.value.length < 2 || link.value.length === 0) {
    newCardHeandler.setAttribute('disabled', true);
    newCardHeandler.classList.remove('popup__button_no');
  } else {
    newCardHeandler.removeAttribute('disabled');
    newCardHeandler.classList.add('popup__button_no');
  }
}
export function formValid(event) {
  if (name.validity.valid) {
    validError.textContent = '';
    validError.className = 'popup__error';
  } else {
    showError();
  }
}
function showError() {
  if (name.validity.valueMissing) {
    // Если поле пустое
    validError.textContent = 'Это обязательное поле';
  } else if (name.validity.tooShort) {
    // Если содержимое короткое
    validError.textContent = 'Должно быть от 2 до 30 символов';
  }
}

//форма изменения профиля
export function openProfileForm(event) {
  popupProfile.classList.add('popup-opened');
  popupBackground.classList.add('popup-background-opened');
}
export function closeProfileForm(event) {
  popupProfile.classList.remove('popup-opened');
  popupBackground.classList.remove('popup-background-opened');
}
//валидация формы изменения профиля
export function editProfileVallid(event) {
  if (names.value.length === 0 || author.value.length === 0) {
    editProfileHeandler.setAttribute('disabled', true);
    editProfileHeandler.classList.remove('popup__button_no');
  } else {
    editProfileHeandler.removeAttribute('disabled');
    editProfileHeandler.classList.add('popup__button_no');
  }
}

//форма открывания карточки
export function openCardForm(event) {
  if (event.target.classList.contains('place-card__image')) {
    //поменять с bgimg на img
    // console.log(event.target.style.backgroundImage);
    // console.log(event.target.getAttribute('style'));
    const backgroundImg = event.target.getAttribute('style');
    popupOpenImg.setAttribute('style', backgroundImg);
    popupOpenImg.classList.add('popup-opened-img');
  }
}
export function closeCardForm(event) {
  popupOpenImg.classList.remove('popup-opened-img');
}
