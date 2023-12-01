const GRIDSIDE = 600;
let squaresPerSide = 16;

const buttonValue = document.querySelector('#button-value');
buttonValue.textContent = `The current sketch area is ${squaresPerSide}x${squaresPerSide} squares.`;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;


function setBackgroundColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
}

function createGridCells(squaresPerSide) {
    const numOfSquares = (squaresPerSide * squaresPerSide);
    const widthOrHeight = `${(GRIDSIDE / squaresPerSide)}px`;

    for (i = 0; i < numOfSquares; i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", setBackgroundColor);
    }
}

createGridCells(squaresPerSide);

const button = document.querySelector("#button");

button.addEventListener("click", () => {
    let squaresPerSide = prompt('Choose the number of squares in a side!');
    if (squaresPerSide <= 1 || squaresPerSide > 100) {
        alert('The number must be between 1 and 100, to prevent crashes!');
    } else {
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    };
    createGridCells(squaresPerSide);
    
    buttonValue.textContent = `The current sketch area is ${squaresPerSide}x${squaresPerSide} squares.`;
    }
});
