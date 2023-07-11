// 
import bot from './assets/bot.js';
import user from './assets/user.js';

const form = document.querySelector('form');
const chatContainer = document.querySelector('#chat_container');
let loadInterval;

function loader(element){
  element.textContent = '';
  loadInterval = setInterval(() => {
    element.textContent += '.';
    if(element.textContent === '....'){
      element.textContent = '';
    }
  },300)
}

function typeText(element,text){

}