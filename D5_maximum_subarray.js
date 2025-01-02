/*
                        Maximum Subarray

     Given an integer array nums, find the subarray with the largest
 sum, and return its sum.

  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 Output: 6
 Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 Input: nums = [1]
 Output: 1
 Explanation: The subarray [1] has the largest sum of 1.

*/

function maximumSubarray(arr){
    let res = arr[0];

    for(let i=0; i < arr.length; i++){
        currSum = 0;
        for(let j=i; j< arr.length; j++){
            currSum += arr[j];

            res = Math.max(res,currSum);
        }
    
    }
    return res;
}



// let nums = [-2,1,-3,4,-1,2,1,-5,4];
// let nums= [1];
// let nums = [2, 3, -8, 7, -1, 2, 3];
let nums = [-2,-4]

console.log('Sum of Maximum subarray : ', maximumSubarray(nums));