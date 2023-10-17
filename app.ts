const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonElement = document.querySelector('button');

type CalculationResult = { res: number; print: () => void };
const results: Array<CalculationResult> = [];

const add = (a: number, b: number) => a + b;

enum PrintMode {
  CONSOLE,
  ALERT,
}
const printResult = (result: string | number, printMode: PrintMode) => {
  switch (printMode) {
    case PrintMode.CONSOLE:
      console.log(result);
      break;
    case PrintMode.ALERT:
      alert(result);
      break;
  }
};

buttonElement?.addEventListener('click', () => {
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
    } else {
      console.error('Please enter valid numbers in both input fields.');
    }
  }
});
