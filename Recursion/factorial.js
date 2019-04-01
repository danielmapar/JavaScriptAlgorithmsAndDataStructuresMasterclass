/*
4! factorial calculation
4 * 3 * 2 * 1 = 24
*/


console.log(factorial(4));

function factorial(num) {
    if (num === 1) return 1;
    return num * factorial(num-1);
}