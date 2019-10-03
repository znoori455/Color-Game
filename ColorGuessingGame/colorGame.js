let colors = generateRandomColors(6);

let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor

for(let i = 0; i < squares.length; i++) {
    //add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    //add click listeners to squares
    squares[i].addEventListener("click", function() {
        //grab color of clicked square
        let clickedColor = this.style.backgroundColor;

        //compare color to picked color
        if(clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            h1.style.backgroundColor = pickedColor;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again";
        }
    });
}

function changeColors(color) {
    //loop through all squares
    for(let i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    //make an array
    let arr = [];

    //repeat num times
    for(let i = 0; i<num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}

function randomColor() {
    //pick a "red" from 0-255
    let r = Math.floor(Math.random() * 256);
    //pick a "green" from 0-255
    let g = Math.floor(Math.random() * 256);
    //pick a "blue" from 0-255
    let b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b +")";
}