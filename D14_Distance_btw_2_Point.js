/*
                            Distance Between 2 points 

    Given coordinates of 2 points on a cartesian plane, find the distance between 
    hem rounded up to nearest integer.

    Example 1:

    Input: 0 0 2 -2
    Output: 3
    Explanation: Distance between (0, 0) 
    and (2, -2) is 3.

    Example 2:

    Input: -20 23 -15 68
    Output: 45
    Explanation: Distance between (-20, 23) 
    and (-15, 68) is 45.


*/

function distance(x1, y1, x2, y2) {
    //code here
    
    let a = (x2-x1) * (x2-x1);
    let b = (y2-y1) * (y2-y1);
    let sumOfsqr = a+b;
    return Math.round(sqrtNewtonRophson(sumOfsqr));
    
    // return Math.round(Math.sqrt(Math.pow((x2-x1),2) + Math.pow((y2-y1),2)));
  };

  function sqrtNewtonRophson(n, tolerance = 1e-7){
    if(n < 0) return null;
    if( n ===0 || n === 1)
            return n;
    
    let guess = n/2;
    while(true){
        let newGuess = 0.5 *(guess + n /guess);
        if(Math.abs(newGuess - guess) < tolerance){
            return newGuess;
        }
        guess = newGuess;
    }
  }


//   let x1 = 0, y1 = 0, x2 = 2, y2 = -2;                // op -3
  let x1 = -20, y1 = 23, x2 = -15, y2 = 68;             // op - 45
  console.log(distance(x1,y1,x2,y2));
