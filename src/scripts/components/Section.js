//отвечает за отрисовку элементов на странице
export default class Section {
  constructor({ items, renderer }, containerSelector) {
    //массив данных, которые нужно добавить на страницу при инициализации класса
    this._renderedItems = items;
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
  renderItems() {
    this.clear();
    this._renderedItems.forEach((item) => {
  //    console.log(item)
      this._renderer(item);
      console.log()
    });
  }
}
