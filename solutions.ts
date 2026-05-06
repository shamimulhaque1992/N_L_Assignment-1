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

