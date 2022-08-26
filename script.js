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

console.log(operate('add', 23, 33));