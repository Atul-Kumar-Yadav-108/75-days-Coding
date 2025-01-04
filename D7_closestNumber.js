/*
                    Closest Number 
    Given two integers n and m. The problem is to find the number 
    closest to n and divisible by m. If there is more than one 
    such number,then output the one having the maximum absolute value.


    Examples :
    input: n = 13 , m = 4
Output: 12
Explanation: 12 is the Closest Number to 13 which is divisible by 4.

Input: n = -15 , m = 6
Output: -18
Explanation: -12 and -18 are both similarly close to -15 and
divisible by 6. but -18 has the maximum absolute value.
So, Output is -18
*/


function closestNumber(n ,m){
    let start = n - Math.abs(m);  // make m to absolute value
    let end = n + Math.abs(m);

    let closestNum = 0;
    let minDiff = Infinity;

    for(let i = start; i <= end; i++){
        if( i % m == 0){
            let diff = Math.abs(n - i);
            if(diff < minDiff || (diff == minDiff && Math.abs(i) > Math.abs(closestNum))){
                closestNum = i;
                minDiff = diff;
            }
        }
    }
    console.log('Closest number is : ',closestNum);
}


// let n = 13, m= 4;
// let n = -15, m = 6;
let n = -6, m = 39;
closestNumber(n,m);