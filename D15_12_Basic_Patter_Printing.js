// https://www.geeksforgeeks.org/pattern-printing-problems/

/*
  1 > Inverted Right Half Pyramid
   n = 5
   * * * * *
   * * * *
   * * *
   * *
   * 

*/


function invertedRightHalfPyramid(n){
    for(let i = 1; i <= n; i++){
        let pattern = "";
        for(let j = 1; j <= n-i+1; j++){
            pattern += "* ";
        }
        console.log(pattern);
        pattern = "";
    }
}

let n = 5;
invertedRightHalfPyramid(n);

/*
    2 > Inverted Left Half Pyramid
    n = 5
    * * * * *
      * * * *
        * * *
          * *
            * 
*/


function invertedLeftHalfPyramid(n){
    for(let i = 1 ; i <= n; i++ ){
        let pattern = "";
        for(let j = 1 ; j < i; j++){
            pattern += '  ';
        }
        for(let j = i; j <= n; j++ ){
            pattern += '* ';
        }
        console.log(pattern);
        pattern = "";
    }
}

let n1 = 6;
invertedLeftHalfPyramid(n1);


/*
        3 > Program to Print Left Half Pyramid Pattern
                 *
               * *
             * * *
           * * * *
         * * * * *
*/

function leftHalfPyramid(n){
    for(let i = 1; i <= n ; i++){
        // console.log(n, i)
        let pattern = "";
        for(let j=1 ; j <= n-i; j++){
            // console.log(n, i)
            pattern += '  ';
        }
        // for(let j = n-i+1; j <= n; j++){
        //     // console.log(n, j)
        //     pattern += '* ';
        // }
        for(let j = 1; j <= i; j++){
            pattern += "* ";
        }
        console.log(pattern);
        pattern = "";
    }
}

console.log('\n');
// let n2 = 5;
let n2 = 6;
leftHalfPyramid(n2);


/*
    4 > Program to Print Full Pyramid Pattern (Star Pattern)
        n = 5
            *
          * * *
        * * * * *
      * * * * * * *
    * * * * * * * * *

*/

function fullPyramid(n){
    for(let i = 1; i <= n; i ++){
        let pattern = "";
        // loop for printing space
        for(let j = 0; j<= n-i; j++){
            pattern += "  ";
        }
        for(let j =1; j <= 2*i-1; j++){
            pattern += "* ";
        }
        console.log(pattern);
        pattern = "";
    }
}

console.log('\n');
let n3 = 5;
fullPyramid(n3);

/*
    5 > Program to Print Inverted Full Pyramid Pattern (Star Pattern)
     n = 5

     * * * * * * * * *
       * * * * * * *
         * * * * *
           * * *
             *

*/

function invertedFullPyramid(n){
    for(let i = 1; i <=n; i++){
        let pattern = "";
        // loop for printing space
        for(let j =1; j <= i-1; j++){
            pattern += "  ";
        }

        //      (2*n(2*i-1))  or 2*(n-i)+1
        for(let j =1; j <= 2*n-(2*i-1); j++ ){
            pattern += "* ";
        }
        console.log(pattern);
        pattern = "";
    }
}

console.log('\n');
let n4 = 5;
invertedFullPyramid(n4);



/*
    6 > Program to print half Diamond star pattern

    n = 6
    *
    **
    ***
    ****
    *****
    ******
    *****
    ****
    ***
    **
    *

*/

function halfDiamondStar(n){
    for(let i = 1; i <= n; i++){
        // console.log("* ")
        let pattern = "";
        for(let j = 1; j <= i; j++){
            pattern += "* ";
        }
        console.log(pattern);
        pattern = "";
    }
    for(let i = 1; i < n; i++){
        // console.log("* ")
        let pattern = "";
        for(let j = n-i; j > 0; j--){
            pattern += "* ";
        }
        console.log(pattern);
        pattern ="";
    }
}

console.log('\n');
// let n5 = 6;
let n5 = 5;

halfDiamondStar(n5);

/*
    7 > Program to print the Diamond Shape

   n = 5 
    * 
   * * 
  * * * 
 * * * * 
* * * * * 
* * * * * 
 * * * * 
  * * * 
   * * 
    * 

*/


function diamondShape(n){
    for(let i = 1; i <= n; i++){
        let pattern = "";
        for(let j = 1; j <= n-i; j++){
            pattern += " ";
        }
        for(let j = 1; j <= i; j++){
            pattern += "* ";
        }
        console.log(pattern);
        pattern ="";
    }
    for(let i = 1; i <= n; i++){
        let pattern = "";
        for(let j = 1; j < i; j++){
            pattern += " ";
        }
        for(let j = 1; j <= n-i+1; j++){
            pattern += "* ";
        }
        console.log(pattern);
        pattern ="";
    }
}

console.log('\n');
// let n6 = 5;
let n6 = 6;
diamondShape(n6);

/*
    8 > Program to print alphabet “A” using stars

    Input : Number of lines : 5
Output :
 * 
* *
***
* *
* *

Input : Number of lines : 10
Output :
 **** 
*    *
*    *
*    *
*    *
******
*    *
*    *
*    *
*    *

*/


function patternAPrinting(n){
    for(let i = 0; i < n; i++){
        let pattern = "";
        for(let j = 0; j <= Math.floor(n/2) ; j++){
            if(((j==0 || j == Math.floor(n/2)) && i != 0) || (i == 0 && j != 0 && j != Math.floor(n/2) || i == Math.floor(n/2)) ){
                pattern += '*';
            }else{
                pattern += ' ';
            }
        }
        console.log(pattern);
        pattern =  "";
    }
}
console.log('\n');
// let n7 = 5;
let n7 = 10;
patternAPrinting(n7);






/*
    9 > Right half pyramid
    n = 5
    *
    **
    ***
    ****
    *****

*/

function rightHalfPyramid(){
    for(let i = 1; i <= n; i++){
        let pattern = "";
        for(let j = 1; j <= i; j++){
            pattern += "* ";
        }
        console.log(pattern);
        pattern ="";
    }
}

console.log('\n');
let n8 = 5;
rightHalfPyramid(n8);


/*
    10 > Program to print solid and hollow square patterns

    Input : n = 4
Output : 

Solid Square:
****
****
****
****

Hollow Square:
****
*  *
*  *
****


*/


function solidHollowSquare(n){
    console.log('Solid Pattern');
        for(let i = 1; i <= n; i++){
            let pattern = "";
            for(let j = 1; j <= n; j++){
                pattern += "*";
            }
            console.log(pattern);
            pattern = "";
        }
    console.log('Hollow Pattern');
    for(let i=1; i <=n; i++){
        let pattern = "";
        for(let j =1; j <=n; j++){
            if(i==1 || i == n || j == 1 || j == n){
                pattern += "*";
            }else{
                pattern += " ";
            }
        }
        console.log(pattern);
        pattern = "";
    }
}

console.log('\n');
// let n9 = 4;
let n9 = 5;
solidHollowSquare(n9);


/*
    11 > Program to print hollow rectangle or square star patterns

    The task is print below hollow pattern of given dimension.
    rows = 6 , columns = 20

    ********************
    *                  *
    *                  *
    *                  *
    *                  *
    ********************

*/

function hollowRectangle(r,c){
    for(let i = 1; i <= r; i++){
        let pattern = "";
        for(let j = 1; j <= c; j++){
            if( i ==1 || i == r || j == 1 || j == c){
                pattern += "*";
            }else{
                pattern += " ";
            }
        }
        console.log(pattern);
        pattern ="";
    }
}

console.log('\n');
let rows = 6, cols = 20;
hollowRectangle(rows,cols); 

/*
    12 > Program for Stair Case Patterns
    Programs to print following pattern.
    Examples: 
    Input : 6
    Output :
    * *
    * *
    * * * *
    * * * *
    * * * * * *
    * * * * * *

*/

function stairPattern(n){
    for(let i = 1; i <= n; i++){
        let k;
        let pattern = ""; 
        if(i % 2 != 0){
            k = i+1;
        }else{
            k = i;
        }

        for(let j = 1; j <= k; j++){
            pattern += '*';
        }
        console.log(pattern);
        pattern = "";
    }
}

console.log('\n');
let n11 = 8;
stairPattern(n11);