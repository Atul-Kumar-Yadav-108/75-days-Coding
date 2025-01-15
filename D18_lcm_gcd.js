/*
                                LCM And GCD
    Given two integers a and b, write a function lcmAndGcd() to compute their LCM and GCD. 
    The function inputs two integers a and b and returns a list containing their LCM and GCD.

    Examples:

    Input: a = 5 , b = 10
    Output: [10, 5]
    Explanation: LCM of 5 and 10 is 10, while their GCD is 5

    Input: a = 14 , b = 8
    Output: [56, 2]
    Explanation: LCM of 14 and 8 is 56, while their GCD is 2.

    Input: a = 1 , b = 1
    Output: [1, 1]
    Explanation: LCM of 1 and 1 is 1, while their GCD is 1.


*/


function lcmGcd(a,b){
    let originalA = a;
    let originalB = b;
        
        while (b != 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        let gcd = a;
        
        let lcm = (originalA * originalB) / gcd;
        return [lcm, gcd];

    return [lcm,gcd];
}


// let a = 5 , b = 10;
// let a = 14 , b = 8;
let a = 1 , b = 1;
console.log(lcmGcd(a,b));