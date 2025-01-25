/*
                POWERS OF NUMBERS
    Given a number n, find the value of n raised to the power of its own reverse.

    Note: The result will always fit into a 32-bit signed integer.


    Examples:

    Input: n = 2
    Output: 4
    Explanation: The reverse of 2 is 2, and 22 = 4.

    Input: n = 10
    Output: 10
    Explanation: The reverse of 10 is 1 (leading zero is discarded), and 101 = 10.

    Input: n = 3
    Output: 27
    Explanation: The reverse of 3 is 3, and 33 = 27.

*/


function powerNumbers(n){
    let revNum = 0, x=n;
    while(x){
        let rem = x%10;
        revNum = revNum * 10 + rem;
        x = Math.floor(x/10);
    }
    let power = 1;
    for(let i= 1; i <= revNum; i++){
        power *= n;
    }

    return power;
}

// let n = 2;           // 4
// let n = 10;          // 10
let n = 3;              // 9
console.log(powerNumbers(n));