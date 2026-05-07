// Problem 1:
const filterEvenNumbers = (input: number[]): number[] => {
  let evenArray: number[] = [];

  input.forEach((number) => {
    if (number % 2 === 0) {
      evenArray.push(number);
    }
  });

  return evenArray;
};

// Problem 2:
const reverseString = (input: string): string => {
  let reversedString: string = "";

  input.split("").forEach((char) => {
    reversedString = char + reversedString;
  });

  return reversedString;
};

// Problem 3:
type StringOrNumber = string | number;

const checkType = (input: StringOrNumber): string => {
  if (typeof input === "string") {
    return "String";
  } else {
    return "Number";
  }
};

// Problem 4:
const getProperty = <X>(object: X, key: keyof X) => {
  return object[key];
};

// Problem 5:
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (input: Book): Book & { isRead: boolean } => {
  return { ...input, isRead: true };
};

// Problem 6:
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

// Problem 7:
const getIntersection = (array1: number[], array2: number[]): number[] => {
  const result: number[] = [];

  array1.forEach((num) => {
    if (array2.includes(num) && !result.includes(num)) {
      result.push(num);
    }
  });
  return result;
};
