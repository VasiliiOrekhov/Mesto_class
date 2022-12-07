//константы
import {
  placesList,
  closePlaceFormButton,
  closeProfileFormButton,
  initialCards,
  newCardHeandler,
  openFormButton,
  popupBackground,
  openFormProfileButton,
  editProfileHeandler,
} from './js/constants';
// методы работы с карточками
import { renderCard } from './js/renderCard';
import { likeHandler } from './js/likeHandler';
import { openPlaceForm, closePlaceForm, openProfileForm, closeProfileForm } from './js/popup';
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
  editProfileHeandler.addEventListener('click', editProfile); // new...izmenit

  // слушатель для удаления формы
  placesList.addEventListener('click', deleteCard);
}
addEvents();
