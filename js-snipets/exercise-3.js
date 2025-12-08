/*Exercise #3 (sugerencia reduce())
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.
*/

let newArray = [1,2,3,4,5]

let sume = newArray.reduce((a,b) => a + b)

console.log (sume)

let multiplication = newArray.reduce((a,b) => a * b)

console.log (multiplication)
