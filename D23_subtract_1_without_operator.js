/*

        SUBTRACT 1 WITHOUT ARITHMETIC OPERATORS

        Write a program to subtract one from a given number. The use of operators like ‘+’, ‘-‘, ‘*’, ‘/’, ‘++’, ‘–‘ …etc are not allowed. 

        Examples: 

        Input:  12
        Output: 11


        Input:  6
        Output: 5

*/

console.log('Subtract 1 without arithmetic operators'.toUpperCase());



function subtractOne(n){
    let m = 1;
    while(!(n & m)){
        n = n ^ m;
        m <<= 1;
    }

    n = n ^ m;
    return n;
}

// let n = 12;
let n = 6;
console.log(subtractOne(n));