
function capitalize(str) {
    return str.toUpperCase();
}


function reverseString(str) {
    return str.split("").reverse().join("");
}

function countVowels(str) {
    let count = 0;
    let vowels = "aeiouAEIOU";

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

module.exports = {
    capitalize,
    reverseString,
    countVowels
};


const stringUtils = require("./stringUtils");

let text = "NodeJs Programming";

console.log("Capitalized:", stringUtils.capitalize(text));
console.log("Reversed:", stringUtils.reverseString(text));
console.log("Vowel Count:", stringUtils.countVowels(text));
