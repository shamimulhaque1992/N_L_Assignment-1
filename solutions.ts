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
