import { renderCard } from './renderCard';
import { form } from './constants';
import { closeForm } from './popup';

export function addCard(event) {
  event.preventDefault();
  const name = addNewCardForm.elements.name.value;
  const link = addNewCardForm.elements.link.value;
  renderCard(name, link);
  form.reset();
  closeForm();
}

//удаляем карточку
export function deleteCard(event) {
  if (event.target.classList.contains('place-card__delete-icon')) {
    const card = event.target.parentNode.parentNode;
    card.remove();
  }
}
