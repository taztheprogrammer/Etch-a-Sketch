

//gets the node for canvas div
const canvas = document.getElementById('canvas');
const displayBtn = document.getElementById('displayBtn');
const valDisplay = document.getElementById('valDisplay');

//const gridDim = 

//creates 4 divs with the class of pixel in the canvas div
for (let x=0; x<4; x++) {
    let temp = document.createElement('div');
    temp.classList.add('pixel');
    canvas.appendChild(temp);
    temp.addEventListener('pointerenter', color);
}

//create constant 'pixels' a node list containing all pixel elements

let pixels = document.querySelectorAll('.pixel');



function color() {
    event.target.style.backgroundColor = 'black';
}

/*
what follows is selecting clear button
*/
const clear = document.getElementById('clear');
clear.addEventListener('click', clearCanvas);

function clearCanvas() {
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = '';
    });
} 


displayBtn.addEventListener('click', createGrid);

function createGrid() {
    let gridVal = document.getElementById('gridVal');
    let gridsize = gridVal.value;
    valDisplay.innerHTML = gridsize + " * " + gridsize;
    canvas.style.setProperty('--gridx', gridsize);
    canvas.innerHTML = '';

    for (let x=0; x<(gridsize**2); x++) {
        let temp = document.createElement('div');
        temp.classList.add('pixel');
        canvas.appendChild(temp);
        temp.addEventListener('pointerenter', color);
    }
    pixels = document.querySelectorAll('.pixel');
}
