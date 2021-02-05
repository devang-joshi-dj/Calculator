const calculatorScreen = document.querySelector('.calculatorScreen');

window.document.addEventListener("mousedown", function (event) {
    event.preventDefault();
});

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

const numbers = document.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentInput);
    })
})

let prevInput = '0';
let calculationOperator = '';
let currentInput = '0';
const inputNumber = (number) => {
    if (currentInput === '0') {
        currentInput = number;
    } else {
        currentInput += number;
    }
}

const operators = document.querySelectorAll('.operator');
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

const inputOperator = (operator) => {
    if (calculationOperator == '') {
        prevInput = currentInput;
        calculationOperator = operator;
        currentInput = '0';
    } else {
        calculationOperator = operator;
    }
}

const equalSign = document.querySelector('.equalSign');
equalSign.addEventListener('click', () => {
    if (currentInput !== typeof currentInput) {
        calculate();
        updateScreen(currentInput);
    }
})

const calculate = () => {
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
    currentInput = result.toString();
    calculationOperator = '';
}

const clearAll = () => {
    prevInput = '0';
    calculationOperator = '';
    currentInput = '0';
}

const clearBtn = document.querySelector('.allClear');

clearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentInput);
})

const deleteChar = document.querySelector('.delete');

deleteChar.addEventListener('click', () => {
    currentInput = calculatorScreen.value.slice(0, -1);
    updateScreen(currentInput);
})

const decimal = document.querySelector(".decimal");

decimal.addEventListener('click', () => {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateScreen(currentInput);
    }
})

document.addEventListener("keydown", function (event) {
    event.preventDefault();
    var key = event.key;

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