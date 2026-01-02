function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(operator, x, y) {
  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return substract(x, y);
    case "*":
      return multiply(x, y);
    case "÷":
      return divide(x, y);
    default:
      return null;
  }
}

const numBtns = document.querySelectorAll(".btn-number");
const operatorBtns = document.querySelectorAll(".btn-operator:not(#btn-equal)");
const calculatorScreen = document.querySelector(".calculator-screen");
const btnEqual = document.querySelector("#btn-equal");
const btnClear = document.querySelector("#btn-clear");

let num1;
let num2;
let operator;
let result;

function readCurrentInput() {
  return parseFloat(calculatorScreen.value);
}

function evaluate() {
  result = operate(operator, num1, num2);
  showResult();
  resetState();
}

function resetState() {
  num1 = null;
  num2 = null;
  operator = null;
}

function showResult() {
  calculatorScreen.value = result;
}

function resetResult() {
  result = null;
  calculatorScreen.value = result;
}

numBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (result !== null) {
      resetResult();
    }
    calculatorScreen.value += e.target.textContent;
  });
});

operatorBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // evaluate if num1 and operator are already set
    if (num1 != null) {
      num2 = readCurrentInput();
      evaluate();
    } else {
      num1 = readCurrentInput();
      operator = e.target.textContent;
      resetResult();
    }
  });
});

btnEqual.addEventListener("click", () => {
  num2 = readCurrentInput();
  evaluate();
});

btnClear.addEventListener("click", () => {
  resetState();
  resetResult();
});
