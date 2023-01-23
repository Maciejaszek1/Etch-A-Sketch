
for(let i = 0; i < 256; i++){
    const container = document.querySelector('.container');
    const gridElement = document.createElement('div');

    gridElement.classList.add('gridElement');

    gridElement.textContent = i;   
    container.appendChild(gridElement);
}

