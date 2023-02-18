const firstCharacter = document.querySelector('.character');

const firstCharacterbody = document.querySelector('.character .body')

const secondCharacter = document.querySelector('.characterone');

const secondCharacterbody = document.querySelector('.characterone .body');

const thirdCharacter = document.querySelector('.charactertwo')

const thirdCharacterbody = document.querySelector('.charactertwo .body')

const text = document.querySelector('span');

let arr = []

function run() {

firstCharacter.addEventListener('click', () => {
  firstCharacterbody.classList.add('dead')
  firstCharacter.classList.add('deadman')
  arr.push('firstCharacter');
  text.textContent = arr.length;
  
  let value = arr.length;
  if (value > 2) {
    arr = [];
    alert('You won!');
    text.innerText = 0;
      location.reload();
  }
})

secondCharacter.addEventListener('click', () => {
  secondCharacterbody.classList.add('dead');
  secondCharacter.classList.add('deadman');
  arr.push('secondCharacter');
  text.textContent = arr.length;
  
  let value = arr.length;
  if (value > 2) {
    arr = [];
    alert('You won!');
    text.innerText = 0;
      location.reload();
  }
})

thirdCharacter.addEventListener('click', () => {
  thirdCharacterbody.classList.add('dead')
  thirdCharacter.classList.add('deadman')
  arr.push('thirdCharacter');
  text.textContent = arr.length;
  
  let value = arr.length;
  if (value > 2) {
    arr = [];
    alert('You won!');
    text.innerText = 0;
      location.reload();;
  }
})



}
run();
//console.log(arr.length);
