// Global node(s)
const display = document.querySelector('.display');

// Global variable(s)
let num = 0;

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

// Take operator to make a calculation
function operate(operator, numOne, numTwo) {
    if (operator === 'add') {
        return add(numOne, numTwo);
    }
    else if (operator === 'subtract') {
        return subtract(numOne, numTwo);
    }
    else if (operator === 'multiply') {
        return multiply(numOne, numTwo);
    }
    else if (operator === 'divide') {
        return divide(numOne, numTwo);
    }
}

// Buttons functions
// Number buttons
const numButtons = document.querySelectorAll('.number-button');
numButtons.forEach(numButton => numButton.addEventListener('click', displayNum));
// Option buttons
const deleteButton = document.querySelector('.delete-button')
deleteButton.addEventListener('click', deleteNum);

const clearButton = document.querySelector('.clear-button')
clearButton.addEventListener('click', clearNum);

// Display function(s)
function displayNum(e) {
    num = display.textContent += e.target.textContent;
}

function deleteNum() {
    num = display.textContent.slice(0, -1);
    display.textContent = num;
}

function clearNum() {
    num = "";
    display.textContent = num;
}


