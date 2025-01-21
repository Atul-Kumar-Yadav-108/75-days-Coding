/*
            ARMSTRONG NUMBERS
    You are given a 3-digit number n, Find whether it is an Armstrong number or not.

    An Armstrong number of three digits is a number such that the sum of the cubes of its digits is equal to the number itself. 371 is an Armstrong number since 33 + 73 + 13 = 371. 

    Note: Return true if it is an Armstrong number else return false.

    Examples

    Input: n = 153
    Output: true
    Explanation: 153 is an Armstrong number since 13 + 53 + 33 = 153. 

    Input: n = 372
    Output: false
    Explanation: 372 is not an Armstrong number since 33 + 73 + 23 = 378. 

    Input: n = 100
    Output: false
    Explanation: 100 is not an Armstrong number since 13 + 03 + 03 = 1. 

*/



// console.log('Armstrong Numbers'.toUpperCase());

function isArmstrong(n){
    let x = n;
    let sum = 0;
    while(x > 0){
        let rem = x % 10;
        sum = sum + (rem * rem * rem);
        x = Math.floor(x / 10);
    }

    if(n == sum){
        return 'Yes, It is Armstrong number';
    }else{
        return 'No, It is Armstrong number';
    }
}

// let n = 153;
// let n = 372;
let n = 100;
console.log(isArmstrong(n));