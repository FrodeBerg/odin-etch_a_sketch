document.addEventListener("DOMContentLoaded", () => {
    createDivs();
});

function createDivs(){

    let amount = +document.getElementById("amount").value;
    if (amount > 100) amount = 100;
    document.getElementById("amount").value = amount;
    
    let gridContainer = document.getElementById("gridContainer");
    gridContainer.innerHTML = "";

    for (let i = 0; i < amount; i++){
        let gridRow = document.createElement("div");
        gridRow.classList.add("gridRow");
        for (let j = 0; j < amount; j++){
            let gridElement = document.createElement("div");
            gridElement.classList.add("gridElement");
            gridElement.setAttribute("onmouseover", "colorSquare(this)")
            gridRow.append(gridElement);
        }
        gridContainer.append(gridRow);
    }
}

function colorSquare(element){
    let currentColor = document.getElementById("color").value;
    element.style.backgroundColor = currentColor;
}