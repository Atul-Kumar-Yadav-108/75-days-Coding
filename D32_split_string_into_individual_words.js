/*

            Split Array Items into individual words
        Example : 
            str = ["I am a software", "Engineer and I have one year of","experience"];
            newStr = ["I", "am", "a", "software", "Engineer", "and", "I", "have" "one" "year" "of","experience"]

*/
function splitArray(arr) {
    let newStr = []; 
    let index = 0;

    for (let words of arr) { 
        let findword = "";  

        for (let i = 0; i < words.length; i++) { 
            if (words[i] == " ") {  
                if (findword !== "") { 
                    newStr[index] = findword;  
                    index++;
                    findword = ""; 
                }
            } else {
                findword += words[i]; 
            }
        }

        if (findword !== "") {
            newStr[index] = findword;
            index++;
        }
    }
    
    return newStr;
}

let str = ["I am a software", "Engineer and I have one year of", "experience"];
console.log(splitArray(str));
