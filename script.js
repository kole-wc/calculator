// Global variables
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
    currentOperandText.classList.remove("current-operand-error")
}

function deleteNum() {
    currentOperand = currentOperand.toString().slice(0, -1);
}

function appendNumber(number) {
    // Prevent putting more than one decimal '.'
    if (currentOperand === "Error! You can't divide by 0. Please press clear to start again.") {
        return;
    }
    else if (number === '.' && currentOperand.includes('.')) {
        return;
    }
    currentOperand = currentOperand.toString() + number.toString();
}

function getOperator(operatorInputText) {
    // Prevent getting operator if previous = "Error!" (previousOperand = currentOperand)
    if (previousOperand === "Error! You can't divide by 0. Please press clear to start again.") {
        return;
    }
    // Prevent getting operator without an operand
    else if (currentOperand === '') {
        return;
    }
    // If previous operand exists, call operate() to continue calculation
    else if (previousOperand !== '') {
        operate();
    }
    
    operator = operatorInputText;
    previousOperand = currentOperand;
    currentOperand = '';
}

function updateDisplay() {
    // Current
    if (isNaN(currentOperand)) {
        currentOperandText.innerText = currentOperand;
    }
    else {
        currentOperandText.innerText = formatDisplayNumber(currentOperand);
    }
    
    // Previous
    if (isNaN(previousOperand)) {
        currentOperandText.innerText = "Error! You can't divide by 0. Please press clear to start again.";
    }
    else if (operator != null) {
        previousOperandText.innerText = `${formatDisplayNumber(previousOperand)} ${operator}`;
    }
    else {
        previousOperandText.innerText = '';
    }
}
 
function operate() {
    let result;
    const prev = parseFloat(previousOperand);
    const curr = parseFloat(currentOperand);
    
    if (operator === '÷' && curr === 0) {
        currentOperand = "Error! You can't divide by 0. Please press clear to start again.";
        currentOperandText.classList.add("current-operand-error")
        return;
    }
    else if (isNaN(prev) || isNaN(curr)) {
        return;
    }
    else if (operator === '+') {
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
    currentOperand = result;
    operator = undefined;
    previousOperand = '';
}

// Format functions
// Number formatting
function formatDisplayNumber(number) {
    const numberRound = Math.round(number * 10000000000) / 10000000000;
    const stringNumber = numberRound.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];
    let integerDisplay;
    if (isNaN(integerDigits)) {
        integerDisplay = '';
    }
    else {
        integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
    }
    if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`;
    }
    else {
        return integerDisplay;
    }
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

// Displays
// Previous operand
const previousOperandText = document.querySelector('.previous-operand');
// Current operand
const currentOperandText = document.querySelector('.current-operand');

// Keyboard support
document.addEventListener('keydown', (e) => {
    // Numbers and decimal
    const numButtonsArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '.'];
    numButtonsArr.forEach(button => {
        if (button === e.key) {
            appendNumber(e.key);
            updateDisplay();
        }
    });
    // Operations
    const opButtonsArr = ['+', '-', '*', '/'];
    opButtonsArr.forEach(button => {
        if (button === e.key) {
            if (e.key === '*') {
                getOperator('×');
            }
            else if (e.key === '/') {
                getOperator('÷');
            }
            else {
                getOperator(e.key);
            }
            updateDisplay();
        }
    });
    // Delete
    if (e.key === 'Backspace') {
        deleteNum();
        updateDisplay();
    }
    // Clear
    if (e.key === 'Delete') {
        clear();
        updateDisplay();
    }
    // Enter (Equal)
    if (e.key === 'Enter') {
        operate();
        updateDisplay();
    }
});