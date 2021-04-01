//отвечает за управление отображением информации о пользователе на странице
export default class UserInfo {
  //элемента имени пользователя и элемента информации о себе
  constructor (userName, userInfo) {
    this._userName = userName;
    this._userInfo = userInfo;
    console.log(userName); console.log ('в конструкторе');
    console.log(userInfo.textContent);  console.log ('в конструкторе');
  }
//возвращает объект с данными пользователя
//пригодится когда данные пользователя нужно будет подставить в форму при открытии
  getUserInfo = () => {
    // достаём все элементы полей
    this._userName = this._userName.textContent;
    this._userInfo = this._userInfo.textContent;
    console.log(this._userName)
    console.log(this._userInfo)


    // // создаём пустой объект
    // this._formValues = {};

    // // добавляем в этот объект значения всех полей
    // this._inputList.forEach(input => {
    //   this._formValues[input.name] = input.value;
    // });

    // // возвращаем объект значений
    // return this._formValues;
  }
//принимает новые данные пользователя и добавляет их на страницу
  setUserInfo () {
    this._userName = '???';
    this._userInfo = 'XZ';
    console.log(this._userName)
    console.log(this._userInfo)
  }



//   _getInputValues() {
//     // достаём все элементы полей
//     this._inputList = this._element.querySelectorAll('.popup__input');

//     // создаём пустой объект
//     this._formValues = {};

//     // добавляем в этот объект значения всех полей
//     this._inputList.forEach(input => {
//       this._formValues[input.name] = input.value;
//     });

//     // возвращаем объект значений
//     return this._formValues;
//   }

// }
// import Card from './Card.js';

// export default class UserInfo extends Card {
// 	constructor(data, cardSelector) {
//     super(cardSelector);
// 		this._text = data.text;
// 	}

//   generateCard() {
//     this._element = super._getTemplate();
//     super._setEventListeners();

//   	this._element.querySelector('.place__title').textContent = this._text;

//   	return this._element;
//   }

  // _handleMessageClick() {
  //   super._handleMessageClick();

  //   this._element.classList.toggle('card_is-active');
  // }
}


// this._inputList = this._popupElement.querySelectorAll('.popup__input');
// this._formValues = {};
// this._inputList.forEach(input => this._formValues[input.name] = input.value);
