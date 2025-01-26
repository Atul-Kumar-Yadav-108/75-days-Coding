/*
                MEADIAN OF TWO SORTED ARRAY
    Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

    The overall run time complexity should be O(log (m+n)).

    Example 1:

    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000
    Explanation: merged array = [1,2,3] and median is 2.

    Example 2:

    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000
    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

*/

// approach 1
function meadianSortedArray(num1,num2){
    let newArr = num1.concat(num2);
    newArr = newArr.sort((a,b)=>a-b);
    if(newArr.length % 2 != 0){
        return newArr[Math.floor(newArr.length/2)];
    }else{
        return (newArr[Math.floor(newArr.length/2)-1] + newArr[Math.floor(newArr.length/2)])/2;
    }
}

// let num1 = [1,3], num2 = [2];
let num1 = [1,2], num2 = [3,4];
console.log(meadianSortedArray(num1,num2));