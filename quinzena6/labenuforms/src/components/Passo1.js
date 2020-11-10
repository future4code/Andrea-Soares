import React from "react";
import PerguntasAbertas from "./PerguntasAbertas";

export default class Passo1 extends React.Component {
    render(){
    return (
        <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <PerguntasAbertas pergunta = {"1. Quald o seu nome?"} />
        <input  />

        <PerguntasAbertas pergunta = {"2. Qual a sua idade?"} />
        <input  />

        <PerguntasAbertas pergunta={"3. Qual seu email?"} />
        <input  />

        <PerguntasAbertas pergunta={"4.Qual a sua escolaridade"} />
        <select name="escolaridade" id="escolaridade">
            <option >Ensino médio incompleto</option>
            <option >Ensino médio completo</option>
            <option >Ensino superior incompleto</option>
            <option >Ensino superior completo</option>
        </select>
        </div>
        );
    } 
}
