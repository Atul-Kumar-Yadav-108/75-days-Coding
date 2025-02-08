/*
                    LARGEST NUMBER POSSIBLE
    Given two numbers n and s , find the largest number that can be formed with n digits and whose sum of digits should be equals to s. Return -1 if it is not possible.

    Examples :
    Input: n = 2, s = 9
    Output: 90
    Explaination: It is the biggest number with sum of digits equals to 9.

    Input: n = 3, s = 20
    Output: 992
    Explaination: It is the biggest number with sum of digits equals to 20.

    Input: n = 1, s = 0
    Output: 0

    Solution Approach : in this given problem we need to find the largest number which has equal when sum of their digit. ans numbers should be equal to n. 

    like as given in first example n = 2 and s = 9 , 
        so in this we can make any 2 digits numbers whose sum is equal to s i.e 9. 
        As we find the largest number so our approach should be start digit with maximum digit like 9,8,7...
        
        for n = 2 and s = 9 we can take
            1st 2nd s         largest number
            9 + 0 = 9     ->  90               largest number
            8 + 1 = 9     ->  81
            7 + 2 = 9     ->  72
            6 + 3 = 9     ->  63
            5 + 4 = 9     ->  54
            4 + 5 = 9     ->  45
            3 + 6 = 9     ->  36
            2 + 7 = 9     ->  27
            1 + 8 = 9     ->  18
            0 + 9 = 9     ->  09

            for as we can follow the approach we should fistly fill the place with 9 untill it sum of digits are less then or equal to s and then remaining numbers for rest if no value are remain place 0;

            cases where we can return -1 , 
                    - if s = 0 and n is greater than 1  
                    - if after n * 9 < s , it means if we placed all the value with 9 even not equal to s then return -1

*/


function largestNumber(n, s){
    let temp = s, ans = '', num = 9;
    if((s == 0 && n > 1) || (num*n < s)) return -1;

    for(let i =0; i < n; i++){
        if(num <= temp){
            ans += num;
            temp -= num;
        }else{
            ans += temp;
            temp = 0; 
        }
    }
    return ans;
}

// let n = 2 , s = 9;
// let n = 1 , s = 0;
// let n = 3, s = 20;
let n = 3, s = 12;
console.log(largestNumber(n,s));