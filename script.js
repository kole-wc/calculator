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

function getOperator(operatorInputText) {
    // Prevent getting operator without an operand
    if (currentOperand === '') {
        return;
    }
    // If previous operand exists, call operate() to continue calculation
    if (previousOperand !== '') {
        operate();
    }
    operator = operatorInputText;
    previousOperand = currentOperand;
    currentOperand = '';
}

function updateDisplay() {
    // Current
    currentOperandText.innerText = currentOperand;

    // Previous
    if (operator != null) {
        previousOperandText.innerText = `${previousOperand} ${operator}`;
    }
    else {
        previousOperandText.innerText = '';
    }
}
 
function operate() {
    let result;
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);
    if (isNaN(prev) || isNaN(curr)) {
        return;
    }
    else {
        if (operator === '+') {
            result = add(prev, curr);
        }
        else if (operator === '-') {
            result = subtract(prev, curr);
        }
        else if (operator === '×') {
            result = multiply(prev, curr);
        }
        else if (operator === '÷') {
            result = divide(prev, curr);
        }
    }
    currentOperand = result;
    operator = undefined;
    previousOperand = '';
}

// Buttons
// Number buttons
const numButtons = document.querySelectorAll('.number-button');
numButtons.forEach(button => button.addEventListener('click', (e) => {
    appendNumber(e.target.innerText);
    updateDisplay();
}));

// Operator buttons
const operatorButtons = document.querySelectorAll('.operator-button');
operatorButtons.forEach(button => button.addEventListener('click', (e) => {
    getOperator(e.target.innerText);
    updateDisplay();
}));

// Delete buttons
const deleteButton = document.querySelector('.delete-button');
deleteButton.addEventListener('click', () => {
    deleteNum();
    updateDisplay();
});

// Clear button
const clearButton = document.querySelector('.clear-button');
clearButton.addEventListener('click', () => {
    clear();
    updateDisplay();
});

// Enter (calculate) button
const enterButton = document.querySelector('.enter-button');
enterButton.addEventListener('click', () => {
    operate();
    updateDisplay();
});

// Previous operand
const previousOperandText = document.querySelector('.previous-operand');

// Current operand
const currentOperandText = document.querySelector('.current-operand');