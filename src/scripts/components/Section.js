export default class Section {

  constructor({ renderItems, renderer }, containerSelector) {

    this._renderedItems = renderItems;

    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  addItem(element) {
    this._container.append(element);
  }

  clear() {
    this._container.innerHTML = '';
  }

  renderItems(cards) {
    this.clear();
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
