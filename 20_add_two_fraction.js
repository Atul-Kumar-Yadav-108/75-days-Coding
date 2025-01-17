/*
            PROGRAM TO ADD TWO FRACTIONS

            Add two fraction a/b and c/d and print answer in simplest form.


            Example:
            Input
            1
            1 500 2 500
            Output
            3/500

*/

console.log("Program to add two fractions".toUpperCase())

function gcd(a, b) {
    if (a === 0) return b;
    return gcd(b % a, a);
}

function lowest(den3, num3) {
    let commonFactor = gcd(den3, num3);
    den3 = parseInt(den3 / commonFactor);
    num3 = parseInt(num3 / commonFactor);
    return [den3, num3];
}

function addFraction(num1, den1, num2, den2) {
    let gcdDen = gcd(den1, den2);
    let den3 = (den1 * den2) / gcdDen;
    let num3 = (num1 * (den3 / den1)) + (num2 * (den3 / den2));
    let [finalDen, finalNum] = lowest(den3, num3);

    return [finalNum, finalDen];
}

let num1=1, den1=500, num2=2, den2=500;
console.log(addFraction(num1,den1,num2,den2));