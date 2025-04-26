//Converts the first letter of a string to uppercase.

function capitalize(str) {

    if (str === "" || str === undefined || str === null) { //check whether the parameter is equal to null or empty or undefined
        return `The input string is null/empty/undefined.`;
    }

    else {
        return (`Capitialize the first letter of the string "${str}": ${str[0].toUpperCase() + str.slice(1,str.length)}`);
        
    }
}

//To reverses the characters in a string

function reverse(str) {
let reverseStr = "";

    if (str === "" || str === undefined || str === null) { //check whether the parameter is equal to null or empty or undefined
        return `The input string is null/empty/undefined.`;
    }

    else { 
        for (let i = str.length-1; i >= 0; i--){
            reverseStr += str[i];
        }
    
        return `The reverse of string "${str}": ${reverseStr}`;     
    }
}

//Checks if a substring exists within a string and returns true or false
function contains(str, substr) {

    if (str === "" || str === undefined || str === null) { //check whether the parameter is equal to null or empty or undefined
        return `The input string ${str} is null/empty/undefined.`;
    }
    else {
        return `The String "${str}" contains the substring "${substr}": ${str.includes(substr)}`;
       
    }
}
 //export the functions capitalize(), reverse(), contains() into other program.
module.exports = {capitalize, reverse, contains};