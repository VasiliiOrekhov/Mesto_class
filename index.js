//константы
import {
  placesList,
  closePlaceFormButton,
  closeProfileFormButton,
  closeImgFormButton,
  initialCards,
  newCardHeandler,
  openFormButton,
  popupBackground,
  openFormProfileButton,
  editProfileHeandler,
  formCard,
  formProfile,
} from './js/constants';
// методы работы с карточками
import { renderCard } from './js/renderCard';
import { likeHandler } from './js/likeHandler';
import {
  openPlaceForm,
  closePlaceForm,
  openProfileForm,
  closeProfileForm,
  openCardForm,
  closeCardForm,
  newCardVallid,
  editProfileVallid,
} from './js/popup';
import { addCard, deleteCard } from './js/card';
import { editProfile } from './js/profile';

//отрисовываем первые 10 карточек
initialCards.forEach(function (initialCard) {
  const { name, link } = initialCard;
  renderCard(name, link);
});

function addEvents() {
  //слушатель для лайков
  placesList.addEventListener('click', likeHandler);
  // слушатель для открытия формы
  openFormButton.addEventListener('click', openPlaceForm);
  // слушатель открытия формы редактирования профиля
  openFormProfileButton.addEventListener('click', openProfileForm);
  // слушатели для закрытия формы карточек
  closePlaceFormButton.addEventListener('click', closePlaceForm);
  popupBackground.addEventListener('click', closePlaceForm);
  // слушатели для закрытия формы изменения профиля
  closeProfileFormButton.addEventListener('click', closeProfileForm);
  popupBackground.addEventListener('click', closeProfileForm);
  // слушатель для создания новой формы
  newCardHeandler.addEventListener('click', addCard);
  //слушатель для формы изменения профиля
  editProfileHeandler.addEventListener('click', editProfile);

  // слушатель для удаления формы
  placesList.addEventListener('click', deleteCard);

  // слушатель открытия карточки
  placesList.addEventListener('click', openCardForm);
  closeImgFormButton.addEventListener('click', closeCardForm);
  //слушатели для валидации форм
  formCard.addEventListener('input', newCardVallid);
  formProfile.addEventListener('input', editProfileVallid);
}

addEvents();
