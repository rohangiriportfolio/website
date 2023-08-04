var times = 0;
var turnXorO;
let square = [0, 0, 0, 0, 0, 0, 0, 0, 0];//x=1,o=2
var firstTime = sessionStorage.getItem("first_time");
if(!firstTime) {
    // first time loaded!
    sessionStorage.setItem("first_time","1");
    sessionStorage.setItem('scoreX','0');
    sessionStorage.setItem('scoreY','0');
    sessionStorage.setItem('turn_X_or_O', 0);
}

var xx = sessionStorage.getItem('scoreX');
document.getElementById('turn2').innerHTML = "X : " + xx;
var yy = sessionStorage.getItem('scoreY');
document.getElementById('turn1').innerHTML = "O : " + yy;
turnXorO = sessionStorage.getItem('turn_X_or_O');
if(turnXorO==0){
    document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
    document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
}
else if(turnXorO==1){
    document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
    document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
}
function _reset(){  // Used to reset score
    // sessionStorage.removeItem('scoreX');
    // sessionStorage.removeItem('scoreY');
    sessionStorage.setItem("scoreX",'0');
    sessionStorage.setItem("scoreY",'0');
    sessionStorage.setItem('turn_X_or_O', 0);
    location.reload();
}
// All display functions are fired on clicking the button
function display1() { 
    turnXorO = sessionStorage.getItem('turn_X_or_O');
    if(turnXorO==0){
        if (times % 2 == 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn1').value = 'X';
            square[0] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn1').value = 'O';
            square[0] = 1;
        }
    }
    else if(turnXorO==1){
        if (times % 2 == 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn1').value = 'O';
            square[0] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn1').value = 'X';
            square[0] = 1;
        }
    }
    times++;
    document.getElementById('btn1').disabled = true;
    if (check() == 1) {
        
    }
    else if (times == 9) {
        setTimeout(draw, 1000);
    }
}
function display2() {
    turnXorO = sessionStorage.getItem('turn_X_or_O');
    if(turnXorO==0){
        if (times % 2 == 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn2').value = 'X';
            square[1] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn2').value = 'O';
            square[1] = 1;
        }
    }
    else if(turnXorO==1){
        if (times % 2 == 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn2').value = 'O';
            square[1] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn2').value = 'X';
            square[1] = 1;
        }
    }
    
    times++;
        document.getElementById('btn2').disabled = true;
    if (check() == 1) {

    }
    else if (times == 9) {
        setTimeout(draw, 1000);
    }
}
function display3() {
    turnXorO = sessionStorage.getItem('turn_X_or_O');
    if(turnXorO==0){
        if (times % 2 == 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn3').value = 'X';
            square[2] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn3').value = 'O';
            square[2] = 1;
        }
    }
    else if(turnXorO==1){
        if (times % 2 == 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn3').value = 'O';
            square[2] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn3').value = 'X';
            square[2] = 1;
        }
    }
    times++;
        document.getElementById('btn3').disabled = true;
    if (check() == 1) {

    }
    else if (times == 9) {
        setTimeout(draw, 1000);
    }
}
function display4() {
    turnXorO = sessionStorage.getItem('turn_X_or_O');
    if(turnXorO==0){
        if (times % 2 == 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn4').value = 'X';
            square[3] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn4').value = 'O';
            square[3] = 1;
        }
    }
    else if(turnXorO==1){
        if (times % 2 == 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn4').value = 'O';
            square[3] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn4').value = 'X';
            square[3] = 1;
        }
    }
    times++;
        document.getElementById('btn4').disabled = true;
    if (check() == 1) {

    }
    else if (times == 9) {
        setTimeout(draw, 1000);
    }
}
function display5() {
    turnXorO = sessionStorage.getItem('turn_X_or_O');
    if(turnXorO==0){
        if (times % 2 == 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn5').value = 'X';
            square[4] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn5').value = 'O';
            square[4] = 1;
        }
    }
    else if(turnXorO==1){
        if (times % 2 == 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn5').value = 'O';
            square[4] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn5').value = 'X';
            square[4] = 1;
        }
    }
    times++;
        document.getElementById('btn5').disabled = true;
    if (check() == 1) {

    }
    else if (times == 9) {
        setTimeout(draw, 1000);
    }
}
function display6() {
    turnXorO = sessionStorage.getItem('turn_X_or_O');
    if(turnXorO==0){
        if (times % 2 == 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn6').value = 'X';
            square[5] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn6').value = 'O';
            square[5] = 1;
        }
    }
    else if(turnXorO==1){
        if (times % 2 == 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn6').value = 'O';
            square[5] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn6').value = 'X';
            square[5] = 1;
        }
    }
    times++;
        document.getElementById('btn6').disabled = true;
    if (check() == 1) {

    }
    else if (times == 9) {
        setTimeout(draw, 1000);
    }
}
function display7() {
    turnXorO = sessionStorage.getItem('turn_X_or_O');
    if(turnXorO==0){
        if (times % 2 == 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn7').value = 'X';
            square[6] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn7').value = 'O';
            square[6] = 1;
        }
    }
    else if(turnXorO==1){
        if (times % 2 == 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn7').value = 'O';
            square[6] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn7').value = 'X';
            square[6] = 1;
        }
    }
    times++;
        document.getElementById('btn7').disabled = true;
    if (check() == 1) {

    }
    else if (times == 9) {
        setTimeout(draw, 1000);
    }
}
function display8() {
    turnXorO = sessionStorage.getItem('turn_X_or_O');
    if(turnXorO==0){
        if (times % 2 == 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn8').value = 'X';
            square[7] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn8').value = 'O';
            square[7] = 1;
        }
    }
    else if(turnXorO==1){
        if (times % 2 == 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn8').value = 'O';
            square[7] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn8').value = 'X';
            square[7] = 1;
        }
    }
    times++;
        document.getElementById('btn8').disabled = true;
    if (check() == 1) {

    }
    else if (times == 9) {
        setTimeout(draw, 1000);
    }
}
function display9() {
    turnXorO = sessionStorage.getItem('turn_X_or_O');
    if(turnXorO==0){
        if (times % 2 == 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn9').value = 'X';
            square[8] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn9').value = 'O';
            square[8] = 1;
        }
    }
    else if(turnXorO==1){
        if (times % 2 == 0) {
            document.getElementById('turn2').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn9').value = 'O';
            square[8] = 2;
        }
        else if (times % 2 != 0) {
            document.getElementById('turn1').style = 'border-bottom: 2px solid cyan';
            document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
            document.getElementById('btn9').value = 'X';
            square[8] = 1;
        }
    }
    times++;
        document.getElementById('btn9').disabled = true;
    if (check() == 1) {

    }
    else if (times == 9) {
        setTimeout(draw, 1000);
    }
}
function check() {  //Check winning
    if ((square[0] == square[1]) && (square[1] == square[2]) && ((square[0] == 1) || (square[0] == 2))) {
        document.getElementById('btn1').style.animation = "top_left_to_top_middle 1s linear";
        document.getElementById('btn3').style.animation = "top_right_to_top_middle 1s linear";
        screen_lock();
        turnXorO = sessionStorage.getItem('turn_X_or_O');
        if(turnXorO==0){
            sessionStorage.setItem('turn_X_or_O', '1');
            if (times % 2 != 0) {
                document.getElementById('turn2').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                xx = sessionStorage.getItem('scoreX');
                xx++;
                sessionStorage.setItem('scoreX', xx);
                document.getElementById('turn2').innerHTML = "X : " + xx;
                yy = sessionStorage.getItem('scoreY');
                document.getElementById('turn1').innerHTML = "O : " + yy;
                setTimeout(winner_X, 1000);
            }
            else {
                document.getElementById('turn1').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                yy = sessionStorage.getItem('scoreY');
                yy++;
                sessionStorage.setItem('scoreY', yy);
                document.getElementById('turn1').innerHTML = "O : " + yy;
                xx = sessionStorage.getItem('scoreX');
                document.getElementById('turn2').innerHTML = "X : " + xx;
                setTimeout(winner_O, 1000);
            }
        }
        else if(turnXorO==1){
            sessionStorage.setItem('turn_X_or_O', '0');
            if (times % 2 == 0) {
                document.getElementById('turn2').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                xx = sessionStorage.getItem('scoreX');
                xx++;
                sessionStorage.setItem('scoreX', xx);
                document.getElementById('turn2').innerHTML = "X : " + xx;
                yy = sessionStorage.getItem('scoreY');
                document.getElementById('turn1').innerHTML = "O : " + yy;
                setTimeout(winner_X, 1000);
            }
            else {
                document.getElementById('turn1').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                yy = sessionStorage.getItem('scoreY');
                yy++;
                sessionStorage.setItem('scoreY', yy);
                document.getElementById('turn1').innerHTML = "O : " + yy;
                xx = sessionStorage.getItem('scoreX');
                document.getElementById('turn2').innerHTML = "X : " + xx;
                setTimeout(winner_O, 1000);
            }
        }
        
        // turnXorO = sessionStorage.getItem('turn_X_or_O');
        // if(turnXorO==0){
        //     sessionStorage.setItem('turn_X_or_O', '1');
        // }
        // else if(turnXorO==1){
        //     sessionStorage.setItem('turn_X_or_O', '0');
        // }
        return 1;
    }
    else if ((square[3] == square[4]) && (square[4] == square[5]) && ((square[3] == 1) || (square[3] == 2))) {
        document.getElementById('btn4').style.animation = "left_middle_to_middle 1s linear";
        document.getElementById('btn6').style.animation = "right_middle_to_middle 1s linear";
        screen_lock();
        turnXorO = sessionStorage.getItem('turn_X_or_O');
        if(turnXorO==0){
            sessionStorage.setItem('turn_X_or_O', '1');
            if (times % 2 != 0) {
                document.getElementById('turn2').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                xx = sessionStorage.getItem('scoreX');
                xx++;
                sessionStorage.setItem('scoreX', xx);
                document.getElementById('turn2').innerHTML = "X : " + xx;
                yy = sessionStorage.getItem('scoreY');
                document.getElementById('turn1').innerHTML = "O : " + yy;
                setTimeout(winner_X, 1000);
            }
            else {
                document.getElementById('turn1').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                yy = sessionStorage.getItem('scoreY');
                yy++;
                sessionStorage.setItem('scoreY', yy);
                document.getElementById('turn1').innerHTML = "O : " + yy;
                xx = sessionStorage.getItem('scoreX');
                document.getElementById('turn2').innerHTML = "X : " + xx;
                setTimeout(winner_O, 1000);
            }
        }
        else if(turnXorO==1){
            sessionStorage.setItem('turn_X_or_O', '0');
            if (times % 2 == 0) {
                document.getElementById('turn2').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                xx = sessionStorage.getItem('scoreX');
                xx++;
                sessionStorage.setItem('scoreX', xx);
                document.getElementById('turn2').innerHTML = "X : " + xx;
                yy = sessionStorage.getItem('scoreY');
                document.getElementById('turn1').innerHTML = "O : " + yy;
                setTimeout(winner_X, 1000);
            }
            else {
                document.getElementById('turn1').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                yy = sessionStorage.getItem('scoreY');
                yy++;
                sessionStorage.setItem('scoreY', yy);
                document.getElementById('turn1').innerHTML = "O : " + yy;
                xx = sessionStorage.getItem('scoreX');
                document.getElementById('turn2').innerHTML = "X : " + xx;
                setTimeout(winner_O, 1000);
            }
        }
        return 1;
    }
    else if ((square[6] == square[7]) && (square[7] == square[8]) && ((square[6] == 1) || (square[6] == 2))) {
        document.getElementById('btn7').style.animation = "bottom_left_to_bottom_middle 1s linear";
        document.getElementById('btn9').style.animation = "bottom_right_to_bottom_middle 1s linear";
        screen_lock();
        turnXorO = sessionStorage.getItem('turn_X_or_O');
        if(turnXorO==0){
            sessionStorage.setItem('turn_X_or_O', '1');
            if (times % 2 != 0) {
                document.getElementById('turn2').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                xx = sessionStorage.getItem('scoreX');
                xx++;
                sessionStorage.setItem('scoreX', xx);
                document.getElementById('turn2').innerHTML = "X : " + xx;
                yy = sessionStorage.getItem('scoreY');
                document.getElementById('turn1').innerHTML = "O : " + yy;
                setTimeout(winner_X, 1000);
            }
            else {
                document.getElementById('turn1').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                yy = sessionStorage.getItem('scoreY');
                yy++;
                sessionStorage.setItem('scoreY', yy);
                document.getElementById('turn1').innerHTML = "O : " + yy;
                xx = sessionStorage.getItem('scoreX');
                document.getElementById('turn2').innerHTML = "X : " + xx;
                setTimeout(winner_O, 1000);
            }
        }
        else if(turnXorO==1){
            sessionStorage.setItem('turn_X_or_O', '0');
            if (times % 2 == 0) {
                document.getElementById('turn2').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                xx = sessionStorage.getItem('scoreX');
                xx++;
                sessionStorage.setItem('scoreX', xx);
                document.getElementById('turn2').innerHTML = "X : " + xx;
                yy = sessionStorage.getItem('scoreY');
                document.getElementById('turn1').innerHTML = "O : " + yy;
                setTimeout(winner_X, 1000);
            }
            else {
                document.getElementById('turn1').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                yy = sessionStorage.getItem('scoreY');
                yy++;
                sessionStorage.setItem('scoreY', yy);
                document.getElementById('turn1').innerHTML = "O : " + yy;
                xx = sessionStorage.getItem('scoreX');
                document.getElementById('turn2').innerHTML = "X : " + xx;
                setTimeout(winner_O, 1000);
            }
        }
        return 1;
    }
    else if ((square[0] == square[3]) && (square[3] == square[6]) && ((square[0] == 1) || (square[0] == 2))) {
        document.getElementById('btn1').style.animation = "top_left_to_left_middle 1s linear";
        document.getElementById('btn7').style.animation = "bottom_left_to_left_middle 1s linear";
        screen_lock();
        
        turnXorO = sessionStorage.getItem('turn_X_or_O');
        if(turnXorO==0){
            sessionStorage.setItem('turn_X_or_O', '1');
            if (times % 2 != 0) {
                document.getElementById('turn2').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                xx = sessionStorage.getItem('scoreX');
                xx++;
                sessionStorage.setItem('scoreX', xx);
                document.getElementById('turn2').innerHTML = "X : " + xx;
                yy = sessionStorage.getItem('scoreY');
                document.getElementById('turn1').innerHTML = "O : " + yy;
                setTimeout(winner_X, 1000);
            }
            else {
                document.getElementById('turn1').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                yy = sessionStorage.getItem('scoreY');
                yy++;
                sessionStorage.setItem('scoreY', yy);
                document.getElementById('turn1').innerHTML = "O : " + yy;
                xx = sessionStorage.getItem('scoreX');
                document.getElementById('turn2').innerHTML = "X : " + xx;
                setTimeout(winner_O, 1000);
            }
        }
        else if(turnXorO==1){
            sessionStorage.setItem('turn_X_or_O', '0');
            if (times % 2 == 0) {
                document.getElementById('turn2').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                xx = sessionStorage.getItem('scoreX');
                xx++;
                sessionStorage.setItem('scoreX', xx);
                document.getElementById('turn2').innerHTML = "X : " + xx;
                yy = sessionStorage.getItem('scoreY');
                document.getElementById('turn1').innerHTML = "O : " + yy;
                setTimeout(winner_X, 1000);
            }
            else {
                document.getElementById('turn1').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                yy = sessionStorage.getItem('scoreY');
                yy++;
                sessionStorage.setItem('scoreY', yy);
                document.getElementById('turn1').innerHTML = "O : " + yy;
                xx = sessionStorage.getItem('scoreX');
                document.getElementById('turn2').innerHTML = "X : " + xx;
                setTimeout(winner_O, 1000);
            }
        }
        return 1;
    }
    else if ((square[1] == square[4]) && (square[4] == square[7]) && ((square[1] == 1) || (square[1] == 2))) {
        document.getElementById('btn2').style.animation = "top_middle_to_middle 1s linear";
        document.getElementById('btn8').style.animation = "bottom_middle_to_middle 1s linear";
        screen_lock();
        
        turnXorO = sessionStorage.getItem('turn_X_or_O');
        if(turnXorO==0){
            sessionStorage.setItem('turn_X_or_O', '1');
            if (times % 2 != 0) {
                document.getElementById('turn2').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                xx = sessionStorage.getItem('scoreX');
                xx++;
                sessionStorage.setItem('scoreX', xx);
                document.getElementById('turn2').innerHTML = "X : " + xx;
                yy = sessionStorage.getItem('scoreY');
                document.getElementById('turn1').innerHTML = "O : " + yy;
                setTimeout(winner_X, 1000);
            }
            else {
                document.getElementById('turn1').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                yy = sessionStorage.getItem('scoreY');
                yy++;
                sessionStorage.setItem('scoreY', yy);
                document.getElementById('turn1').innerHTML = "O : " + yy;
                xx = sessionStorage.getItem('scoreX');
                document.getElementById('turn2').innerHTML = "X : " + xx;
                setTimeout(winner_O, 1000);
            }
        }
        else if(turnXorO==1){
            sessionStorage.setItem('turn_X_or_O', '0');
            if (times % 2 == 0) {
                document.getElementById('turn2').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                xx = sessionStorage.getItem('scoreX');
                xx++;
                sessionStorage.setItem('scoreX', xx);
                document.getElementById('turn2').innerHTML = "X : " + xx;
                yy = sessionStorage.getItem('scoreY');
                document.getElementById('turn1').innerHTML = "O : " + yy;
                setTimeout(winner_X, 1000);
            }
            else {
                document.getElementById('turn1').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                yy = sessionStorage.getItem('scoreY');
                yy++;
                sessionStorage.setItem('scoreY', yy);
                document.getElementById('turn1').innerHTML = "O : " + yy;
                xx = sessionStorage.getItem('scoreX');
                document.getElementById('turn2').innerHTML = "X : " + xx;
                setTimeout(winner_O, 1000);
            }
        }
        return 1;
    }
    else if ((square[2] == square[5]) && (square[5] == square[8]) && ((square[2] == 1) || (square[2] == 2))) {
        document.getElementById('btn3').style.animation = "top_right_to_right_middle 1s linear";
        document.getElementById('btn9').style.animation = "bottom_right_to_right_middle 1s linear";
        screen_lock();
        
        turnXorO = sessionStorage.getItem('turn_X_or_O');
        if(turnXorO==0){
            sessionStorage.setItem('turn_X_or_O', '1');
            if (times % 2 != 0) {
                document.getElementById('turn2').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                xx = sessionStorage.getItem('scoreX');
                xx++;
                sessionStorage.setItem('scoreX', xx);
                document.getElementById('turn2').innerHTML = "X : " + xx;
                yy = sessionStorage.getItem('scoreY');
                document.getElementById('turn1').innerHTML = "O : " + yy;
                setTimeout(winner_X, 1000);
            }
            else {
                document.getElementById('turn1').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                yy = sessionStorage.getItem('scoreY');
                yy++;
                sessionStorage.setItem('scoreY', yy);
                document.getElementById('turn1').innerHTML = "O : " + yy;
                xx = sessionStorage.getItem('scoreX');
                document.getElementById('turn2').innerHTML = "X : " + xx;
                setTimeout(winner_O, 1000);
            }
        }
        else if(turnXorO==1){
            sessionStorage.setItem('turn_X_or_O', '0');
            if (times % 2 == 0) {
                document.getElementById('turn2').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                xx = sessionStorage.getItem('scoreX');
                xx++;
                sessionStorage.setItem('scoreX', xx);
                document.getElementById('turn2').innerHTML = "X : " + xx;
                yy = sessionStorage.getItem('scoreY');
                document.getElementById('turn1').innerHTML = "O : " + yy;
                setTimeout(winner_X, 1000);
            }
            else {
                document.getElementById('turn1').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                yy = sessionStorage.getItem('scoreY');
                yy++;
                sessionStorage.setItem('scoreY', yy);
                document.getElementById('turn1').innerHTML = "O : " + yy;
                xx = sessionStorage.getItem('scoreX');
                document.getElementById('turn2').innerHTML = "X : " + xx;
                setTimeout(winner_O, 1000);
            }
        }
        return 1;
    }
    else if ((square[0] == square[4]) && (square[4] == square[8]) && ((square[0] == 1) || (square[0] == 2))) {
        document.getElementById('btn1').style.animation = "top_left_to_middle 1s linear";
        document.getElementById('btn9').style.animation = "bottom_right_to_middle 1s linear";
        screen_lock();
        
        turnXorO = sessionStorage.getItem('turn_X_or_O');
        if(turnXorO==0){
            sessionStorage.setItem('turn_X_or_O', '1');
            if (times % 2 != 0) {
                document.getElementById('turn2').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                xx = sessionStorage.getItem('scoreX');
                xx++;
                sessionStorage.setItem('scoreX', xx);
                document.getElementById('turn2').innerHTML = "X : " + xx;
                yy = sessionStorage.getItem('scoreY');
                document.getElementById('turn1').innerHTML = "O : " + yy;
                setTimeout(winner_X, 1000);
            }
            else {
                document.getElementById('turn1').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                yy = sessionStorage.getItem('scoreY');
                yy++;
                sessionStorage.setItem('scoreY', yy);
                document.getElementById('turn1').innerHTML = "O : " + yy;
                xx = sessionStorage.getItem('scoreX');
                document.getElementById('turn2').innerHTML = "X : " + xx;
                setTimeout(winner_O, 1000);
            }
        }
        else if(turnXorO==1){
            sessionStorage.setItem('turn_X_or_O', '0');
            if (times % 2 == 0) {
                document.getElementById('turn2').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                xx = sessionStorage.getItem('scoreX');
                xx++;
                sessionStorage.setItem('scoreX', xx);
                document.getElementById('turn2').innerHTML = "X : " + xx;
                yy = sessionStorage.getItem('scoreY');
                document.getElementById('turn1').innerHTML = "O : " + yy;
                setTimeout(winner_X, 1000);
            }
            else {
                document.getElementById('turn1').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                yy = sessionStorage.getItem('scoreY');
                yy++;
                sessionStorage.setItem('scoreY', yy);
                document.getElementById('turn1').innerHTML = "O : " + yy;
                xx = sessionStorage.getItem('scoreX');
                document.getElementById('turn2').innerHTML = "X : " + xx;
                setTimeout(winner_O, 1000);
            }
        }
        return 1;
    }
    else if ((square[2] == square[4]) && (square[4] == square[6]) && ((square[2] == 1) || (square[2] == 2))) {
        document.getElementById('btn3').style.animation = "top_right_to_middle 1s linear";
        document.getElementById('btn7').style.animation = "bottom_left_to_middle 1s linear";
        screen_lock();
        
        turnXorO = sessionStorage.getItem('turn_X_or_O');
        if(turnXorO==0){
            sessionStorage.setItem('turn_X_or_O', '1');
            if (times % 2 != 0) {
                document.getElementById('turn2').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                xx = sessionStorage.getItem('scoreX');
                xx++;
                sessionStorage.setItem('scoreX', xx);
                document.getElementById('turn2').innerHTML = "X : " + xx;
                yy = sessionStorage.getItem('scoreY');
                document.getElementById('turn1').innerHTML = "O : " + yy;
                setTimeout(winner_X, 1000);
            }
            else {
                document.getElementById('turn1').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                yy = sessionStorage.getItem('scoreY');
                yy++;
                sessionStorage.setItem('scoreY', yy);
                document.getElementById('turn1').innerHTML = "O : " + yy;
                xx = sessionStorage.getItem('scoreX');
                document.getElementById('turn2').innerHTML = "X : " + xx;
                setTimeout(winner_O, 1000);
            }
        }
        else if(turnXorO==1){
            sessionStorage.setItem('turn_X_or_O', '0');
            if (times % 2 == 0) {
                document.getElementById('turn2').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn1').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                xx = sessionStorage.getItem('scoreX');
                xx++;
                sessionStorage.setItem('scoreX', xx);
                document.getElementById('turn2').innerHTML = "X : " + xx;
                yy = sessionStorage.getItem('scoreY');
                document.getElementById('turn1').innerHTML = "O : " + yy;
                setTimeout(winner_X, 1000);
            }
            else {
                document.getElementById('turn1').style = 'border-bottom: 2px solid cyan'
                document.getElementById('turn2').style = 'border-bottom: 2px solid rgb(151, 151, 151)';
                yy = sessionStorage.getItem('scoreY');
                yy++;
                sessionStorage.setItem('scoreY', yy);
                document.getElementById('turn1').innerHTML = "O : " + yy;
                xx = sessionStorage.getItem('scoreX');
                document.getElementById('turn2').innerHTML = "X : " + xx;
                setTimeout(winner_O, 1000);
            }
        }
        return 1;
    }
}
// Function used to show image after winning
function winner_X() {  
    document.getElementById('tic_tac_toe').innerHTML = "";
    document.getElementById('tic_tac_toe').innerHTML = "<img src='winner.svg'>"+"X Wins!";
    document.getElementById('tic_tac_toe').style = "font-size:50px;color:white;";
}
function winner_O() {
    document.getElementById('tic_tac_toe').innerHTML = "";
    document.getElementById('tic_tac_toe').innerHTML = "<img src='winner.svg'>"+"O Wins!";
    document.getElementById('tic_tac_toe').style = "font-size:50px;color:white;";
}
function draw() {
    document.getElementById('tic_tac_toe').innerHTML = "";
    document.getElementById('tic_tac_toe').innerHTML = "<img src='draw.png'>"+"Draw:) Try Again!";
    document.getElementById('tic_tac_toe').style = "font-size:23px;color:white;";
}
// Used to lock the screen after 
function screen_lock() {
    document.getElementById('btn1').disabled = true;
    document.getElementById('btn2').disabled = true;
    document.getElementById('btn3').disabled = true;
    document.getElementById('btn4').disabled = true;
    document.getElementById('btn5').disabled = true;
    document.getElementById('btn6').disabled = true;
    document.getElementById('btn7').disabled = true;
    document.getElementById('btn8').disabled = true;
    document.getElementById('btn9').disabled = true;
}