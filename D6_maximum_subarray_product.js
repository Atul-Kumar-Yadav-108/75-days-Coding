/*
                Maximum Product Subarray
    Given an integer array nums, find a subarray that has the largest
 product, and return the product.
 Input: nums = [2,3,-2,4]
 Output: 6
 Explanation: [2,3] has the largest product 6.
 Input: nums = [-2,0,-1]
 Output: 0
 Explanation: The result cannot be 2, because [-2,-1] is not a
 subarray.


*/


function maxProductSubarray(arr){
    let res = arr[0];

    for (let i = 0; i < arr.length; i++) {
        // const element = arr[i];
        let currProduct = 1;
        for(let j= i; j<arr.length; j++){
            currProduct *= arr[j];
            res = Math.max(res,currProduct);
        }
        
    }
    return res;
}


// let nums = [2,3,-2,4];
// let nums = [-2,0,-1];
// let nums = [-2, 6, -3, -10, 0, 2];
let nums = [-1, -3, -10, 0, 60];

console.log('Maximum product subarray : ',maxProductSubarray(nums));