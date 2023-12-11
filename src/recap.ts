const myName = 'Cricadev';
const myAge = 25;

const sum = (a: number, b: number) => {
  return a + b;
};

sum(1, myAge);

class Persona {
  age;
  name;

  constructor(age: number, name: string) {}

  getSummary() {
    return `my name is ${this.name} and my age is ${this.age}`;
  }
}

const cricadev = new Persona(myAge, myName);

console.log(cricadev);
