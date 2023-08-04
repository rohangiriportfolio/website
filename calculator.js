function Result() {
    let display = document.getElementById("result_panel");
    let expression = display.value;
    let result;
    try {
        result = math.evaluate(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
    display.value = result;
}
function Back() {
    var ev = document.getElementById('result_panel');
    ev.value = ev.value.slice(0,-1);
}
function Sin(){
    var Sin = document.getElementById('result_panel');
    Sin.value = Math.sin(Sin.value* (3.14159265359/180));
}
function Cos(){
    var Cos = document.getElementById('result_panel');
    Cos.value = Math.cos(Cos.value* (3.14159265359/180));
}
function Tan(){
    var Tan = document.getElementById('result_panel');
    Tan.value = Math.tan(Tan.value* (3.14159265359/180));  
}