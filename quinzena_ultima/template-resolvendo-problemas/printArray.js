function printArray(array, i=array.length-1){
    if(i >= 0){
        console.log(array[i]);
        printArray(array, i -1)
    }
}
const array = [10,65,35,98]
console.log(printArray(array));