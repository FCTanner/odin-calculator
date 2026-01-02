function add(x,y){
    return(x + y);
}

function substract(x,y){
    return(x - y);
}

function multiply(x,y){
    return(x * y);
}

function divide(x,y){
    return(x / y);
}

function operate(operator, x, y){
    switch(operator){
        case '+':
            return add(x,y);
        case '-':
            return substract(x,y);
        case '*':
            return multiply(x,y);
        case '÷':
            return divide(x,y);
        default:
            return null;
    }
}

const numBtns = document.querySelectorAll('.btn-number:not(#btn-sign):not(#btn-decimal)');
const operatorBtns = document.querySelectorAll('.btn-operator:not(#btn-equal)');
const calculatorScreen = document.querySelector('.calculator-screen');
const btnEqual = document.querySelector('#btn-equal');


let num1;
let num2;
let operator;

numBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        console.log(e.target.textContent);
        calculatorScreen.value += e.target.textContent;
    });
});

operatorBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        num1 = parseFloat(calculatorScreen.value); 
        calculatorScreen.value = '';
        operator = e.target.textContent;
    });
});

btnEqual.addEventListener('click', () => {
    num2 = parseFloat(calculatorScreen.value);
    console.log(calculatorScreen.value);
    console.log(`num1: ${num1}, num2: ${num2}, operator: ${operator}`);
    const result = operate(operator, num1, num2);
    console.log(`result: ${result}`);
    calculatorScreen.value = result;    
});