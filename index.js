//1-boolean values -->can be true or false
//2- boolean constructor
//3-boolean function
//4- falsy values (falsey values) and use boolean function to test
//5-Boolean.prototype.toString()
//6-Boolean.prototype.valueOf()


'use strict';

//1- JavaScript has a Boolean data type. It can only take the values true or false.
console.log(true);//true
console.log(false);//false
console.log(typeof true);//boolean
console.log(typeof false);//boolean
//typeof : operator returns the type of a variable or an expression

//2-boolean constructor  creates Boolean objects
let flag = new Boolean();
console.log(flag);//[Boolean : false]

flag = new Boolean(true);
console.log(flag);//[Boolean : true]

flag = new Boolean(false);
console.log(flag);//[Boolean : true]

flag = new Boolean(1);
console.log(flag);//[Boolean : true]

flag = new Boolean(0);
console.log(flag);//[Boolean : false]

flag = new Boolean(10>9);
console.log(flag);//[Boolean : true]

flag = new Boolean(10<9);
console.log(flag);//[Boolean : false]


//3-boolean function
console.log(Boolean(true));//true
console.log(Boolean(false));//false

console.log(Boolean(1));//true
console.log(Boolean(0));//false

console.log(Boolean(10>9));//true
console.log(Boolean(10<9));//false

console.log(Boolean(10>=9));//true
console.log(Boolean(10<=9));//false

console.log(Boolean(5 == 5));//true
console.log(Boolean(5 === 5));//true

console.log(Boolean(5 == '5'));//true (compare the value)
console.log(Boolean(5 === '5'));//false (compare the value and type)

console.log(Boolean(5 != '5'));//false (compare the value)
console.log(Boolean(5 !== '5'));//true (compare the value and type)

console.log(Boolean(true && true));//true
console.log(Boolean(false && false));//false
console.log(Boolean(true && false));//false

console.log(Boolean(true || true));//true
console.log(Boolean(false || false));//false
console.log(Boolean(true || false));//true

console.log(Boolean(!true));//false
console.log(Boolean(!false));//true

//4-falsy values (falsey values) and use boolean function to test
//value that is considered false when encountered in a Boolean context.
//JavaScript uses type conversion to coerce any value to a Boolean in contexts that require it

console.log(Boolean(false));//false
console.log(Boolean(0));//false
console.log(Boolean(-0));//false
console.log(Boolean(0n));//false
console.log(Boolean(null));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false
console.log(Boolean(""));//false

//5-Boolean.prototype.toString()
const flag1 = new Boolean(true);
console.log(flag1.toString());//"true"

const flag2 = new Boolean(1);
console.log(flag2.toString());//"true"

const flag3 = new Boolean(false);
console.log(flag3.toString());//"false"

const flag4 = new Boolean(0);
console.log(flag4.toString());//"false"


//6-Boolean.prototype.valueOf()
const x = new Boolean();
console.log(x.valueOf());//false

const y = new Boolean('Mozilla');//true
console.log(y.valueOf());













