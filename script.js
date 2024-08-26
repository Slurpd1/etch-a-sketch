// lets begin by storing a reference to the parent div / container.

const container = document.querySelector(".main-container");
const childDiv = document.createElement("div");

childDivCreator();


//i'm going to write a function that loops n times to create the square grid we need

function childDivCreator (squareLength = 16){

    const squareSize = 100 / squareLength;

    for (let i=0; i < (squareLength * squareLength); i++) {
        const childDiv = document.createElement("div");
        childDiv.classList.add("child-div");

        // say the user gives us 89 squares on each side. we have to make sure this fits perfectly inside of
        // the 1000px area that we have. so we need to actually manipulate the width and height according
        // to the number of elements given.

        // for instance if we have 4 elements then we do 100/4 to get 25%
        // so the calculation is 100/squareLength

        childDiv.style.width = `${squareSize}%`;
        childDiv.style.height = `${squareSize}%`;

        container.appendChild(childDiv);
    }
    attachEventListeners();
}

function attachEventListeners() {
    const squares = document.querySelectorAll(".child-div");
    squares.forEach(square => {
        // Store the original color in a data attribute
        const ogColor = getComputedStyle(square).backgroundColor;
        square.dataset.ogColor = ogColor;

        square.addEventListener("mouseover", (event) => {
            event.target.style.backgroundColor = "black";
        });

        square.addEventListener("mouseout", (event) => {
            event.target.style.backgroundColor = event.target.dataset.ogColor;
        });
    });
}