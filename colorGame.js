var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

/**
 * Init the Game
 */
function init() {
    setUpModeButtons();
    setUpSquares();
    reset();
}

/**
 * Set up the mode Buttons
 */
function setUpModeButtons() {
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove('selected');
            modeButtons[1].classList.remove('selected');
            this.classList.add('selected');

            numSquares = this.textContent === 'Fácil' ? 3 : 6;

            reset();
        });
    }
}

/**
 * Set Up the squares and colors
 */
function setUpSquares() {
    for (var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function () {
            // grab color of clicked squere
            var clickedColor = this.style.background;
            // compare color to pickedColor
            if (clickedColor === pickedColor) {
                messageDisplay.textContent = "Correcto!";
                resetButton.textContent = "Otra vez?";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
            }
            else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Inténtalo nuevamente";
            }
        });
    }
}

/**
 * reset the game
 */
function reset() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from the array
    pickedColor = pickColor();
    // change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;

    resetButton.textContent = "Colores Nuevos";
    messageDisplay.textContent = "";

    // change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        }
        else {
            squares[i].style.display = 'none';
        }
    }
    h1.style.background = 'steelblue';
}

resetButton.addEventListener("click", function() {
    reset();
});

/**
 * change all square's colors to the correct one
 * @param  string color
 */
function changeColors(color) {
    // loop through all squares
    for (var i = 0; i < squares .length; i++) {
        // change each color to mach given color
        squares[i].style.background = color;
    }

}

/**
 * Pick a random color from the Colors Array
 * @return string rgb color
 */
function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

/**
 * Generate random colores
 * @param  {int} num how many colors randomize
 * @return {array} array of colors.
 */
function generateRandomColors(num) {
    // make an array
    var arr = [];
    // repeat num times
    for (var i = 0; i < num; i++) {
        // get num random colors to array
        arr.push(randomColor());
    }
    // return the array
    return arr;
}

/**
 * pick a random color
 * @return {string} rgb color
 */
function randomColor() {
    // pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
