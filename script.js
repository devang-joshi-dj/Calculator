'use strict';

// following are the variables to be used throughout the application code
const calculatorScreen = document.querySelector('.calculatorScreen');
const clearBtn = document.querySelector('.allClear');
const deleteChar = document.querySelector('.delete');
const operators = document.querySelectorAll('.operator');
const numbers = document.querySelectorAll(".number");
const decimal = document.querySelector(".decimal");
const equalSign = document.querySelector('.equalSign');

let prevInput = '0';
let calculationOperator = '';
let currentInput = '0';

window.onload = () => {
    // following task to be executed when page is loaded
    calculatorScreen.innerHTML = 0;
}

const updateScreen = (number) => {
    // function to update Calculator Screen with any specified value
    calculatorScreen.innerHTML = number;
}

const inputNumber = (number) => {
    // function to update current currentInput variable with the value we wants to write by clicking or typing which will be used by updateScreen function to update Calculator Screen
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
}

const inputOperator = (operator) => {
    // function to perform operations on values according to the desired operator and update Calculator Screen

    equalSign.click();
    prevInput = currentInput;
    calculationOperator = operator;
    currentInput = '';

}

const calculate = () => {
    // function to perform operations on values according to the desired operator and return answer to currentInput variable
    let result = 0;
    switch (calculationOperator) {
        case '+':
            result = Number(prevInput) + Number(currentInput);
            break;
        case '-':
            result = Number(prevInput) - Number(currentInput);
            break;
        case '*':
            result = Number(prevInput) * Number(currentInput);
            break;
        case '/':
            result = Number(prevInput) / Number(currentInput);
            break;
        case '%':
            result = Number(prevInput) % Number(currentInput);
            break;
        default:
            return
    }
    currentInput = result;
    calculationOperator = '';
}

const clearAll = () => {
    // function to clear everything from Screen and variable values
    prevInput = '0';
    calculationOperator = '';
    currentInput = '0';
}

deleteChar.addEventListener('click', () => {
    // function to delete last character from Calculator Screen
    currentInput = calculatorScreen.innerHTML.slice(0, -1);
    updateScreen(currentInput);
});

clearBtn.addEventListener('click', () => {
    // function to to execute clearAll function and update Calculator Screen with default value
    clearAll();
    updateScreen(currentInput);
});

numbers.forEach((number) => {
    // function to perform inputNumber function on every click on number buttons
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentInput);
    })
});

operators.forEach((operator) => {
    // function to perform inputOperator function on every click on operator buttons
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
});

equalSign.addEventListener('click', () => {
    // function to perform calculations when clicked on equal sign button
    if (currentInput !== typeof currentInput) {
        calculate();
        updateScreen(currentInput);
    }
});

decimal.addEventListener('click', () => {
    // function to append Calculator Screen with decimal point if it doesn't exist already when clicked on decimal button
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateScreen(currentInput);
    }
});

document.addEventListener("keydown", function (event) {
    // function to perform clickable operations on certain buttons when some specified key is pressed
    event.preventDefault();
    let key = event.key;

    if (event.which === 32) {
        return false;
    }
    if (key === "Enter") {
        equalSign.click();
    }
    if (key === "Delete") {
        clearBtn.click();
    }
    if (event.which === 8) {
        deleteChar.click();
    }
    if (key >= 0 && key <= 9) {
        inputNumber(key);
        updateScreen(currentInput);
    }
    if (key === "/") {
        inputOperator(key);
    }
    if (key === "*") {
        inputOperator(key);
    }
    if (key === "-") {
        inputOperator(key);
    }
    if (key === "+") {
        inputOperator(key);
    }
    if (key === "%") {
        inputOperator(key);
    }
    if (key === ".") {
        decimal.click();
    }
});