/*
                        Arithmetic Progression
    Check where a given array or series is arithmetic progression or not 

*/


function checkAP(array){
    if(array.length == 1){
        return 'Yes, it is an AP';
    }

    array.sort((a,b) => a-b);
    let diff = array[1] - array[0];
    for(let i = 2; i < array.length; i++){
        let comp = array[i] - array[i-1];
        if( comp != diff){
            return "No, it is not an AP";
        }
    }
    
    return 'Yes, it is an AP';
}

// let arr = [3,6,15,18,9,12,21];     // an AP
// let arr = [3,6,15,18,9,13,21];     // not an AP
let arr = [1];                       // an AP
console.log(checkAP(arr));