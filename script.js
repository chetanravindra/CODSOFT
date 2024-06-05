// script.js
document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '0';
    let operator = null;
    let previousInput = null;

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.id;

            if (value === 'clear') {
                currentInput = '0';
                operator = null;
                previousInput = null;
                display.textContent = currentInput;
            } else if (value === 'equal') {
                if (operator && previousInput !== null) {
                    currentInput = String(calculate(parseFloat(previousInput), parseFloat(currentInput), operator));
                    operator = null;
                    previousInput = null;
                    display.textContent = currentInput;
                }
            } else if (['add', 'subtract', 'multiply', 'divide'].includes(value)) {
                if (operator && previousInput !== null) {
                    currentInput = String(calculate(parseFloat(previousInput), parseFloat(currentInput), operator));
                }
                operator = value;
                previousInput = currentInput;
                currentInput = '0';
            } else {
                if (currentInput === '0') {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
                display.textContent = currentInput;
            }
        });
    });

    function calculate(a, b, operator) {
        switch (operator) {
            case 'add': return a + b;
            case 'subtract': return a - b;
            case 'multiply': return a * b;
            case 'divide': return a / b;
            default: return b;
        }
    }
});
