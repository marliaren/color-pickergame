var noOfSquares=6;

//pallet
var arr= [];

//color picked for target
var picked;

//to get all the squares div
var squares = document.getElementsByClassName("square");
 
//to get the RGB display
var targetColor = document.getElementById("targetColor");

//message that can be empty, try again or correct
var message = document.getElementById("message");

//heading
var head = document.querySelector("h1");

//reset button
var reset = document.getElementById("newColor");

//call init() to set game
init();

function init() {
    //generate random coloured palette
    arr= generateRandomColor(noOfSquares);
    //get target color randomly from the array size
    picked = arr[randomPickedColorIndex()];
    //updating target RGB display
    targetColor.textContent = picked;

    for(var i=0;i<squares.length;i++) {
        //setting square's color one by one to palette color
        squares[i].style.backgroundColor=arr[i]

        //adding eventListener to all square
        for(var i=0;i<squares.length;i++) {
            //setting square's color one by one to palette color
            squares[i].style.backgroundColor=arr[i];
            //adding eventListener to all squares
            squares[i].addEventListener("click",function(){
                if(picked===this.style.backgroundColor) {
                    message.textContent="You got it right!";
                    message.style.color="green";
                    //when correct, set everything to the target color and set newcolor to playagain
                    changeColor(this.style.backgroundColor);
                    reset.textContent="Play Again?";
                }
                else {
                    message.textContent="Nope. Try Again.";
                    message.style.color="red";
                    //to hide the wrong square, we will set it to background color
                    this.style.backgroundColor ="#232323";
                    //this.style.backgroundColor ="#545454";
                }
            });
        }
    }
}

    //reset button
    reset.addEventListener("click", resetIn);

    //get random color from existing palette
    function randomPickedColorIndex() {
        return Math.floor(Math.random()*arr.length);
    }

    //get random pallete of colors
    function generateRandomColor(limit) {
        var color=[];
        for(var i=0;i<limit;i++) 
            color.push(rgbGenerator()); //add the new random number generated to each array (RGB) for each square(?)
        return color;
    }
    //generate single RGB 
    function rgbGenerator() { //get any random number from the Math random function. multiply to 256 to get number from 0 until 255 (256 since the RBG values ranges from 0 to 255. 256 exclusive. the Math.random gives a 0 to 0.99 value. then use Math.floor to get the value of the nearest integer/ whole number)
        var r = Math.floor(Math.random()*256);
        var g = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        return "rgb("+r+", "+g+", "+b+")" ;
    }

    // traverse to the color array and check if the colors match
    //when correct, change everything to correct color
    function changeColor(color) {
        for(var i=0;i<squares.length;i++)
        squares[i].style.backgroundColor = color;
        head.style.backgroundColor = color;
    }

    //set things when player try to reset
    function resetIn(){
        arr = generateRandomColor(noOfSquares); //new 6 random numbers
        picked = arr[randomPickedColorIndex()]; //picked will store the random colors generated
        targetColor.textContent = picked;
        message.textContent = ""; //remove message 
        head.style.backgroundColor = "steelblue"; //get back the head color to the default
        for(var i=0;i<squares.length;i++)
        squares[i].style.backgroundColor=arr[i]; //change colors of the squares based on the random color generated
    }