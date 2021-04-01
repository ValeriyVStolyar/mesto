import { initialCards } from './initial-сards.js';
import Popup from './Popup.js';
import {cardPlace, popupProfile, formProfile, nameInput,
  jobInput, formValidatorProfile, openPopupProfile, nameProfile, jobProfile,
  openPopupPlaces, popupPlaces, formPlaces, placeInput, linkInput,
  formValidatorPlace, popups, templateCards, popupOpen, place, buttonLike,
  popupPicture, popupImage, popupTitle,
//  popupWithImage
} from './utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor (selectorPopup) {
  super (selectorPopup);
  console.log(this._selectorPopup); console.log ('в конструкторе');
  }

  open (link, alt, text) {
    console.log('До опен имиджа')
    super.open();
    console.log('После опен имиджа')
    popupImage.src = link;
    console.log('подставили картирку и т.д.')

    popupImage.alt = alt;

    popupTitle.textContent = text;

    // this._selectorPopup.addEventListener('click', (evt) => {
    //   console.log(evt.target);
    //   console.log(this._selectorPopup);
    //   console.log(evt.currentTarget);
    // })
    };
}
