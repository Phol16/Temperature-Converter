"use strict";
const CF = document.getElementById('CF');
const FC = document.getElementById('FC');
const input = document.getElementById('input');
const result = document.getElementById('resultHere');
const error = document.getElementById('error');
const convert = document.getElementById('convert');
let selected = "celcius" /* select.celcius */;
const selectedButton = (a) => {
    if (a === 'celcius') {
        CF.style.backgroundColor = 'gray';
        CF.style.color = 'white';
        FC.style.backgroundColor = 'white';
        FC.style.color = 'black';
        selected = a;
    }
    if (a === 'farenheit') {
        CF.style.backgroundColor = 'white';
        CF.style.color = 'black';
        FC.style.backgroundColor = 'gray';
        FC.style.color = 'white';
        selected = a;
    }
};
const handleConvert = (a) => {
    const value = parseInt(input.value);
    result.textContent = '';
    error.style.display = 'none';
    error.textContent = '';
    if (isNaN(value)) {
        error.style.display = 'block';
        error.textContent = 'Invalid Input!';
        throw new Error('inputted value is not a number');
    }
    if (a === 'celcius') {
        result.textContent = `${value * (9 / 5) + 32} F°`;
    }
    else {
        result.textContent = `${(value - 32) * (5 / 9)} C°`;
    }
};
CF.addEventListener('click', () => {
    error.style.display = 'none';
    selectedButton("celcius" /* select.celcius */);
});
FC.addEventListener('click', () => {
    error.style.display = 'none';
    selectedButton("farenheit" /* select.farenheit */);
});
convert.addEventListener('click', () => {
    handleConvert(selected);
});
