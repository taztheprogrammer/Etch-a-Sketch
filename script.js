

/*
const pixels = document.getElementsByClassName("pixel");
*/
const canvas = document.getElementById('canvas');

const one = document.createElement('div');
one.classList.add('pixel');
canvas.appendChild(one);

one.addEventListener('pointerenter', color);

function color() {
    one.style.backgroundColor = 'black';
}


const clear = document.getElementById('clear');
clear.addEventListener('click', clearCanvas);

function clearCanvas() {
    /*
   for (let x = 0; x < pixels.length; x++) {
    pixels[x].style.backgroundColor = '';
   }
   */
  one.style.backgroundColor = "";
}
