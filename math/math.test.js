const { 
    add, 
    subtract,
    divide,
    multiply,
    squareRoot, 
    maximum } = require("./math");

describe("Test math functions", () => {

    test("should add two numbers together", () => {
        expect(add(2, 2)).toEqual(4);
    });

    test("should subtract two numbers", () => {
        expect(subtract(8, 2)).toEqual(6);
    })

    test("should divide two numbers", () => {
        expect(divide(15, 3)).toEqual(5);
    })

    test("should multiply two numbers", () => {
        expect(multiply(10, 10)).toEqual(100);
    })

    test("should return square root of number", () => {
        expect(squareRoot(9)).toEqual(3);
    });

    test("should return largest number", () => {
    expect(maximum(9, 73)).toEqual(73);
    });
});