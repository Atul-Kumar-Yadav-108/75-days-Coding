/*
                        Multiply two strings
    Given two numbers as strings s1 and s2. Calculate their Product.


    Examples:
    Input: s1 = "0033", s2 = "2"
    Output: "66"

    Input: s1 = "11", s2 = "23"
    Output: "253"

    Input: s1 = "123", s2 = "0"
    Output: "0"

*/


function multiplyStrings(s1, s2) {
    // code here
  let negative = (s1[0] === '-') ^ (s2[0] === '-'); 
  
    if (s1[0] === '-') s1 = s1.slice(1);
    if (s2[0] === '-') s2 = s2.slice(1);
    
    s1 = s1.replace(/^0+/, '');
    s2 = s2.replace(/^0+/, '');

    if (!s1 || !s2) return "0";

    let n = s1.length, m = s2.length;
    let result = Array(n + m).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        for (let j = m - 1; j >= 0; j--) {
            let mul = Number(s1[i]) * Number(s2[j]);
            let sum = mul + result[i + j + 1];
            result[i + j + 1] = sum % 10; 
            result[i + j] += Math.floor(sum / 10); 
        }
    }

    let product = result.join('').replace(/^0+/, '');

    return (negative && product !== "0" ? '-' : '') + product;

}

// let s1 = "0033", s2 = "2";
// let s1 = "11", s2 = "23";
let s1 = "123", s2 = "0";
console.log(multiplyStrings(s1,s2));