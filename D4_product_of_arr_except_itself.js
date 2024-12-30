/**
 *              Product of Array Except Self
 *  Given an integer array nums, return an array answer such that
 *  answer[i] is equal to the product of all the elements of nums
 *  except nums[I].
 *  The product of any prefix or suffix of nums is guaranteed to fit in a
 *  32-bit integer.
 * You must write an algorithm that runs in O(n) time and without
 * using the division operation.
 * 
 * Input: nums = [1,2,3,4]
 * Output: [24,12,8,6]
 * 
 */

function productOfArr(arr){
    let resArr = [];
    for(let i=0; i < arr.length; i++){
        let product =1;
        for (let j = 0; j < arr.length; j++) {
            if(i != j){
                product *= arr[j];
            }
        }
        resArr.push(product);
    }
    return resArr;
}

let arr = [1,2,3,4];
console.log(productOfArr(arr))

//  This gives the O(n^2) Time complexity

// Second approach which will give us O(n) time complexity


function productOfArr(arr) {
    let n = arr.length;
    let resArr = new Array(n).fill(1);

    // Calculate prefix products
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        resArr[i] = prefix;
        prefix *= arr[i];
    }

    // calculate the product of suffix and multiply with prefix
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        resArr[i] *= suffix;
        suffix *= arr[i];
    }

    return resArr;
}

let arr1 = [1, 2, 3, 4];
console.log(productOfArr(arr));