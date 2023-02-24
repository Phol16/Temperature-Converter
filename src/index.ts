const CF = <HTMLButtonElement>document.getElementById('CF');
const FC = <HTMLButtonElement>document.getElementById('FC');
const input = <HTMLInputElement>document.getElementById('input');
const result = <HTMLSpanElement>document.getElementById('resultHere');
const error = <HTMLSpanElement>document.getElementById('error');
const convert = <HTMLButtonElement>document.getElementById('convert');

let selected: string = select.celcius;

const enum select {
  celcius = 'celcius',
  farenheit = 'farenheit',
}

const selectedButton = (a: string): void => {
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

const handleConvert = (a: string): void => {
  const value: number = parseInt(input.value);
  error.style.display = 'none'
  error.textContent = '';
  if (isNaN(value)) {
    error.style.display = 'block'
    error.textContent = 'Invalid Input!';
    throw new Error('inputted value is not a number');
  }
  if (a === 'celcius') {
    result.textContent = `${value * (9 / 5) + 32} F°`;
  } else {
    result.textContent = `${(value - 32) * (5 / 9)} C°`;
  }
};

CF.addEventListener('click', (): void => {
  error.style.display = 'none'
  selectedButton(select.celcius);
});
FC.addEventListener('click', (): void => {
  error.style.display = 'none'
  selectedButton(select.farenheit);
});
convert.addEventListener('click', (): void => {
  handleConvert(selected);
});
