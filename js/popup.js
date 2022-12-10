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
  allValidError,
  formCard,
  formProfile,
} from './constants';
//форма создания новой карточки
export function openPlaceForm() {
  popupPlace.classList.add('popup-opened');
  popupBackground.classList.add('popup-background-opened');
}
export function closePlaceForm() {
  popupPlace.classList.remove('popup-opened');
  popupBackground.classList.remove('popup-background-opened');
  allValidError.textContent = '';
  formCard.reset();
}
//валидация кнопки формы новой карточки
export function newCardVallid() {
  if (name.validity.valid && link.validity.valid) {
    newCardHeandler.removeAttribute('disabled');
    newCardHeandler.classList.add('popup__button_no');
  } else {
    newCardHeandler.setAttribute('disabled', true);
    newCardHeandler.classList.remove('popup__button_no');
  }
}
// валидация ошибок форм
export function formValid(event) {
  const formEvent = event.target;
  const validError = formEvent.nextSibling;
  if (formEvent.validity.valid) {
    validError.textContent = '';
    validError.className = 'popup__error';
  } else {
    if (formEvent.validity.valueMissing) {
      // Если поле пустое
      validError.textContent = 'Это обязательное поле';
    } else if (formEvent.validity.tooShort) {
      // Если содержимое короткое
      validError.textContent = 'Должно быть от 2 до 30 символов';
    } else if (formEvent.validity.patternMismatch) {
      // Если в поле link не ссылка
      validError.textContent = 'Здесь должна быть ссылка';
    }
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
  formProfile.reset();
  allValidError.textContent = '';
}
//валидация формы изменения профиля
export function editProfileVallid() {
  if (names.validity.valid && author.validity.valid) {
    editProfileHeandler.removeAttribute('disabled');
    editProfileHeandler.classList.add('popup__button_no');
  } else {
    editProfileHeandler.setAttribute('disabled', true);
    editProfileHeandler.classList.remove('popup__button_no');
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
export function closeCardForm() {
  popupOpenImg.classList.remove('popup-opened-img');
}
