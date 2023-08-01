

//gets the node for canvas div
const canvas = document.getElementById('canvas');

//creates 4 divs with the class of pixel in the canvas div
for (let x=0; x<4; x++) {
    let temp = document.createElement('div');
    temp.classList.add('pixel');
    canvas.appendChild(temp);
}

//create constant 'pixels' a node list containing all pixel elements
const pixels = document.querySelectorAll('.pixel');

for (let x=0; x<pixels.length; x++) {
    pixels[x].addEventListener('pointerenter', color);
}

function color() {
    event.target.style.backgroundColor = 'black';
}

/*
what follows is selecting clear button
implementing clearCanvas function for button
clearCanvas function which iterates though the pixels nodelist
and reduces background color
*/
const clear = document.getElementById('clear');
clear.addEventListener('click', clearCanvas);

function clearCanvas() {
    pixels.forEach(pixel => {
        pixel.style.backgroundColor = '';
    });
}


/* copy this
<body>
    <main>
        <div id="control">
            <button id="clear">clear</button>
        </div>
        <div id="canvas">
        </div>
    </main>
    <script src="script.js"></script>
</body>

*/