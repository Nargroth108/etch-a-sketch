const GRIDSIDE = 600;

const button = document.querySelector("#button");

let squaresPerSide = 16;


const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;


function setBackgroundColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = "#" + randomColor;
}

function createGridCells(squaresPerSide) {
    const numOfSquares = (squaresPerSide * squaresPerSide);
    const widthOrHeight = `${(GRIDSIDE / squaresPerSide) - 2}px`;

    for (i = 0; i < numOfSquares; i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = widthOrHeight;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", setBackgroundColor);
    }
}

createGridCells(16);

button.addEventListener("click", () => {
    let squaresPerSide = prompt('Choose the number of squares in a side!');
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    };
    createGridCells(squaresPerSide);
});
