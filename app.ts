interface Greetable {
  name: string;
}

interface Printable {
  print(): void;
}

class User implements Greetable, Printable {
  //   name: string;
  //   private age: number;

  constructor(public name: string, private age: number) {
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
  constructor(name: string, age: number, private permissions: string[]) {
    super(name, age);
  }
}

const num1Input = document.getElementById('num1') as HTMLInputElement;
const num2Input = <HTMLInputElement>document.getElementById('num2');
const buttonElement = document.querySelector('button')!;

type CalculationContainer = {
  res: number;
  print(): void;
};
const results: Array<CalculationContainer> = [];

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

buttonElement.addEventListener('click', () => {
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

const logAndEcho = <T>(val: T) => {
  console.log(val);
  return val;
};

const strResult = logAndEcho<string>('Hi there!').split(' ');
const numResult = logAndEcho<number>(42).toFixed(2);

console.log(strResult);
console.log(numResult);
