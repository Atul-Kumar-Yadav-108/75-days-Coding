/*
            MAXIMUM PRODUCT OF TWO ELEMENTS IN AN ARRAY
    Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
 

    Example 1:

    Input: nums = [3,4,5,2]
    Output: 12 
    Explanation: If you choose the indices i=1 and j=2 (indexed from 0), you will get the maximum value, that is, (nums[1]-1)*(nums[2]-1) = (4-1)*(5-1) = 3*4 = 12. 

    Example 2:

    Input: nums = [1,5,4,5]
    Output: 16
    Explanation: Choosing the indices i=1 and j=3 (indexed from 0), you will get the maximum value of (5-1)*(5-1) = 16.
    Example 3:

    Input: nums = [3,7]
Output: 12

*/
// console.log("Maximum Product of Two Elements in an Array".toUpperCase());

// first approach
function maximumProduct(nums){
    let m1=0, m2=0, product = 0, length = nums.length;

    for(let i=0; i <length; i++){
        for (let j = i+1; j < length; j++) {
            if(nums[i] * nums[j] > product){
                product = nums[i] * nums[j];
                m1 = i;
                m2 = j;
            }
        }
    }

    return ((nums[m1]-1)*(nums[m2]-1));
}

// let nums = [3,4,5,2];
// let nums = [1,5,4,5];
let nums = [3,7];

console.log(maximumProduct(nums));

// approach 2 
function maximumProduct2(nums2){
    let arr = nums2.sort((a,b)=>a-b);
    let length = arr.length-1;
    return (arr[length]-1)*(arr[length-1]-1);
}

// let nums2 = [3,4,5,2];
let nums2 = [1,5,4,5];
// let nums2 = [3,7];

console.log(maximumProduct2(nums2));

// approach 3

function maximumProduct3(nums3){
    let m1 = 0, m2=0;
    for(let i = 0; i<nums3.length; i++){
        if(nums3[i] > m1){
            m2 = m1;
            m1 = nums3[i];
        }else if(nums3[i] > m2){
            m2 = nums3[i];
        }
    }
    // console.log(m1,m2);
    return (m1-1)*(m2-1);
}

// let nums3 = [3,4,5,2];
let nums3 = [1,5,4,5];
// let nums3 = [3,7];

console.log(maximumProduct3(nums3));
