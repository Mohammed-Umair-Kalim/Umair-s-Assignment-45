// Q21: Think of something you could store in a TypeScript Object. Write a program that creates Objects
// containing these items?

// Answer 21:
// Typescript Object:
let laptop:{ram:any,core:string} =
 {
    ram:8 + "gb ram",
    core:"i5 6th Generation"
 }
 
console.log(`Laptop ${laptop.core} ${laptop.ram}`);