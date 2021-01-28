let heartActive = document.querySelector('.place__heart');

heartActive.addEventListener('click', function(){
  heartActive.innerHTML = '<div class="place__heart place__heart_active">&#9829;</div>';
});

let heartsLike = document.querySelectorAll('.place__heart');

function heartsActiveOne() {
  heartsLike[1].innerHTML = '<div class="place__heart place__heart_active">&#9829;</div>';
}
function heartsActiveTwo() {
  heartsLike[2].innerHTML = '<div class="place__heart place__heart_active">&#9829;</div>';
}
function heartsActiveThree() {
  heartsLike[3].innerHTML = '<div class="place__heart place__heart_active">&#9829;</div>';
}
function heartsActiveFour() {
  heartsLike[4].innerHTML = '<div class="place__heart place__heart_active">&#9829;</div>';
}
function heartsActiveFive() {
  heartsLike[5].innerHTML = '<div class="place__heart place__heart_active">&#9829;</div>';
}

heartsLike[1].addEventListener('click', heartsActiveOne);
heartsLike[2].addEventListener('click', heartsActiveTwo);
heartsLike[3].addEventListener('click', heartsActiveThree);
heartsLike[4].addEventListener('click', heartsActiveFour);
heartsLike[5].addEventListener('click', heartsActiveFive);
