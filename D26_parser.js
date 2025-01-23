/*
                        PARSER            
        Parsing the string and remove the tags as given of an elements;
        Example : 
            <h1>This is a praser string</h1>
            OUTPUT : This is a parser string

*/


function parser(str){
    let res = "";
    let flag = 0;
    for(let i = 0; i < str.length; i++){
        // console.log(str[i]);
        if(str[i] == '<') flag = 1;
        if(flag == 0) res += str[i];
        if(str[i] == '>') flag = 0;

    }
    return res;
}

let str = "<h1>This is a praser string</h1>";
console.log(parser(str));