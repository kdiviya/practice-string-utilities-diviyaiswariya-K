//Use require() to import the custom module "stringUtils.js"

const inputStr  = require('./stringUtils.js');

//calling the custom module functions with different inputs

console.log(inputStr.capitalize("module Exports"));
console.log(inputStr.capitalize(""));
console.log(inputStr.capitalize());
console.log(inputStr.capitalize(null));

console.log(inputStr.reverse("Coding"));
console.log(inputStr.reverse(""));
console.log(inputStr.reverse());
console.log(inputStr.reverse(null));

console.log(inputStr.contains("module Exports", "module"));
console.log(inputStr.contains("module Exports", "Module"));
console.log(inputStr.contains());
console.log(inputStr.contains(""));


/*Output: 
Capitialize the first letter of the string "module Exports": Module Exports
The input string is null/empty/undefined.
The input string is null/empty/undefined.
The input string is null/empty/undefined.
The reverse of string "Coding": gnidoC
The input string is null/empty/undefined.
The input string is null/empty/undefined.
The input string is null/empty/undefined.
The String "module Exports" contains the substring "module": true
The String "module Exports" contains the substring "Module": false
The input string undefined is null/empty/undefined.
The input string  is null/empty/undefined.

*/
