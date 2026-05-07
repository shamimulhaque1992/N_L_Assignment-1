# TypeScript Assignment - Solutions

## Problem 1: Filter Even Numbers
I looped through the array with `forEach` and pushed only the even numbers (those divisible by 2) into a new array.

## Problem 2: Reverse a String
I split the string into characters by `''`, then pushed each character to a result string so it ends up reversed.

## Problem 3: Check Type
Used TypeScript's `typeof` to check if the input is a string, if yes sent "String" else sent Number.

## Problem 4: Get Object Property
Used a generic function with `keyof` so TypeScript knows the key actually exists on the object before accessing it.

## Problem 5: Toggle Read Status
Spread the incoming `Book` object and added `isRead: true` in it, returning a new object with the isRead field withe default value true.

## Problem 6: Person & Student Classes
Created a `Person` parent class, then `Student` inherits the parent class which adds a `grade` field and a `getDetails()` method using `super()` to reuse the parent constructor.

## Problem 7: Array Intersection
Looped through the first array and checked if each number exists in the second array, making sure not to add duplicates to the result by this check `!result.includes(num)`.
