// Intialization of global variables

var blockSize = 15;
var total_row = 25;
var total_col = 25;
var board;
var context;
var snakeX = blockSize * (12.5);
var snakeY = blockSize * (12.5);
var speedX = 0;
var speedY = 0;
var snakeBody = [];
var foodX;
var foodY;
var gameOver = false;
var score = 0;
var high = localStorage.getItem('high_score');
document.getElementById('highscore').innerHTML = "High Score: " + high;
let move = new Audio();
move.src = "snake_move.mp3";
let eat = new Audio();
eat.src = "snake_eat.mp3";
let dead = new Audio();
dead.src = "snake_dead.wav";

// Window first load function

window.onload = function load() {
    board = document.getElementById("field");
    board.height = total_row * blockSize;
    board.width = total_col * blockSize;

    context = board.getContext("2d");
    checkPlaceFood();
    document.addEventListener("keydown", changeDirection);
    setInterval(update, 400);
}

// Updation function

function update() {
    if (gameOver) {  // Game over condition
        speedX = 0;
        speedY = 0;
        return;
    }
    var grad = context.createLinearGradient(0, 375, 375, 0);  // Print the board
    grad.addColorStop(0, 'rgb(38, 161, 0)');
    grad.addColorStop(1, 'rgb(182, 248, 0)');
    context.fillStyle = grad;
    context.fillRect(0, 0, board.width, board.height);
    context.fillStyle = "rgb(255, 100, 100)";  // Print the food
    context.beginPath();
    context.arc(foodX, foodY, blockSize / 2, 0, 2 * Math.PI);
    context.fill();
    context.lineWidth = 1.3;
    context.strokestyle = 'black';
    context.stroke();
    // context.fillRect(foodX, foodY, blockSize, blockSize);
    // context.strokestyle = 'darkgreen';
    // context.strokeRect(foodX, foodY, blockSize, blockSize);
    if (snakeX == foodX && snakeY == foodY) {  // Snake eat the food
        eat.play();
        snakeBody.push([foodX, foodY]);
        checkPlaceFood();  // Place the food

        score++;
        // localStorage.removeItem("high_score"); //To restore the high score to zero
        // var high=0;
        high = localStorage.getItem('high_score');
        if (score > high) {
            localStorage.setItem('high_score', score);
            high++;
        }
        document.getElementById('highscore').innerHTML = "High Score: " + high;
        document.getElementById('score').innerHTML = "Score: " + score;
    }
    for (let i = snakeBody.length - 1; i > 0; i--) {  // Move the snake body forward
        snakeBody[i] = snakeBody[i - 1];
    }
    if (snakeBody.length) {
        snakeBody[0] = [snakeX, snakeY];
    }
    context.fillStyle = "rgb(204, 255, 63)";  // Print the snake's head
    snakeX += speedX * blockSize;
    snakeY += speedY * blockSize;
    context.beginPath();
    context.arc(snakeX, snakeY, blockSize / 2, 0, 2 * Math.PI);
    context.fill();
    context.lineWidth = 1.3;
    context.strokestyle = 'black';
    context.stroke();



    if (speedY == -1 && speedX == 0) {
        context.fillStyle = "black";  // Print the snake's eyes in up movement
        context.beginPath();
        context.arc(snakeX + (blockSize / 5), snakeY - (blockSize / 5), 2, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "black";  // Print the snake's eyes in up movement
        context.beginPath();
        context.arc(snakeX - (blockSize / 5), snakeY - (blockSize / 5), 2, 0, 2 * Math.PI);
        context.fill();

        context.strokestyle = 'darkgreen';
        context.strokeRect(snakeX-1, snakeY-(blockSize/2), 2, 13.5-blockSize);
    }
    else if (speedY == 1 && speedX == 0) {
        context.fillStyle = "black";  // Print the snake's eyes in down movement
        context.beginPath();
        context.arc(snakeX - (blockSize / 5), snakeY + (blockSize / 5), 2, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "black";  // Print the snake's eyes in down movement
        context.beginPath();
        context.arc(snakeX + (blockSize / 5), snakeY + (blockSize / 5), 2, 0, 2 * Math.PI);
        context.fill();

        context.strokestyle = 'darkgreen';
        context.strokeRect(snakeX-1, snakeY+(blockSize/2), 2, blockSize-13.5);
    }
    else if (speedX == -1 && speedY == 0) {
        context.fillStyle = "black";  // Print the snake's eyes in left movement
        context.beginPath();
        context.arc(snakeX - (blockSize / 5), snakeY + (blockSize / 5), 2, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "black";  // Print the snake's eyes in left movement
        context.beginPath();
        context.arc(snakeX - (blockSize / 5), snakeY - (blockSize / 5), 2, 0, 2 * Math.PI);
        context.fill();

        context.strokestyle = 'darkgreen';
        context.strokeRect(snakeX-(blockSize/2), snakeY-1,  13.5-blockSize, 2);
    }
    else if (speedX == 1 && speedY == 0) {
        context.fillStyle = "black";  // Print the snake's eyes in right movement
        context.beginPath();
        context.arc(snakeX + (blockSize / 5), snakeY - (blockSize / 5), 2, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "black";  // Print the snake's eyes in right movement
        context.beginPath();
        context.arc(snakeX + (blockSize / 5), snakeY + (blockSize / 5), 2, 0, 2 * Math.PI);
        context.fill();

        context.strokestyle = 'darkgreen';
        context.strokeRect(snakeX+(blockSize/2), snakeY-1,  blockSize-13.5, 2);
    }
    else {
        context.fillStyle = "black";  // Print the snake's eyes in up movement
        context.beginPath();
        context.arc(snakeX + (blockSize / 5), snakeY - (blockSize / 5), 2, 0, 2 * Math.PI);
        context.fill();

        context.fillStyle = "black";  // Print the snake's eyes in up movement
        context.beginPath();
        context.arc(snakeX - (blockSize / 5), snakeY - (blockSize / 5), 2, 0, 2 * Math.PI);
        context.fill();

        context.strokestyle = 'darkgreen';
        context.strokeRect(snakeX-1, snakeY-(blockSize/2), 2, 13.5-blockSize);
    }


    // context.strokestyle = 'darkgreen';
    // context.strokeRect(snakeX, snakeY, blockSize, blockSize);
    for (let i = 0; i < snakeBody.length; i++) {  // Print the snake's body
        context.fillStyle = "rgb(232, 255, 167)";
        context.beginPath();
        context.arc(snakeBody[i][0], snakeBody[i][1], blockSize / 2, 0, 2 * Math.PI);
        context.fill();
        context.lineWidth = 1.3;
        context.strokestyle = 'black';
        context.stroke();
        // context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
        // context.strokestyle = 'rgba(255,0,0,0.0)';
        // context.strokeRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
    }
    // Check the snake hit to wall or body itself
    if (snakeX < 0 || snakeX >= total_col * blockSize || snakeY < 0 || snakeY >= total_row * blockSize) {
        gameOver = true;
        dead.play();
        move.pause();
    }
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeX == snakeBody[i][0] && snakeY == snakeBody[i][1]) {
            gameOver = true;
            dead.play();
            move.pause();
        }
    }
}

// Key control functions

function up() {
    if (speedY != 1) {
        speedX = 0;
        speedY = -1;
        move.play();

    }
}

function down() {
    if (speedY != -1) {
        speedX = 0;
        speedY = 1;
        move.play();

    }
}

function left() {
    if (speedX != 1) {
        speedX = -1;
        speedY = 0;
        move.play();

    }
}

function right() {
    if (speedX != -1) {
        speedX = 1;
        speedY = 0;
        move.play();

    }
}

// Move function

function changeDirection(e) {
    if (e.code == "ArrowUp" && speedY != 1) {
        speedX = 0;
        speedY = -1;
        move.play();

    }
    else if (e.code == "ArrowDown" && speedY != -1) {
        speedX = 0;
        speedY = 1;
        move.play();

    }
    else if (e.code == "ArrowLeft" && speedX != 1) {
        speedX = -1;
        speedY = 0;
        move.play();

    }
    else if (e.code == "ArrowRight" && speedX != -1) {
        speedX = 1;
        speedY = 0;
        move.play();

    }

}

// Placefood function to place the food randomly in board

function placeFood() {
    foodX = (Math.floor(Math.random() * 26) * blockSize) - 7.5;
    foodY = (Math.floor(Math.random() * 26) * blockSize) - 7.5;
    // alert(foodX);
    // alert(foodY);
}

// Function to check food is placed outside board or under the snake body

function checkPlaceFood() {
    placeFood();
    for (let i = 0; i < snakeBody.length; i++) {
        if (foodX != snakeBody[i][0] && foodY != snakeBody[i][1]) {
        }
        else if (foodX == snakeBody[i][0] && foodY == snakeBody[i][1]) {
            checkPlaceFood();
        }
    }
    if (foodX < 0 || foodY < 0 || foodX > 375 || foodY > 375) {
        checkPlaceFood();
    }
}