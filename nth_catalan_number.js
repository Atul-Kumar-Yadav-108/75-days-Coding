/*
                            NTH CATALAN NUMBER
    Given a number n. The task is to find the nth catalan number.
    The first few Catalan numbers for n = 0, 1, 2, 3, … are 1, 1, 2, 5, 14, 42, 132, 429, 1430, 4862, …
    Catalan Number for n is equal to the number of expressions containing n pairs of parenthesis that are correctly matched, i.e., for each of the n(' there exist n ')' on there right and vice versa.
    Note: Positions start from 0 as shown above.
    
    formulae : 

                nth = (2*n)! / ((n+1)! * n!)


*/
console.log("Nth Catalan Number".toUpperCase());

function findCatalan(n){
    return Math.round(factorial(2*n)/(factorial(n+1) * factorial(n)));
}


function factorial(n){
    if(n == 0 || n == 1) return 1;
    let fact = 1;
    for(let i = 2; i <= n; i++){
        fact *= i;
    }
    return fact;
}

// let n = 0;
// let n = 1;
// let n = 2;
// let n = 3;
// let n = 4;
// let n = 5;
let n = 6;
console.log(findCatalan(n));