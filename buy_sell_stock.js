let prices = [7,1,5,3,6,4];
// let prices = [7,6,4,3,1];
// let prices = [1, 3, 6, 9, 11];


let minPrice  = Infinity;
let maxProfit = 0;

for(let i = 0; i < prices.length; i++){
    if(prices[i] < minPrice){
        minPrice = prices[i]
    }else{
        maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    }
}

console.log(maxProfit);