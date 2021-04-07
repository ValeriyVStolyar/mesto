import Popup from './Popup.js';
import { popupImage, popupTitle
} from '../utils/constants.js';

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
