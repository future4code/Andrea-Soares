function calculateSum (n, sum=0) {
    
    if(n === 0){
        return sum
    }else{
        return calculateSum(n -1, sum + n)
    }
}
console.log(calculateSum(0));