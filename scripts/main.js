const popupProfile = document.querySelector('.popup_place_profile');
const formProfile = popupProfile.querySelector('.popup__container');
//const closePopupProfile = formProfile.querySelector('.button_type_close');
const nameInput = formProfile.querySelector('.popup__input_type_name');
const jobInput = formProfile.querySelector('.popup__input_type_job');
const openPopupProfile = document.querySelector('.button_type_edit');
const nameProfile = document.querySelector('.profile__title');
const jobProfile = document.querySelector('.profile__subtitle');
const listContainer = document.querySelector('.places');
const templatePlace = document.querySelector('.template');
const openPopupPlaces = document.querySelector('.button_type_add-card');
const popupPlaces = document.querySelector('.popup_place_places');
const formPlaces = popupPlaces.querySelector('.popup__container');
//const closePopupPlaces = formPlaces.querySelector('.button_type_close');
const placeInput = formPlaces.querySelector('.popup__input_type_place');
const linkInput = formPlaces.querySelector('.popup__input_type_link');
const popupPicture = document.querySelector('.popup_place_picture');
const popupImage = popupPicture.querySelector('.popup__image');
const popupTitle = popupPicture.querySelector('.popup__title');
const formPicture = popupPicture.querySelector('.popup__container');
//const closePopupPicture = formPicture.querySelector('.button_type_close');


function togglePopup(popup) {

  popup.classList.toggle('popup_opened');
  if (popup.classList.contains('popup_opened')) {  //проверяем, открыт или нет
    document.addEventListener('keydown', closeByEscape);  //навешиваем, если открыт
  } else {
    document.removeEventListener('keydown', closeByEscape);  //удаляем, если закрыт
  }
}

function openProfilePopup() {

  nameInput.value = nameProfile.textContent;

  jobInput.value = jobProfile.textContent;

  togglePopup(popupProfile);
}

// function closePopupProfileOverlay(evt) {
//   if (evt.target === evt.currentTarget) {
//     togglePopup(popupProfile);
//   }
// }

const popups = document.querySelectorAll('.popup')

      popups.forEach((popup) => {
          popup.addEventListener('click', (evt) => {
              if (evt.target.classList.contains('popup_opened')) {
                  togglePopup(popup)
              }
              if (evt.target.classList.contains('button_type_close')) {
                togglePopup(popup)
              }
          })
      })

// function closePopupProfileEscape(evt) {
//   if (evt.key === 'Escape') {
//     popupProfile.classList.remove('popup_opened');
//   }
// }

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    togglePopup(openedPopup);
  }
}


// function ttt (evt) {
//   console.log(
//     'target', evt.target,
//     'currentTarget', evt.currentTarget
//   )
// }
// popupProfile.addEventListener('click', ttt);
// popupPlaces.addEventListener('click', ttt);
// popupPicture.addEventListener('click', ttt);


function editProfileFormSubmitHandler (evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;

  jobProfile.textContent = jobInput.value;

  togglePopup(popupProfile);
}

function openPlacePopup() {

  placeInput.value = '';

  linkInput.value = '';

  togglePopup(popupPlaces);
}

// function closePopupPlacesOverlay(evt) {
//   if (evt.target === evt.currentTarget) {
//     togglePopup(popupPlaces);
//   }
// }

// function closePopupPlacesEscape(evt) {
//   if (evt.key === 'Escape') {
//     popupPlaces.classList.remove('popup_opened');
//   }
// }

// function keyHandler(evt) {
//   if (evt.key === 'Escape') {
//     console.log('RRR');
//     togglePopup(popupPlaces);
//   }
// }

// document.addEventListener('keydown', (keyHandler));


function renderInitialCards() {
  const cards = initialCards.map(getItem);

  listContainer.append(...cards);
}

function getItem(item) {
    const newItem = templatePlace.content.cloneNode(true);
    const textPlace = newItem.querySelector('.place__title');
    const placeImage = newItem.querySelector('.place__image');
    const removePlace = newItem.querySelector('.button_type_remove');
    const likePlace = newItem.querySelector('.button_type_like');

    textPlace.textContent = item.name;
    placeImage.src = item.link;
    placeImage.alt = item.name;

    removePlace.addEventListener('click', deleteCard);

    likePlace.addEventListener('click', likeCard);

    placeImage.addEventListener('click', openImagePopup);

return newItem;
}

renderInitialCards();

function formSubmitHandlerPlaces (evt) {
  evt.preventDefault();

  listContainer.prepend(getItem({name: placeInput.value, link: linkInput.value}));

  placeInput.value = '';
  linkInput.value = '';

  togglePopup(popupPlaces);
}

function deleteCard(event) {
  event.target.closest('.place').remove();
}

function likeCard(event) {
  event.target.closest('.button_type_like').classList.toggle('button_clicked');
}

function openImagePopup(event) {
  const targetItem = event.target.closest('.place__image');
  const targetTitle = event.target.nextElementSibling;

  togglePopup(popupPicture);

  popupImage.src = targetItem.src;

  popupImage.alt = targetItem.alt;

  popupTitle.textContent = targetTitle.textContent;
}

// function closeImagePopupOverlay(evt) {
//   if (evt.target === evt.currentTarget) {
//     togglePopup(popupPicture);
//   }
// }

// function closeImagePopupEscape(evt) {
//   if (evt.key === 'Escape') {
//     popupPicture.classList.remove('popup_opened');
//   }
// }


openPopupProfile.addEventListener('click', openProfilePopup);
//closePopupProfile.addEventListener('click', () => {togglePopup(popupProfile)});
//closePopupProfile.addEventListener('click', popups);
//popupProfile.addEventListener('click', closePopupProfileOverlay);
popupProfile.addEventListener('click', popups);
//document.addEventListener('keydown', closePopupProfileEscape);
//document.addEventListener('keydown', closeByEscape);
//document.addEventListener('keydown', () => {closePopupProfileOverlay(popupProfile)});
formProfile.addEventListener('submit', editProfileFormSubmitHandler);
openPopupPlaces.addEventListener('click', () => {openPlacePopup(popupPlaces)});
//closePopupPlaces.addEventListener('click', () => {togglePopup(popupPlaces)});
//popupPlaces.addEventListener('click', closePopupPlacesOverlay);
//document.addEventListener('keydown', closePopupPlacesEscape);
//document.addEventListener('keydown', () => {closePopupPlacesOverlay(popupPlaces)});
formPlaces.addEventListener('submit', formSubmitHandlerPlaces);
//closePopupPicture.addEventListener('click', () => {togglePopup(popupPicture)});
//popupPicture.addEventListener('click', () => {closePopupOverlay(popupPicture)});
//popupPicture.addEventListener('click', closeImagePopupOverlay);
//document.addEventListener('keydown', closeImagePopupEscape);

