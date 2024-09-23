function isPalindrome(str) {
    str = str.replace(/\s+/g, '').toLowerCase();
    return str === str.split('').reverse().join('');
}

const inputString = "malayalam";
if (isPalindrome(inputString)) {
    console.log(`"${inputString}" is a palindrome.`);
} else {
    console.log(`"${inputString}" is not a palindrome.`);
}