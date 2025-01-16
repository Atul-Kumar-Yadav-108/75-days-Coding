/**
    
    Given a number n, check if a number is perfect or not. 
    A number is said to be perfect if sum of all its factors excluding the number 
    itself is equal to the number.

    Examples:

    Input: n = 6
    Output: true 
    Explanation: Factors of 6 are 1, 2, 3 and 6.
    Excluding 6 their sum is 6 which is equal to N itself. So, it's a Perfect Number.

    Input: n = 10
    Output: false
    Explanation: Factors of 10 are 1, 2, 5 and 10. Excluding 10 their sum is 8 which is not equal to N itself. 
    So, it's not a Perfect Number.

    Input: n = 11
    Output: false
    Explanation: Factors of 11 are 1, 11. Excluding 11 their sum is 1 which is not equal to N itself. 
    So, it's not a Perfect Number.

 */


    function isPerfectNumber(n) {
        // code here
        if (n <= 1) return false;

    let sum = 1;
    const sqrt = Math.sqrt(n);

    for (let i = 2; i <= sqrt; i++) {
        if (n % i === 0) {
            sum += i;
            const otherDivisor = n / i;
            if (i !== otherDivisor) {
                sum += otherDivisor;
        }
    }
    }

    return sum === n;
    }

    // let n = 6;  // true
    // let n = 10;   // false
    let n = 11;    //false

    console.log(isPerfectNumber(n));