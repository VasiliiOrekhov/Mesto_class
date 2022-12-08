export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
  {
    name: 'Нургуш',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg',
  },
  {
    name: 'Тулиновка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg',
  },
  {
    name: 'Остров Желтухина',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg',
  },
  {
    name: 'Владивосток',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg',
  },
];

//  querySelector создает ссылку на узел по первому найденному классу
export const placesList = document.querySelector('.places-list');
//добавляем форму для изменения профиля
export const openFormProfileButton = document.querySelector('.user-info__profile_button');
export const userName = document.querySelector('.user-info__name');
export const userJob = document.querySelector('.user-info__job');

// добавляем форму
export const openFormButton = document.querySelector('.user-info__button');
export const popupBackground = document.querySelector('.popup-background');
export const popupPlace = document.querySelector('.popup-place');
export const popupProfile = document.querySelector('.popup-profile');

//убираем форму
export const closePlaceFormButton = document.querySelector('.popup__close_place');

//добавляем карточку
export const formCard = document.forms.new;
export const addNewCardForm = document.querySelector('.popup__form_card');
export const newCardHeandler = document.querySelector('.popup__button_card');

//редактируем профиль
export const formProfile = document.forms.profile;
export const editProfileForm = document.querySelector('.popup__form_author');
export const editProfileHeandler = document.querySelector('.popup__button_profile');
//убираем форму
export const closeProfileFormButton = document.querySelector('.popup__close_profile');

//открываем карточку
//export const openCardButton = document.querySelector('.place-card__image');
export const popupOpenImg = document.querySelector('.popup-open_img');
export const closeImgFormButton = document.querySelector('.popup__close_img');

//валидация форм
export const name = formCard.elements.name;
export const link = formCard.elements.link;
export const names = formProfile.elements.names;
export const author = formProfile.elements.author;
