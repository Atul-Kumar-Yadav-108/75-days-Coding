/*
             NTH FIBONACCI NUMBER

        Given a non-negative integer n, your task is to find the nth Fibonacci number.


*/

console.log('Nth Fibonacci Number'.toUpperCase());


function nthFibonacciNumber(n){
    // return n;
    if(n <= 1) return n;

    let curr = 0;
    let val1 = 0, val2 = 1;
    for(let i = 2; i <= n; i++){
        curr = val1 + val2;
        val1 = val2;
        val2 = curr;
    }

    return curr;
}

let n = 5;
console.log(nthFibonacciNumber(n));



// second approach : 
/*

The Fibonacci sequence is a sequence where the next term is the sum of the previous two terms. The first two terms of the Fibonacci sequence are 0 followed by 1. The Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21

The Fibonacci sequence is defined as follows:

F(0) = 0
F(1) = 1
F(n) = F(n - 1) + F(n - 2) for n > 1

*/

function F(n){
    if( n <= 1) return n;

    return F(n - 1) + F(n - 2);
}

let n1 = 10;
console.log(F(n1));