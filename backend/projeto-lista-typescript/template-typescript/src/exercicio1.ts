//COMENTÁRIO: tipar todos os tipos sem o any? Fiquei confusa 
function imprimeTipo(parametro: any): void{
    console.log(typeof(parametro));
    
}

imprimeTipo("bocó")
imprimeTipo(10)
imprimeTipo(true)
imprimeTipo([1,2])