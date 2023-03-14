//'banan', 'banana' => true
//'bananay', 'banana' => true
//'panana', 'banana' => true
//bananaaa', 'banana' => false

function isOneEdit (stringA, stringB) {
    if(Math.abs(stringB.length - stringA.length) > 1){
        return false
    }
    if (stringA.length > stringB.length){ 
        return stringA.includes(stringB)
    }
    if (stringB.length > stringA.length){ 
        return stringB.includes(stringA)
    }
    let charsDiffCount = 0
    for (let i = 0; i < stringA.length; i++) {
        if (stringA[i] !== stringB[i]) {
            charsDiffCount++
        }
    }
    return charsDiffCount === 1
}

console.log(isOneEdit('bananaaa', 'banana'));