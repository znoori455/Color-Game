let numSquares = 6;
let colors = [];
let pickedColor;

let h1 = document.querySelector("h1");
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");

let resetButton = document.querySelector("#reset");
let modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode button event listeners
    setUpModeButtons();

    //square event listeners
    setUpSquares();

    reset();
}


function setUpModeButtons() {
    for(let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            //figure out how many squares to show
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            // if(this.textContent === "Easy") {
            //     numSquares = 3;
            // } else {
            //     numSquares = 6;
            // }

            //pick new colors
            //pick a new pickedColor
            //update page to reflect changes
            reset();
        });
    }
}

function setUpSquares() {
    for(let i = 0; i < squares.length; i++) {

        squares[i].addEventListener("click", function() {
            //grab color of clicked square
            let clickedColor = this.style.backgroundColor;
    
            //compare color to picked color
            if(clickedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                resetButton.textContent = "Play Again?";
                changeColors(clickedColor);
                h1.style.backgroundColor = pickedColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        });
    }
}

function reset() {
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change  colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor;
    //change colors of squares on page
    for(let i = 0; i < squares.length; i++) {

        if(colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
        
    }
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function() {
    reset();
});


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