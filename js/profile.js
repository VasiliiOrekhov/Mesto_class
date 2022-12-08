import { formProfile, editProfileForm, userJob, userName } from './constants';
import { closeProfileForm } from './popup';

export function editProfile(event) {
  event.preventDefault();
  let names = editProfileForm.elements.names.value;
  let author = editProfileForm.elements.author.value;
  userName.textContent = names;
  userJob.textContent = author;
  formProfile.reset();
  closeProfileForm();
}
