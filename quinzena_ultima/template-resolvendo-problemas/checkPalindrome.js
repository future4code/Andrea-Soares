// bob => true
//bananinha => false

function checkPalindrome(text) {
    text = text.toLowerCase().replace(/\s/g, '') //transformar tudo em caixa baixa e tirar os espaços
    let reverseText = ''
    for (let i= text.length -1; i >= 0;  i--){
        reverseText += text[i]
    }
    return reverseText === text
}
console.log(checkPalindrome('A dama admirou o rim da amada')); // teste