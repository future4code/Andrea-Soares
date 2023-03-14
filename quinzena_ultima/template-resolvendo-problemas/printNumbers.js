//crescente

function printNumbers (n) {
    if(n >= 0){
        printNumbers(n -1)
        console.log(n);
    }
}
console.log(printNumbers(10));

//decrescente

function printNumbers (n) {
    if(n >= 0){
        console.log(n);
        printNumbers(n -1)
    }
}
console.log(printNumbers(10));