/*
                        DECIMAL TO BINARY

    Given a decimal number N, compute its binary equivalent.


    Example 1:
    Input: N = 7
    Output: 111

    Example 2:
    Input: N = 33
    Output: 100001
    
    Your Task:
    You don't need to read input. Complete the function toBinary() which takes the decimal number N as the input parameter and prints its binary equivalent.
    Note: Print the output in a single line, the next line character is printed by the Driver Code.
*/
// console.log("Decimal to binary".toUpperCase());


function toBinary(n){
    let binary = [];
    let i = 0;
    while(n > 0){
        binary[i] = n % 2;
        n = Math.floor(n/2);
        i++;
    }
    // let newBinary = [],j=0;

    // for(let k = i - 1; k >= 0; k--){
    //     newBinary[j] = binary[k];
    //     j++; 
    // }
    // return newBinary;
    let newBinary = '';
    for (let index = i -1; index >= 0; index--) {
        // console.log(binary[index]);
        newBinary += binary[index];
    }
    console.log(newBinary);
}

let n = 7;
// console.log(toBinary(n));
toBinary(n);


// using bitwise operator 

function toBinaruUsingBitwise(n){
    let binary = '';
    for(let i = 7; i >= 0; i--){
        let bit = n >> i;
        if((bit & 1) > 0){
            binary += '1'
        }else{
            binary += '0';
        }
    }

    // console.log(binary.split('').reverse().join(''));
    console.log(binary);
}

let num = 10;
toBinaruUsingBitwise(num);