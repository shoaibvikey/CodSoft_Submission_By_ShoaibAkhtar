let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let previousInput = '';

function appendNumber(number) {
    if (currentInput.length < 12) {
        currentInput += number;
        display.innerText = currentInput;
    }
}

function appendOperator(op) {
    if (currentInput !== '') {
        if (previousInput !== '') {
            calculate();
        }
        operator = op;
        previousInput = currentInput;
        currentInput = '';
    }
}

function calculate() {
    if (previousInput !== '' && currentInput !== '') {
        let result;
        const prev = parseFloat(previousInput);
        const curr = parseFloat(currentInput);

        switch (operator) {
            case '+':
                result = prev + curr;
                break;
            case '-':
                result = prev - curr;
                break;
            case '*':
                result = prev * curr;
                break;
            case '/':
                result = prev / curr;
                break;
            default:
                return;
        }
        display.innerText = result.toString().slice(0, 12); // Limit display to 12 characters
        previousInput = result.toString();
        currentInput = '';
        operator = '';
    }
}

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.innerText = '0';
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}
