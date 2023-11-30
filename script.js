let container = document.querySelector('.container');

let numOf = prompt('choose a number');

for (i = 0; i < numOf*numOf; i++){
    const div = document.createElement('div');
    div.classList.add('square');
    div.style.cssText = 'aspect-ratio: 1; background-color: black;'
    container.appendChild(div);
};

