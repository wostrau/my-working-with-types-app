var num1Input = document.getElementById('num1');
var num2Input = document.getElementById('num2');
var buttonElement = document.querySelector('button');
var results = [];
var add = function (a, b) { return a + b; };
var printResult = function (result, printMode) {
    switch (printMode) {
        case 'console':
            console.log(result);
            break;
        case 'alert':
            alert(result);
            break;
    }
};
buttonElement === null || buttonElement === void 0 ? void 0 : buttonElement.addEventListener('click', function () {
    if (num1Input && num2Input) {
        var num1Value = Number(num1Input.value);
        var num2Value = Number(num2Input.value);
        if (!isNaN(num1Value) && !isNaN(num2Value)) {
            var result = add(num1Value, num2Value);
            var resultContainer = {
                res: result,
                print: function () {
                    console.log(this.res);
                },
            };
            results.push(resultContainer);
            printResult(resultContainer.res, 'console');
            printResult(resultContainer.res, 'alert');
        }
        else {
            console.error('Please enter valid numbers in both input fields.');
        }
    }
});
