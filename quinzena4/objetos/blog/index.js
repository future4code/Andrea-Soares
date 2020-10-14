console.log("estou funcionando");

let arrayDePosts = [];

function adicionarPostNoArray() {
    const titulo = document.getElementById("titulo-post");
    const autor = document.getElementById("autor-post");
    const conteudo = document.getElementById("conteudo-post");
    const imagem = document.getElementById("imagem-post");
    
    const post = {
        titulo: titulo.value,
        autor: autor.value,
        conteudo: conteudo.value,
        imagem : imagem.value,
    }
   
    titulo.value = " ";
    autor.value = " ";
    conteudo.value = " ";
    imagem.value = "";
    arrayDePosts.push(post); 
    console.log(arrayDePosts);
}

function escreverNoBlog(){
    let postaNaTela = document.getElementById("container-de-posts")
    let tela 
    for (let i = 0; i < arrayDePosts.length; i++){
      tela = `<h1>${arrayDePosts[i].titulo.toUpperCase()}</h1>\n <h4>Autor(a):${arrayDePosts[i].autor.toUpperCase()}</h2> \n <p>${arrayDePosts[i].conteudo}</p>\n <img src= "${arrayDePosts[i].imagem}"/>`
    } 
    postaNaTela.innerHTML += tela
}  

// function irPaginaBlog(){
//     window.location.href = "./blog.html"
// }

function apertarBotao(){
    adicionarPostNoArray();
    escreverNoBlog();
    // irPaginaBlog()
}
