/*
                        SQUARE ROOT OF AN INTEGER
    
Given a positive integer n, find its square root. If n is not a perfect square, then return floor of √n.

Examples : 

Input: n = 4
Output: 2
Explanation: The square root of 4 is 2.


Input: n = 11
Output: 3
Explanation: The square root of 11 lies in between 3 and 4 so floor of the square root is 3.


*/

// console.log('Square root of an integer'.toUpperCase())

function squareRoot(n){
    let tolerance = 1e-7;
    let guess = n/2;
    while(true){
        let newGuess = 0.5 * (guess + n/guess);
        if(Math.abs(newGuess-guess) < tolerance){
            return Math.floor(newGuess);
        }
        guess = newGuess;
    }
}

let n = 4; 
// let n = 11;
console.log(squareRoot(n));