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

const resultOfProblem1 = filterEvenNumbers([1, 2, 3, 4, 5, 6]);

// Problem 2:
const reverseString = (input: string): string => {
  let reversedString: string = "";

  input.split("").forEach((char) => {
    reversedString = char + reversedString;
  });
  
  return reversedString;
};

const resultOfProblem2 = reverseString("typescript");
