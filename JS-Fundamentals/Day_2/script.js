'use strict';

console.log('script loaded');

const items = ['Banana', 'Mango', 'Pineapple', 'Apple'];
const listElement = document.getElementById('lstItems');

function myFun(item) {
    const newList = document.createElement('li');
    newList.classList.add('list-group-item');
    newList.innerText = `${item}`;
    document.getElementById('lstItems').appendChild(newList);
}

document.getElementById('btnWork').onclick = () => {
    for (let i = 0; i < items.length; i++) {
        myFun(items[i]);
    }
};

document.getElementById('btnAddFruit').onclick = () => {
    let newFruit = document.getElementById('txtFruit').value;
    if (newFruit.replace(/\s+/g, '') == "") {
        newFruit = "Banana";
    }
    myFun(newFruit);
};