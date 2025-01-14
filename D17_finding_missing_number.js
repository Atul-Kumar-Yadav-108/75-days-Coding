/*
        Given an array arr[] of size n-1 with integers in the range of [1, n], the task is to find the missing number from the first n integers.

        Note: There are no duplicates in the list.

        Examples: 

        Input: arr[] = [1, 2, 4, 6, 3, 7, 8] , n = 8
        Output: 5
        Explanation: Here the size of the array is 8, so the range will be [1, 8]. The missing number between 1 to 8 is 5


        Input: arr[] = [1, 2, 3, 5], n = 5
        Output: 4
        Explanation: Here the size of the array is 4, so the range will be [1, 5]. The missing number between 1 to 5 is 4


*/

// Approach 1 : using hashing array TC : O(n)  SP : O(n)

function missingNumberApp1(arr){
    let n = arr.length + 1;
    const hashArr = new Array(n+1).fill(0);
    for(let i = 0; i < arr.length; i++){
        hashArr[arr[i]]++;
    }
    for(let i = 1; i <= n; i++){
        if(hashArr[i] == 0){
            return i;
        }
    }
    console.log(hashArr);
    return -1;
}

let arr = [1, 2, 4, 6, 3, 7, 8];
console.log(missingNumberApp1(arr));

// Approach 2 : using formulla (n *(n+1))/2

function missingNumberApp2(arr){
    let n = arr.length + 1;
    let arrSum = 0;
    for(let i = 0; i<arr.length; i++){
        arrSum = arr[i];
    }

    let nSum = (n*(n+1))/2;

    return nSum - arrSum;
}
let arr1 = [1, 2, 4, 6, 3, 7, 8];
console.log(missingNumberApp1(arr));