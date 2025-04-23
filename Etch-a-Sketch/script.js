const inputElement = document.getElementById("gridInput");
const updateGridBtn = document.getElementById("updateGridBtn");

updateGridBtn.addEventListener('click', () => handleClick());

function handleClick(){
    do{
        var gridSize = parseInt(window.prompt("How many boxes do you want per side of this grid.\nEnter a number from 16 to 100:"));
        console.log("inputed gridSize: " + gridSize);
    }while(isNaN(gridSize) || gridSize > 100 || gridSize < 16);
    
    updateGridSize(gridSize);
}

function updateGridSize(gridSize){
    for (let i = 0; i < gridSize; i++){
        
    }
}

