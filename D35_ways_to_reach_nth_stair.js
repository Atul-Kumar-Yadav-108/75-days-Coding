/*
                    WAYS TO REACH THE N'TH STAIR
    There are n stairs, a person standing at the bottom wants to reach the top. The person can climb either 1 stair or 2 stairs at a time. Count the number of ways, the person can reach the top (order does matter).


    Input: n = 4
    Output: 5


    Input: n = 10
    Output: 89 

    basically the approach is very similar to fibonacci seires but here the first and second are 1,2 respectively

*/

// console.log("Ways to Reach the n'th Stair".toUpperCase());


function countWays(n){
    if(n == 1 || n == 2) return n;
    let ways = 0, f1 = 1, f2 = 2;
    for(let i = 3; i <= n; i++){
        let f3 = f1 + f2;
        ways = f3;
        f1 = f2;
        f2 = f3;
    }

    return ways;
}


// let n = 4;           // 5
let n = 10;             // 89
console.log(countWays(n));