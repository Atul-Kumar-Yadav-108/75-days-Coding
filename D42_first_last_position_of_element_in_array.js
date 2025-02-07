/*
                        FIND FIRST AND LAST POSITION OF ELEMENT IN SORTED ARRAY
    Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

    If target is not found in the array, return [-1, -1].

    You must write an algorithm with O(log n) runtime complexity.

    Example 1:

    Input: nums = [5,7,7,8,8,10], target = 8
    Output: [3,4]
    Example 2:

    Input: nums = [5,7,7,8,8,10], target = 6
    Output: [-1,-1]
    Example 3:

    Input: nums = [], target = 0
    Output: [-1,-1]
    
*/

// console.log("Find First and Last Position of Element in Sorted Array".toUpperCase());


let searchRange = (nums, target)=>{
    let resArr = [-1,-1], n = nums.length;
    if(n < 1) return resArr;
    for(let i = 0; i < n; i++){
        if(nums[i] == target){
            if(resArr[0] == -1){
                resArr[0] = i;
            }else{
                resArr[1] = i;
            }
        }
    }
    if(resArr[1] == -1) resArr[1] = resArr[0]
    return resArr;
}

// let nums = [5,7,7,8,8,10],target = 7;
// let nums = [5,7,7,8,8,10],target = 6;
let nums = [],target = 0;
console.log(searchRange(nums,target)); 