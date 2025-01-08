
/*
                    Country Codes 

    - The proble was need to use the api to get the country details and based on the passing code to function 
        getCountryName, we need to find out the country name based on the code.
    
        // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>

        Replace th PAGE_NUMBER with the actaul pagination value sp basically api return the total countries and 
        in each page count of country.


*/


async function getCountryName(code) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/countries?page=<PAGE_NUMBER>

    for(let i = 1; i < 26; i++){
    let url = `https://jsonmock.hackerrank.com/api/countries?page=${i}`;
    
    let data = await fetch(url);
     let result = await data.json();
     let country = result.data.find(ele => ele.alpha2Code == code);
    //  console.log(country);
     if(country){
        // return country.name;
        console.log(country.name);
     }
    }
    // result.forEach(element => {
    //     console.log((element.name,element.alpha3Code))
    // });
    
}

// console.log(getCountryName('AF'));
// console.log(getCountryName('IN'));
// console.log(getCountryName('AU'));
// console.log(getCountryName('US'));
// console.log(getCountryName('NP'));
// console.log(getCountryName('BH'));
console.log(getCountryName('PK'));
