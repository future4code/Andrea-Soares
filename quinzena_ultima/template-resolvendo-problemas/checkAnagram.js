//"banana", "aaabnn" => true
//"banana", "tomate" => false

function checkAnagram(firstWord, secondWord) {
    firstWord = firstWord.toLowerCase().replace(/\s/g, '')
    secondWord = secondWord.toLowerCase().replace(/\s/g, '')
    
    let firstWordChar = {}
    let secondWordChar = {}

    for(let char of firstWord){
        if(firstWordChar[char] === undefined){
            firstWordChar[char] = 1
        }else{
            firstWordChar[char] ++
        }
    }
    for(let char of secondWord){
        if(secondWordChar[char] === undefined){
            secondWordChar[char] = 1
        }else{
            secondWordChar[char] ++
        }
    }

    for(let key in firstWordChar){
        if(firstWordChar[key] !== secondWordChar[key]){
            return false
        }
    }
    for(let key in secondWordChar){
        if(secondWordChar[key] !== firstWordChar[key]){
            return false
        }
    }
    return true
}
console.log(checkAnagram("banana", "aaabnn"));
