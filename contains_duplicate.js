/**
 *                      Contains Duplicate
 *       Given an integer array nums, return true if any value appears at
 *       least twice in the array, and return false if every element is distinct
 *               Input: nums = [1,2,3,1]
 *               Output: true
 */


function containsDuplicate(nums){
    let duplicate = false;
    for(let i = 0; i < nums.length ; i++){
        for(let j= i+1; j < nums.length; j++){
            if(nums[i] == nums[j]){
                // console.log(nums[i],nums[j])
                // console.log('entered',i)
                duplicate = true;
            }
        }
    }
    
    if(duplicate){
        return true;
    }else{
        return false;
    }
}


let nums = [1,2,3,1];

console.log(containsDuplicate(nums));


// second approach (optamized)

function containsDuplicate2(nums){
    let seen = {};
    for(let i=0; i < nums.length; i++){
        if(seen[nums[i]]){
            return true;
        }
        seen[nums[i]] = true;
    }
    return false;
}


let arr = [1,2,3,4];
console.log(containsDuplicate2(arr));