'use strict';
//javascript math
//javascript random function
//javascript numbers(numbers - BigInt - number constructor -Number Methods - Number Properties)
//isNaN()
//Number.isNaN()
//difference between isNaN() and Number.isNaN()
//javascript booleans


//javascript math
console.log(Math.E);
console.log(Math.PI);
console.log(Math.SQRT1_2);
console.log(Math.SQRT2);
console.log(Math.LN10);
console.log(Math.LN2);
console.log(Math.LOG10E);
console.log(Math.LOG2E);
console.log(Math.round(5.3));
console.log(Math.round(5.6));
console.log(Math.ceil(5.1));
console.log(Math.ceil(5.7));
console.log(Math.floor(5.1));
console.log(Math.floor(5.6));
console.log(Math.trunc(5.1));
console.log(Math.trunc(5.6));

console.log(Math.sign(-4));
console.log(Math.sign(0));
console.log(Math.sign(4));

console.log(Math.pow(8, 2));

console.log(Math.sqrt(64));

console.log(Math.abs(-5));

console.log(Math.min(0, 150, 30, 20, -8, -200));

console.log(Math.max(0, 150, 30, 20, -8, -200));

console.log(Math.random());
console.log(Math.floor(Math.random()*9));
console.log(Math.floor(Math.random() * (7 - 5)) + 5);
console.log(Math.floor(Math.random() * (10 - 9)) + 9);








//number properties(most of them new in E6 and donot work in internet explorer)
console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

console.log(Number.MAX_SAFE_INTEGER === Number.MAX_SAFE_INTEGER+1);//false
console.log(Number.MAX_SAFE_INTEGER+2 === Number.MAX_SAFE_INTEGER+1);//true
console.log(Number.MAX_VALUE<Number.MAX_SAFE_INTEGER);//false
console.log(Number.MAX_VALUE>Number.MAX_SAFE_INTEGER);//true
/*

MAX_VALUE is in double (64 bit)
MAX_SAFE_INTEGER can use first 53 bit of a double(64 bit)
basically javascript doesn't support long. so for int number its uses 32 bit integer container. and for a numbers greater then 32 bit its keep the number in a double container which integer part is 53 bit and rest 11 bits are mantissa(keep the information of a floating point number).




*/
console.log(Number.NaN);
console.log(Number.length);//1
console.log(Number.name);//Number
console.log(Number.prototype);//{}


//constructor : Number()-->object
console.log(typeof Number());//number
let a = 123;
console.log(a.constructor);

//you can use number constructor with or without new with different effects
//If value is absent, it becomes 0.
//with new --> 
//without new -->
console.log(Number('1') === new Number('1')); // false


var x = Number('09');
console.log(x);//9
console.log(typeof x); // 'number'

var y = new Number('09');
console.log(typeof y); // 'object'
console.log(y);//[Number :9]

var z = new Number(9);
console.log(typeof z);// 'object'
console.log(z);//[Number :9]

console.log(Number(1n));//1

//isFinite and Number.isFinite;
//Number.isFinite() --> returns true if a number is a finite number 
//isFinite() --> returns true if a value is a finite number - converts the value to a number before testing it
console.log(isFinite(123));//true
console.log(isFinite("123"));//true
console.log(Number.isFinite("123"));//false

console.log(isFinite(NaN));//false
console.log(Number.isFinite(NaN));//false


console.log(Number.isFinite(+1.23));//true
console.log(Number.isFinite(-1.23));//true
console.log(Number.isFinite('2005/12/12'));//false

console.log(isFinite(+1.23));//true
console.log(isFinite(-1.23));//true
console.log(isFinite('2005/12/12'));//false

console.log(Number.isFinite(1 / 0));//false
console.log(Number.isFinite(0 / 0));//false
console.log(Number.isFinite(10 / 5));//true

console.log(Number.isFinite(5-2));//true
console.log(Number.isFinite(5/2));//true
console.log(Number.isFinite(0));//true
console.log(Number.isFinite(0/0));//false -->NaN
console.log(Number.isFinite(Infinity));//false
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(NaN));

console.log(isFinite(true));//true
console.log(isFinite(false));//true
console.log(Number.isFinite(true));//false
console.log(Number.isFinite(false));//false

console.log(isFinite('     9'));//true
console.log(Number.isFinite('     9'));//false

console.log(isFinite('9r'));//false
console.log(Number.isFinite('9r'));//false


console.log(isFinite('     09 '));//true
console.log(Number.isFinite('     09 '));//false

console.log(isFinite("0"));// true; coerced to number 0
console.log(Number.isFinite("0"));// false
console.log(isFinite(null));// true; coerced to number 0
console.log(Number.isFinite(null));//false

console.log(isFinite(undefined));// false
console.log(Number.isFinite(undefined));//false

console.log(isFinite(5 == '5'));//true ; coerced to number 1
console.log(Number.isFinite(5 == '5'));//false


console.log(isFinite(5 === '5'));//true ; coerced to number 0
console.log(Number.isFinite(5 === '5'));//false

console.log(0/0);//NaN
console.log(7/0);//Infinity

console.log("**************");
//is NaN:
//1-the value is first coerced to a number
//2-resulting value is then compared against NaN.
console.log(isNaN(null));//false
console.log(isNaN({}));//true
console.log(isNaN(undefined));//true
console.log(isNaN(NaN));//true
console.log(isNaN(0/0));//true
console.log(isNaN(7/0));//false  infinity
console.log(isNaN(true));//false corecied to one
console.log(isNaN(false));//false corecied to zero
console.log(isNaN('123'));//false
console.log(isNaN('   12'));//false
console.log(isNaN('NaN'));//true
console.log(isNaN(''));//false corecied to zero
console.log(isNaN(" "));//false
console.log(isNaN("37.9"));//false
console.log(isNaN("37,9"));//true
console.log(isNaN('A'));//true
console.log(isNaN([]));//false corcied to 0
console.log(isNaN([1]));// false; the primitive representation is "1"
console.log(isNaN([1, 2]));// true; the primitive representation is "1,2", which cannot be parsed as number

console.log(Number.isNaN(NaN));//true
console.log(Number.isNaN(Number.NaN));//true
console.log(Number.isNaN(0/0));//true













