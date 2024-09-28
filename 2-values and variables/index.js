//1-what is value?
//2-what is  variables?
//3- naming conventions


//1-what is value?
//value is basically a piece of data  , so it most fundamental unit of information that we have in programming
//so a valuev is basically the smallest unit of information that we have in programming language


//print direct to the console
console.log("bessan");
console.log(12);
console.log(12 + 12 * 5);

//what is  variables?A variable is a container for a value
//create a real variable  in your computer memory  
let firstName = "Bessan";
let secondName = "Mohamed";
let age ;//declaration
age = 21;//initialization(initialization a special type of assignment)

console.log(firstName);
console.log(secondName);
console.log(firstName);//you can use variable many times
console.log(firstName+" "+secondName);
console.log(age);

//3-naming convention (rules for naming variables)

//you cannot name two variables with same name 


//use camelCase (first letter in first word in lower case and first letter in other words in uppercase )
let studendAge;
let studentFirstName;
let studentSecondName;

//all names start with a letter or (_ / $ -->bad practice)
//let 8age
let _age = 5;
console.log(_age);
let $age = 5;
console.log($age);//avoid doing that to prevent conflicts with library names


//avoid starting with uppercase letter
let Num = 8;
console.log(Num);

//Constants should be in UPPERCASE.
const PI = 3.14;
const AGE = 60;

//Use descriptive names within a reasonable length, avoiding non-common abbreviations.

//Naming Convention for Booleans --> Boolean variables should use “is” or “has” as prefixes
//Naming Convention for Functions --> JavaScript function names should be in camel case and use descriptive nouns and verbs as prefixes
//Naming Convention for Constants --> Constants, which are non-changing variables, should be written in uppercase. If the name contains more than one word, use UPPER_SNAKE_CASE (uppercase letters with underscores between words)
//Naming Convention for Classes --> Class names should follow Pascal case, which means that each word in the name starts with an uppercase letter. 
//Naming Convention for Methods --> JavaScript method names should follow the same rules as functions: camel case with verbs as prefixes
//Naming Convention for Denoting Private Functions --> Use an underscore ( _ ) as a prefix to denote private variables or functions
