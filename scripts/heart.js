let heartElement = document.querySelector('.element-group');

let actionChange = function(evt) {
  //if (mouseover) {
  if (evt.target === evt.currentTarget) {
    heartElement.innerHTML = `<img src="./images/element-heart-hover.png"
    alt="Сердечко" class="element-group"></img>`;
  }
  //if (mousedown) {
  if (evt.target !== evt.currentTarget) {
    heartElement.innerHTML = `<img src="./images/element-heart-active.png"
    alt="Сердечко" class="element-group"></img>`;
  }
  else {
    heartElement.innerHTML = `<img src="./images/element-heart.png"
    alt="Сердечко" class="element-group"></img>`;
  }
}
actionChange(evt);
