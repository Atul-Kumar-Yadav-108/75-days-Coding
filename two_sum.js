/**
                        Two Sum
 Given an array of integer nums and an integer target, return
 indices of the two numbers such that they add up to the target.
 You may assume that each input would have exactly one solution,
 and you may not use the same element twice.
 You can return the answer in any order.
        Input: nums = [2,7,11,15], target = 9
        Output: [0,1]
 Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

 */

const indeces = [];

function twoSum(nums,target){
    const indices = [];
    for(let i = 0; i < nums.length ; i++){
        for(let j = i+1 ; j< nums.length ; j++){
            if((nums[i] + nums[j]) == target )
            {
                indices.push(i);
                indices.push(j);
                return indices;
            }
        }
    }
}


// const nums = [2,7,11,15];
// const target =9;
// const nums = [3,2,4];
// const target =6;
// const nums = [3,3];
// const target =6;
const nums = [3,1,2,4,3];
const target =6;



console.log(twoSum(nums,target));
