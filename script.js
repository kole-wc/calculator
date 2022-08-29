// Global node(s)
const display = document.querySelector('.display');

// Global variable(s)
let numText = 0;
let numOne = 0;
let numTwo = 0;
let operator = 0;

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

// Display function(s)
function displayNum(e) {
    numText = display.textContent += e.target.textContent;
}

// Delete individual number (works like backspace)
function deleteNum() {
    numText = display.textContent.slice(0, -1);
    display.textContent = numText;
}

// Clear the number of the display
function clearNum() {
    numText = "";
    display.textContent = numText;
}

// Get the first number and operator to be used in operate()
// and clear the display
function getNumAndOperator(e) {
    numOne = Number(display.textContent);
    operator = e.target.textContent;
    clearNum();
}

// Take operator to make a calculation
function operate() {
    numTwo = display.textContent;
    console.log(numOne);
    console.log(numTwo);
    console.log(operator);
    if (operator === '+') {
        display.textContent = add(numOne, numTwo);
    }
    else if (operator === '-') {
        display.textContent = subtract(numOne, numTwo);
    }
    else if (operator === '×') {
        display.textContent = multiply(numOne, numTwo);
    }
    else if (operator === '÷') {
        display.textContent = divide(numOne, numTwo);
    }
}

// Buttons
// Number buttons
const numButtons = document.querySelectorAll('.number-button');
numButtons.forEach(numButton => numButton.addEventListener('click', displayNum));
// Option buttons
const deleteButton = document.querySelector('.delete-button');
deleteButton.addEventListener('click', deleteNum);
// Clear button
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', clearNum);
// Operator buttons
const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', getNumAndOperator))
// Enter (calculate) button
const enterButton = document.querySelector('.enter-button');
enterButton.addEventListener('click', operate);


