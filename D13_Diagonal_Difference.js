/*
                Diagonal Difference matrix 
    For example, the square matrix arr is shown below:
                    1 2 3
                    4 5 6
                    9 8 9  
    The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3
     + 5 + 9 =  17. Their absolute difference is | 15-17 | = 2 .

*/


function diagonalDifference(arr){
    let len = arr.length;
    let left = 0, right = 0;
    for(let i =0; i< len; i++){
        left += arr[i][i];
        right += arr[i][len-1-i]; 
    }
    return Math.abs(left - right);
}

// let arr = [[1,2,3],[4,5,6],[9,8,9]];
let arr = [[11,2,4],[4,5,6],[10,8,-12]];

console.log(diagonalDifference(arr));
