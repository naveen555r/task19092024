function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
const inputString = "Hello, World!";
console.log(reverseString(inputString));
