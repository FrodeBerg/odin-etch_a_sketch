document.addEventListener("DOMContentLoaded", () => {
    createDivs(prompt("Size?"));
});

function createDivs(amount){

    let gridContainer = document.getElementById("gridContainer");
    gridContainer.innerHTML = "";

    for (let i = 0; i < amount; i++){
        let gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        for (let j = 0; j < amount; j++){
            let gridElement = document.createElement("div");
            gridElement.classList.add("gridElement");
            gridRow.append(gridElement);
        }
        gridContainer.append(gridRow);
    }
}