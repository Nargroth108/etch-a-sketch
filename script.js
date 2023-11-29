let container = document.querySelector('.container');

for (i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.classList.add('div');
    div.style.cssText = 'box-sizing: border-box; width: 20px; height: 20px; background-color: black;'
    container.appendChild(div);
};

