
for(let i = 0; i < 256; i++){
    const container = document.querySelector('.container');
    const gridElement = document.createElement('div');

    gridElement.classList.add('gridElement');
    gridElement.setAttribute("id", i);

    gridElement.textContent = i;   
    container.appendChild(gridElement);
}

const elements = document.querySelectorAll('.gridElement');
elements.forEach(element => element.addEventListener('mouseover',function(){
    element.style.backgroundColor = "yellow";
}));