/*
                            Find Lucky Integer in an Array

        Given an array of integers arr, a lucky integer is an integer that has a frequency in the array equal to its value.

        Return the largest lucky integer in the array. If there is no lucky integer return -1.


        Example : 
        Input: arr = [2,2,3,4]
        Output: 2
        Explanation: The only lucky number in the array is 2 because frequency[2] == 2.

        Input: arr = [1,2,2,3,3,3]
        Output: 3

        Input: arr = [2,2,2,3,3]
        Output: -1


*/

const findLuck = (arr)=>{
    let newobj = {};
    for(let i = 0; i < arr.length; i++){
        (arr[i] in newobj) ? (newobj[arr[i]] = newobj[arr[i]]+1) : (newobj[arr[i]] = 1) ;
    }
    let ans  = -1 ;  // initalize that out output is or result is 0 if no kuck number present

    for(let key in newobj){
        if(key == newobj[key]){
            ans = Math.max(ans,key);
        }
    }

    return ans;
}


// let arr = [2,2,3,4];
// let arr = [1,2,2,3,3,3]
let arr = [2,2,2,3,3];
console.log(findLuck(arr))