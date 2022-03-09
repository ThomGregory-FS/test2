const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const divide = (num1, num2) => {
    return num1 / num2; 
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const squareRoot = (num) => {
    return Math.sqrt(num);
}

const maximum = (num1, num2) => {
    return Math.max(num1, num2);
}




module.exports = {
    add,
    subtract,
    divide,
    multiply,
    squareRoot,
    maximum
}
