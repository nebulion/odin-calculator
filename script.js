const disp = document.querySelector("#disp");
const digits = document.querySelectorAll(".digit");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equals");
const clear = document.querySelector("#clear");

let dispVal = "" ;
let operation = "+";
let num1 = 0;
disp.textContent = "0";

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        dispVal += digit.getAttribute('id');
        disp.textContent = dispVal;
    }); 
});

operators.forEach(operator => {
    operator.addEventListener('click', () => {
        if (dispVal != "") {
            let num2 = parseInt(dispVal, 10);
console.log(`num1 is ${num1}`);
console.log(`num2 is ${num2}`);
            let result = operate(operation, num1, num2);
console.log(`result is ${result}`);

            num1 = result;
disp.textContent = result;
            dispVal = "";
            operation = operator.getAttribute('id');
        }
        else {
            operation = operator.getAttribute('id');
        }
    }); 
});

clear.addEventListener('click', () => {
    num1 = 0;
    dispVal = "";
    operation = '+';
    disp.textContent = "0"; 
}
);

equals.addEventListener('click', () => {
        if (dispVal != "") {
    let num2 = parseInt(dispVal, 10);
    let result = operate(operation, num1, num2);
    disp.textContent = result;
    num1 = result;
    dispVal = "";
}
}
);

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
        default:
            console.log(`Operator error! ${operator}, ${num1}, ${num2}`);
    }

}


