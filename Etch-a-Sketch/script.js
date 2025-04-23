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
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => {
        row.remove();
    });
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.remove();
    });
    
    const gridContainer = document.getElementById("gridContainer");
    for (let i = 0; i < gridSize; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < gridSize; j++){
            const box = document.createElement("div");
            box.classList.add("box");
            // box.id = "row: " + (i + 1) + " col: " + (j + 1);
            row.appendChild(box);
            box.addEventListener("mouseover", () => {
                box.style.backgroundColor = "red";
            })
            // console.log("row: " + (i + 1) + " col: " + (j + 1) + ": Div Created");   
        }
        gridContainer.appendChild(row)
    }
}

function setup(){
    var initialGridSize = 16;
    updateGridSize(initialGridSize);
}

setup();


