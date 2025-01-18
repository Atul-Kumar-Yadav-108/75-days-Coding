/*
                 Fizz Buzz

        Fizz Buzz Problem involves that given an integer n, 
        for every integer 0 < i <= n, the task is to output,

        "FizzBuzz" if i is divisible by 3 and 5,
        "Fizz" if i is divisible by 3,
        "Buzz" if i is divisible by 5
        "i" as a string, if none of the conditions are true.

        Return an array of strings.

        Input: n = 3
        Output: ["1", "2", "Fizz"]
        Explanation: 1 and 2 are neither divisible by 3 nor 5, 
        so we just output 1 and 2, and 3 is divisible by 3 so we output "Fizz".

        Input: n = 10
        Output: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz"]
*/


function fizzBuzz(n){
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(i % 3 == 0 && i % 5 == 0){
            arr[i-1] = 'FizzBuzz';
        }else if(i % 3 == 0){
            arr[i-1] = 'Fizz';
        }else if(i % 5 == 0){
            arr[i-1] = 'Buzz';
        }else{
            arr[i-1] = i;
        }
    }
    return arr;
}

// let n = 3;
// let n = 10;
let n = 15;
console.log(fizzBuzz(n));
