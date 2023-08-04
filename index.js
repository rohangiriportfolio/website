var typed = new Typed("#typing",{
    strings: ["Rohan Giri.","A B.Tech. Student.", "A Developer."],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

let scrollContainer = document.querySelector('#creation');
let back_btn = document.getElementById('l_btn');
let next_btn = document.getElementById('r_btn');

scrollContainer.addEventListener('wheel', function(e) {
    e.preventDefault(); // prevent default scrolling
    // let deltaY = -Math.sign(e.deltaX);
    scrollContainer.scrollLeft += e.deltaY;
    scrollContainer.style.scrollBehavior = "auto";
});

next_btn.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft += 390;
})

back_btn.addEventListener('click', ()=>{
    scrollContainer.style.scrollBehavior = "smooth";
    scrollContainer.scrollLeft -= 390;
})

function very_bad(){
    document.getElementById('rate').value = "Very Bad";
}
function bad(){
    document.getElementById('rate').value = "Bad";
}
function donot_know(){
    document.getElementById('rate').value = "Don't Know";
}
function good(){
    document.getElementById('rate').value = "Good";
}
function very_good(){
    document.getElementById('rate').value = "Very Good";
}


$('#comments').on('input', function () {
    this.style.height = 'auto';
    this.style.height =
        (this.scrollHeight) + 'px';
});

var n_err = document.getElementById('_name_err');
var e_err = document.getElementById('_email_err');
var a_err = document.getElementById('_address_err');
var c_err = document.getElementById('comments_err');
var s_err = document.getElementById('submit_err');

function validateName(){
    var _name = document.getElementById('_name').value;
    if (_name.length == 0){
        n_err.innerHTML = 'Name is required!';
        return false;
    }
    if(!_name.match(/^[A-Za-z]*\s{1}[A-Za-z\s]+$/)){
        n_err.innerHTML = '*Enter your full name!';
        return false;
    }
    n_err.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validateEmail(){
    var _email = document.getElementById('_email').value;
    if (_email.length == 0){
        e_err.innerHTML = 'Email ID is required!';
        return false;
    }
    if(!_email.match(/^[\sA-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z\s]{2,}$/)){
        e_err.innerHTML = '*Enter your valid email ID!';
        return false;
    }
    e_err.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validateAddress(){
    var _address = document.getElementById('_address').value;
    var required = 15;
    var left = required - _address.length;
    if(left > 0){
        a_err.innerHTML = "*" + left + " more character(s) required!";
        return false;
    }
    a_err.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validateComments(){
    var _comments = document.getElementById('comments').value;
    var _required = 30;
    var _left = _required - _comments.length;
    if(_left > 0){
        c_err.innerHTML = "*" + _left + " more character(s) required!";
        return false;
    }
    c_err.innerHTML = '<i class="fa fa-check-circle"></i>';
    return true;
}

function validateForm(){
    if(validateName()==false || validateEmail()==false || validateAddress()==false || validateComments()==false){
        s_err.style.display = 'flex';
        s_err.style.justifyContent= 'center';
        s_err.innerHTML = 'Please fill all the fields!';
        setTimeout(function(){
            s_err.style.display = 'none';
        }, 3000);
        return false;
    }
    else{
        s_err.style.display = 'none';
    }
}

document.addEventListener('invalid', (function () {
    return function (e) {
      e.preventDefault();
    };
})(), true);
