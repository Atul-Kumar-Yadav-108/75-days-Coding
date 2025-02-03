/*
                        LARGEST NUMBER AT LEAST TWICE OF OTHERS
    You are given an integer array nums where the largest integer is unique.

    Determine whether the largest element in the array is at least twice as much as every other number in the array. If it is, return the index of the largest element, or return -1 otherwise.

    Example 1:

    Input: nums = [3,6,1,0]
    Output: 1
    Explanation: 6 is the largest integer.


    Example 2:

    Input: nums = [1,2,3,4]
    Output: -1
    Explanation: 4 is less than twice the value of 3, so we return -1.

*/

// console.log("Largest Number At Least Twice of Others".toUpperCase());

function twiceLargestNum(nums){
    let max = 0, maxIdx = -1, flag = 1;
    for(let i = 0; i < nums.length; i ++){
        if(nums[i] > max){
            max = nums[i];
            maxIdx = i;
        }
    }

    for(let i = 0; i < nums.length; i++){
        if(i == maxIdx) continue;
        if((nums[i]*2) > max){
            flag = 0;
            break;
        }
    }
    if(flag == 1){
        return maxIdx;
    }else{
        return -1;
    }
}

// let nums = [3,6,1,0];
let nums = [1,2,3,4];

console.log(twiceLargestNum(nums));