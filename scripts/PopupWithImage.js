import { initialCards } from './initial-сards.js';
import Popup from './Popup.js';
import {cardPlace, popupProfile, formProfile, nameInput,
  jobInput, formValidatorProfile, openPopupProfile, nameProfile, jobProfile,
  openPopupPlaces, popupPlaces, formPlaces, placeInput, linkInput,
  formValidatorPlace, popups, templateCards, popupOpen, place, buttonLike,
  popupPicture, popupImage, popupTitle
} from './utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor (selectorPopup) {
  super (selectorPopup);
  }

  open (link, alt, text) {
    super.open();
    popupImage.src = link;

    popupImage.alt = alt;

    popupTitle.textContent = text;
  };
}
