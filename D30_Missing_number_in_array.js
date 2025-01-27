/*
             MISSING NUMBER
    Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

 

Example 1:
Input: nums = [3,0,1]
Output: 2
Explanation:
n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:
Input: nums = [0,1]
Output: 2


Example 3:
Input: nums = [9,6,4,2,3,5,7,0,1]
Output: 8


*/



function missingNumber(nums){
    let n = nums.length;
    let sum = nums.reduce((p,c)=> p+c);
    let acutalValue = (n*(n+1))/2;
    return acutalValue - sum;
}


// let nums = [3,0,1];
// let nums = [0,1];
let nums = [9,6,4,2,3,5,7,0,1];
console.log(missingNumber(nums));