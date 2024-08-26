// lets begin by storing a reference to the parent div / container.

const container = document.querySelector(".main-container");
const childDiv = document.createElement("div");

childDivCreator();


//i'm going to write a function that loops n times to create the square grid we need

function childDivCreator (squareLength = 16) {
    for (let i=0; i < squareLength; i++) {
        const childDiv = document.createElement("div");
        childDiv.classList.add("child-div");
        container.appendChild(childDiv);
    }
}