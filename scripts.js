function changeSquares(){
    gridNum = prompt("How many columns?");
    container.style.setProperty('grid-template-columns', 'repeat('+  gridNum +', 1fr)');

    rmGrid();
    createGrid();
}

function rmGrid() {
    const elements = document.querySelectorAll('.gridElement');
    elements.forEach(element => element.remove());
}

function createGrid(){
    gridNum *= gridNum;
    
    for(let i = 0; i < gridNum; i++){
        const gridElement = document.createElement('div');

        gridElement.classList.add('gridElement');

        gridElement.textContent = i;   
        container.appendChild(gridElement);
    }

    const elements = document.querySelectorAll('.gridElement');
    elements.forEach(element => element.addEventListener('mouseover',function(){
        element.style.backgroundColor = "yellow";
}));
}

let gridNum = 16;

const container = document.querySelector('.container');
const button = document.getElementById('gridNum');
button.addEventListener('click',changeSquares);

createGrid();
