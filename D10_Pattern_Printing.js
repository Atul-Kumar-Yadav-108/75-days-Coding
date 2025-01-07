/*
    Printing pattern like 
    n = 5
             *        
           * * *
         * * * * *
       * * * * * * *
     * * * * * * * * *

    first space = n-i-1
    star = 2*i+1
    second space = n-i-1
*/

function pattern3(n){
    for(let i=1 ; i <= n; i++){
        pattern = "";
        // first half space
        for(let j = 1; j <= n-i; j++ ){
            pattern += '  ';
        }
        // pattern 
        for(let j = 1; j <= 2*i-1; j++){
            pattern += "* ";
        }
        // second half space
        for(let j = 1; j <= n-i; j++ ){
            pattern += '  ';
        }
        console.log(pattern);
        pattern = '';
    }
}

pattern3(5);






/*
    Printing Pattern like 
    n = 5
    * * * * *
    * * * *
    * * *
    * *
    *
*/

console.log('Pattern : -');
function pattern2(n){
        for(let i= 1; i <= n ; i++){
        let pattern = "";
        for(let j = 1; j <= n+1-i; j++){
            pattern += '* ';
        }
        console.log(pattern);
        pattern = "";
        
    }
}

pattern2(8);
