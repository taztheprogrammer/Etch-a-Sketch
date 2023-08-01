
/*
const pixels = document.getElementsByClassName("pixel");
const head = documnet.querySelector('h1');
const one = document.getElementById('one');


pixels.addeventlistener('pointerenter', color);
*/

const pixels = document.getElementsByClassName("pixel");

const one = document.getElementById('one');
one.addEventListener('pointerenter', color)

function color() {
    one.style.backgroundColor = 'black';
}

const clear = document.getElementById('clear');
clear.addEventListener('click', clearCanvas);

function clearCanvas() {
   for (let x = 0; x < pixels.length; x++) {
    pixels[x].style.backgroundColor = '';
   }
}
