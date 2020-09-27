/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack");
let novoJogo = confirm("Quer iniciar uma nova rodada?")
while (novoJogo) {

   let usuario = [];
   let computador = [];

   usuario.push(comprarCarta());
   usuario.push(comprarCarta());
   computador.push(comprarCarta());
   computador.push(comprarCarta());

   // ***Comprar novas cartas em caso de dois As*** 
   while ((usuario[0].valor === 11 && usuario[1].valor === 11) || (computador[0].valor === 11 && computador[1].valor === 11)) {
      usuario = [comprarCarta(), comprarCarta()];
      computador = [comprarCarta(), comprarCarta()];
      break
   }

   // ***Mostrar 2 cartas do usuario e 1 do computador para o usuario decidir se compra mais*** 
   let cartasUsuario = []
   let cartasComputador = []
   let textoCartasUsuario = ""
   let textoCartas = ""
   let somaUsuario = 0
   let somaComputador = 0;

   for (let i = 0; i < usuario.length; i++) {
      cartasUsuario = usuario[i].texto;
      textoCartasUsuario = textoCartasUsuario + " " + cartasUsuario;
      somaUsuario = somaUsuario + usuario[i].valor;
   }

   let confirmar = confirm(`Suas cartas são ${textoCartasUsuario}. A carta revelada do computador é ${computador[0].texto}.\n` + `\nDeseja comprar mais uma carta?`)

   // ***Adicionando a carta nas do usuario em caso true no confirm*** 
   let cartaComprada = comprarCarta()
   while (confirmar && somaUsuario < 21) {
      somaUsuario = somaUsuario + cartaComprada.valor;
      usuario.push(cartaComprada)
      textoCartasUsuario = textoCartasUsuario + " " + cartaComprada.texto;

      if (somaUsuario > 21) {
         break;
      }
      confirmar = confirm(`Suas cartas são ${textoCartasUsuario}. A carta revelada do computador é ${computador[0].texto}.\n` + `\nDeseja comprar mais uma carta?`)
   }
   if (somaUsuario > 21) {
      console.log(`Suas cartas são ${textoCartasUsuario}. VOCÊ ESTOUROU!! Passou de 21`)
      alert(`Suas cartas são ${textoCartasUsuario}. VOCÊ ESTOUROU!! Passou de 21`)
      
   }
   else {
      for (let i = 0; i < computador.length; i++) {
         cartasComputador = computador[i].texto;
         textoCartas = textoCartas + " " + cartasComputador;
         somaComputador = somaComputador + computador[i].valor;
      }
      // *** Vez do computador jogar***
      while (somaUsuario > somaComputador) {
         somaComputador = somaComputador + cartaComprada.valor;
         computador.push(cartaComprada)
         textoCartas = textoCartas + " " + cartaComprada.texto;
         if (somaComputador >= somaUsuario) {
            break
         }
      }
      // ***resultados***
      if (somaUsuario === somaComputador) {
         console.log("EMPATE!!");
         alert(`EMPATOU!!\n` + `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaUsuario}\n` + `As cartas do computador são ${textoCartas}. A pontuação do computador é ${somaComputador}`)
      } else if ((somaUsuario > somaComputador || somaComputador > 21) && (somaUsuario <= 21)) {
         console.log("VOCÊ VENCEU");
         alert(`VOCÊ VENCEU!!\n` + `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaUsuario}\n` + `As cartas do computador são ${textoCartas}. A pontuação do computador é ${somaComputador}`)
      } else {
         console.log("VOCÊ PERDEU");
         alert(`VOCÊ PERDEU!!\n` + `Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaUsuario}\n` + `As cartas do computador são ${textoCartas}. A pontuação do computador é ${somaComputador}`)
      }
      console.log(`Suas cartas são ${textoCartasUsuario}. Sua pontuação é ${somaUsuario}`);
      console.log(`As cartas do computador são ${textoCartas}. A pontuação do computador é ${somaComputador}`);
   }

   novoJogo = confirm("Quer iniciar uma nova rodada?")
}

alert("O jogo nem começou e já acabou :(");