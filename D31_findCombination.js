/*
            FIND THE COMBINATION 
            nCr => 3C2

            Given two integer values n and r, the task is to find the value of Binomial Coefficient nCr

            A binomial coefficient nCr can be defined as the coefficient of x^r in the expansion of (1 + x)^n.
            A binomial coefficient nCr also gives the number of ways, disregarding order, that r objects can be chosen from among n objects more formally, the number of r-element subsets (or r-combinations) of a n-element set.
            Note: If r is greater than n, return 0.

            Examples:

            Input: n = 3, r = 2
            Output: 3
            Explaination: 3C2 = 3. 
            Input: n = 2, r = 4
            Output: 0
            Explaination: r is greater than n.
            Input: n = 5, r = 0
            Output: 1
            Explaination: Any nC0 = 1 by definition, regardless of the value of nn.

*/

function factorial(num){
    let fact = 1;
    for(let i = 1; i<= num; i++){
        fact *= i;
    }
    return fact;
}

function nCr(n,r){
    if(n < r) return 0; 
    // if(r ==0 || r == n) return 1;
    let val = Math.round(factorial(n)/(factorial(n-r)*factorial(r)));
    return val;
}

// let n = 3, r = 2;
// let n = 2, r = 4;
// let n = 5, r = 0;
let n = 24, r = 1;
console.log(nCr(n,r));