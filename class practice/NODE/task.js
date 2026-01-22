//design a calculator module which can do basic arithmetic operations like addition, subtraction, multiplication and division.

function add(a,b){
    return "this is add function: " + (a+b);
}

function subtract(a,b){
    return "this is subtract function: " + (a-b);
}
function multiply(a,b){
    return "this is multiply function: " + (a*b);
}
function divide(a,b){
    return "this is divide function: " + (a/b);
}
module.exports={add,subtract,multiply,divide};
