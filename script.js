const GRIDSIDE = 600;

const button = document.querySelector("#button");

let squaresPerSide = 16;


const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = sketchArea.style.height = `${GRIDSIDE}px`;


function setBackgroundColor() {
    this.style.backgroundColor = "black";
}

function createGridCells(squaresPerSide) {
    const numOfSquares = (squaresPerSide * squaresPerSide);
    const widthOrHeight = `${GRIDSIDE / squaresPerSide}px`;

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
    let userNum = prompt('Choose the number of squares in a side!');
    while (sketchArea.firstChild) {
        sketchArea.removeChild(sketchArea.firstChild);
    };
    createGridCells(userNum);
});
