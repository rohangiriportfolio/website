function limit(){
	var u_limit = document.getElementById('u_limit').value;
    var l_limit = document.getElementById('l_limit').value;
	var u_dest_number = Math.round(Math.random() * u_limit);
	var l_dest_number = Math.round(Math.random() * l_limit);
	dest_number = (u_dest_number + l_dest_number);
	alert("Guessing Limit Locked!");
}
function guess_match(){
	guess = document.getElementById('guess').value;
	if(dest_number==guess){
		document.getElementById('display').value="You have guessed it in " + times + " times :)";
		times=1;
	}
	else if(dest_number>guess){
		document.getElementById('display').value="Guess higher!";
		times++;
	}
	else if(dest_number<guess){
		document.getElementById('display').value="Guess lower!";
		times++;
	}
}
var dest_number;
var guess;
var times=1;