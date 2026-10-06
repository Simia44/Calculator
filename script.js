const display = document.getElementById('display')

let currentNumber = '';
let previousNumber = '';
let operator = '';


function updateDisplay(value) {
    display.value = value
}


function appendNumber(num) {
    currentNumber += num
    updateDisplay(currentNumber)
}


function setOperator(op) {
    operator = op;
    previousNumber = currentNumber;
    currentNumber = '';
}


function calculate() {
    let prev = parseFloat(previousNumber);
    let curr = parseFloat(currentNumber);
    let result;

    if (operator === '+') result = prev + curr;
    else if (operator === '-') result = prev - curr;
    else if (operator === '*') result = prev * curr;
    else if (operator === '/') result = prev / curr;

    currentNumber = result;
    operator = '';
    updateDisplay(result);
}

function clearDisplay() {
    currentNumber = '';
    previousNumber = '';
    operator = '';
    updateDisplay('');
}