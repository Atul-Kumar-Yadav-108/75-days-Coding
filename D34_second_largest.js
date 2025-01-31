/*

                                            SECOND LARGEST NUMBER 

    Given an array of positive integers arr[] of size n, the task is to find second largest distinct element in the array.

    Note: If the second largest element does not exist, return -1.

    Examples:

    Input: arr[] = [12, 35, 1, 10, 34, 1]
    Output: 34
    Explanation: The largest element of the array is 35 and the second largest element is 34.

    Input: arr[] = [10, 5, 10]
    Output: 5
    Explanation: The largest element of the array is 10 and the second largest element is 5.

    Input: arr[] = [10, 10, 10]
    Output: -1
    Explanation: The largest element of the array is 10 there is no second largest element.

*/

function secondLargest(arr){

    let first = -1, second = -1;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > first){
            second = first;
            first = arr[i];
        }else if(arr[i] > second && arr[i] != first){
            second = arr[i];
        }
    }
    return second;
}


// let arr = [12, 35, 1, 10, 34, 1];
// let arr = [10, 5, 10];
let arr = [10, 10, 10];
console.log(secondLargest(arr))
