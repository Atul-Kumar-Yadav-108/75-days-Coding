/*
                Lonely Integer
    Given an array of integers, where all elements but one occur twice, find the unique element.
    example : 
                a = [1, 2, 3, 4, 3, 2, 1];
                The unique element is 4.
*/


function lonelyInteger(arr){
    let unique = 0;
    for(let num of arr){
        unique ^= num;
    }
    return unique;
}


let arr = [1, 2, 3, 4, 3, 2, 1];
console.log(lonelyInteger(arr));