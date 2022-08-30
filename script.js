// Global variable(s)
let previousOperand = '';
let currentOperand = '';
let operator = undefined;

// Math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Event functions
function clear() {
    previousOperand = '';
    currentOperand = '';
    operator = undefined;
}

function deleteNum() {
    currentOperand = currentOperand.toString().slice(0, -1);
}

function appendNumber(number) {
    // Prevent putting more than one decimal '.'
    if (number === '.' && currentOperand.includes('.')) {
        return;
    }
    currentOperand = currentOperand.toString() + number.toString();
}

function getOperator() {

}

function updateDisplay() {
    currentOperandText.innerText = currentOperand;
}
 
// Take operator to make a calculation
function operate() {
    let result;
    if (operator === '+') {
        result = add(numOne, numTwo);
    }
    else if (operator === '-') {
        result = subtract(numOne, numTwo);
    }
    else if (operator === '×') {
        result = multiply(numOne, numTwo);
    }
    else if (operator === '÷') {
        result = divide(numOne, numTwo);
    }
}

// Buttons
// Number buttons
const numButtons = document.querySelectorAll('.number-button');
numButtons.forEach(button => button.addEventListener('click', (e) => {
    appendNumber(e.target.innerText);
    updateDisplay();
}));

// Option buttons
const deleteButton = document.querySelector('.delete-button');

// Clear button
const clearButton = document.querySelector('.clear-button');

// Operator buttons
const operatorButtons = document.querySelectorAll('.operator-button');

// Enter (calculate) button
const enterButton = document.querySelector('.enter-button');

// previous operand
const previousOperandText = document.querySelector('.previous-operand');

// current operand
const currentOperandText = document.querySelector('.current-operand');