//отвечает за отрисовку элементов на странице
export default class Section {
//  constructor({ items, renderer }, containerSelector) {
  constructor({ renderItems, renderer }, containerSelector) {
    //массив данных, которые нужно добавить на страницу при инициализации класса
//    this._renderedItems = items;
    this._renderedItems = renderItems;
    //функция, которая отвечает за создание и отрисовку данных на странице
    this._renderer = renderer;
    //селектор контейнера, в который нужно добавлять созданные элементы
    this._container = document.querySelector(containerSelector);
  }
  //принимает DOM-элемент и добавляет его в контейнер
  addItem(element) {
    this._container.append(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

  //отвечает за отрисовку всех элементов
  renderItems(cards) {
    this.clear();
    this._renderedItems.forEach((item) => {
      this._renderer(item);
//      console.log(item)
    });
  }
}
