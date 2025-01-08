/*
            Sum of Digits of a number
    Given a number n, find the sum of its digits.
    Examples : 

    Input: n = 687
    Output: 21
    Explanation: The sum of its digits are: 6 + 8 + 7 = 21


    Input: n = 12
    Output: 3
    Explanation: The sum of its digits are: 1 + 2 = 3
*/

// iteratvie approach  TC = (log<10> O(n)) SC = O(1)
function sumOfDigits(n){
    let sum = 0;
    while(n != 0){
        let lastDigit = n % 10;
        sum += lastDigit;
        n = Math.floor(n/10);
    }
    return sum;
 }

// let n = 687;
let n = 12;
console.log(sumOfDigits(n));


// string conversion using predefined mathod   TC = (log<10> O(n)) SC = O(log<10> O(n))

function sumOfDigits1(n){
    let num = n.toString().split('');
    // return num;
    let sum = 0;
    for(let val of num){
        sum += parseInt(val);
    }
    return sum;
}

// let num = 678;
let num = 12;
console.log(sumOfDigits1(num));


// recursive approach               TC = (log<10> O(n)) SC = O(log<10> O(n))

function sumOfDigits2(n){
    // base case 
    if(n == 0)
        return 0;

    return (n%10) + sumOfDigits2(Math.floor(n/10));
}

let num1 = 678;
console.log(sumOfDigits2(num1));
