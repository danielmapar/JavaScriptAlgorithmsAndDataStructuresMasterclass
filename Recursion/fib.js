// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

function fib(num){
    if (num < 1) return 0;
    if (num === 1) return 1;
    
    return fib(num-1) + fib(num-2);
}

console.log(fib(28))

1,1,2,3
function fibIte(num) {
    if (num === 1) return 1;
    if (num === 2) return 1;

    num = num - 2;
    sum = 0
    current = 1
    next = 1
    for(; num > 0; num--) {
        sum = current + next 
        current = next
        next = sum
    }
    return sum;
}
console.log(fibIte(28))


