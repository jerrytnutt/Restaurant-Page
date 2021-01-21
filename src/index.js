import {myFunction} from '/src/home.js';
import {menu} from '/src/menu.js'
import {contact} from '/src/cotact.js'
const content = document.querySelector('#content')

const home = document.querySelector('#home')
const menubut = document.querySelector('#menu')
const cbut = document.querySelector('#contact')

home.addEventListener('click',() => {

    while (content.hasChildNodes()) {
        content.removeChild(content.lastChild);
    }
    myFunction()
});
menubut.addEventListener('click',() => {

    while (content.hasChildNodes()) {
        content.removeChild(content.lastChild);
    }
    menu()
});
cbut.addEventListener('click',() => {

    while (content.hasChildNodes()) {
        content.removeChild(content.lastChild);
    }
    contact()
});
myFunction()