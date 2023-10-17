"use strict";
class User {
    //   name: string;
    //   private age: number;
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // this.name = name;
        // this.age = age;
    }
    print() {
        console.log(this.name);
    }
}
const user = new User('Alex', 35);
console.log(user);
class Admin extends User {
    constructor(name, age, permissions) {
        super(name, age);
        this.permissions = permissions;
    }
}
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const results = [];
const add = (a, b) => a + b;
var PrintMode;
(function (PrintMode) {
    PrintMode[PrintMode["CONSOLE"] = 0] = "CONSOLE";
    PrintMode[PrintMode["ALERT"] = 1] = "ALERT";
})(PrintMode || (PrintMode = {}));
const printResult = (result, printMode) => {
    switch (printMode) {
        case PrintMode.CONSOLE:
            console.log(result);
            break;
        case PrintMode.ALERT:
            alert(result);
            break;
    }
};
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', () => {
    if (num1Input && num2Input) {
        const num1Value = Number(num1Input.value);
        const num2Value = Number(num2Input.value);
        if (!isNaN(num1Value) && !isNaN(num2Value)) {
            const result = add(num1Value, num2Value);
            const resultContainer = {
                res: result,
                print() {
                    console.log(this.res);
                },
            };
            results.push(resultContainer);
            printResult(resultContainer.res, PrintMode.CONSOLE);
            printResult(resultContainer.res, PrintMode.ALERT);
        }
        else {
            console.error('Please enter valid numbers in both input fields.');
        }
    }
});
const logAndEcho = (val) => {
    console.log(val);
    return val;
};
const strResult = logAndEcho('Hi there!').split(' ');
const numResult = logAndEcho(42).toFixed(2);
console.log(strResult);
console.log(numResult);
