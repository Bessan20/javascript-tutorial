//1-double not (!!)--> alternative to boolean function
//2-falsy values (falsey values) and use !! to test
//3-difference between (!!) and boolean function 
'use strict';

//1-double not (!!)-->is used to convert any value to its corresponding boolean primitive.
//how it works?
//first step, a truthy value is converted to false and a falsy value is converted to true.
//The second not then again does the same; returns false if its operand can be converted to true; otherwise, returns true.
//(The first ! converts true to false - The second ! converts false to true)



let x = 5;
console.log(!!x); // Output: true

let y = "";
console.log(!!y); // Output: false

//!!5 is equivalent to Boolean(Boolean(5))

console.log(!!(true));//true
console.log(!!(false));//false

console.log(!!(1));//true
console.log(!!(0));//false

console.log(!!(10>9));//true
console.log(!!(10<9));//false

console.log(!!(10>=9));//true
console.log(!!(10<=9));//false

console.log(!!(5 == 5));//true
console.log(!!(5 === 5));//true

console.log(!!(5 == '5'));//true (compare the value)
console.log(!!(5 === '5'));//false (compare the value and type)

console.log(!!(5 != '5'));//false (compare the value)
console.log(!!(5 !== '5'));//true (compare the value and type)

console.log(!!(true && true));//true
console.log(!!(false && false));//false
console.log(!!(true && false));//false

console.log(!!(true || true));//true
console.log(!!(false || false));//false
console.log(!!(true || false));//true

console.log(!!(!true));//false
console.log(!!(!false));//true

//2-falsy values (falsey values) and use !! to test
//value that is considered false when encountered in a Boolean context.
//JavaScript uses type conversion to coerce any value to a Boolean in contexts that require it

console.log(!!(false));//false
console.log(!!(0));//false
console.log(!!(-0));//false
console.log(!!(0n));//false
console.log(!!(null));//false
console.log(!!(undefined));//false
console.log(!!(NaN));//false
console.log(!!(""));//false

//3-difference between (!!) and boolean function
//Readability: The Boolean() function is generally the most readable, especially for complex expressions.
//Conciseness: The !! operator is the most concise.



//Conclusion : even number of !  alternative to boolean function

