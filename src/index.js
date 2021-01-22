import {displayHome} from '/src/home.js';
import {displayMenu} from '/src/menu.js'
import {displayContact} from '/src/contact.js'

const content = document.querySelector('#content')

const homeTab = document.querySelector('#home')
const menuTab = document.querySelector('#menu')
const contactTab = document.querySelector('#contact')

function clearDisplay(){
    const content = document.querySelector('#content')

    while (content.hasChildNodes()) {
        content.removeChild(content.lastChild);
    }
}

homeTab.addEventListener('click',() => {

    clearDisplay()
    return displayHome()
});

menuTab.addEventListener('click',() => {

    clearDisplay()
    return displayMenu()
});

contactTab.addEventListener('click',() => {

    clearDisplay()
    return displayContact()
});

displayHome()