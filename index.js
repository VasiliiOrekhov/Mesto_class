//константы
import {
  placesList,
  closeFormButton,
  initialCards,
  newCardHeandler,
  openFormButton,
  popupBackground,
} from './js/constants';
// методы работы с карточками
import { renderCard } from './js/renderCard';
import { likeHandler } from './js/likeHandler';
import { openForm, closeForm } from './js/popup';
import { addCard, deleteCard } from './js/card';

//отрисовываем первые 10 карточек
initialCards.forEach(function (initialCard) {
  const { name, link } = initialCard;
  renderCard(name, link);
});

function addEvents() {
  //слушатель для лайков
  placesList.addEventListener('click', likeHandler);
  // слушатель для открытия формы
  openFormButton.addEventListener('click', openForm);
  // слушатели для закрытия формы
  closeFormButton.addEventListener('click', closeForm);
  popupBackground.addEventListener('click', closeForm);
  // слушатель для создания новой формы
  newCardHeandler.addEventListener('click', addCard);
  // слушатель для удаления формы
  placesList.addEventListener('click', deleteCard);
}
addEvents();
