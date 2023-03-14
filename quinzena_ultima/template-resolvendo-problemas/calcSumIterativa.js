function calcSumIterativa(n){
    let sum = 0
    for(let i = 0;i <=n ; i++) {
         sum = sum + i
    }
    return sum
}
console.log(calcSumIterativa(30));