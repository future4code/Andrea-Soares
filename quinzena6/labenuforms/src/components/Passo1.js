import React from "react";

export default class Passo1 extends React.Component {
    render(){
    return (
        <div>
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <p>1. Qual o seu nome?</p>
        <input  />

        <p>2. Qual a sua idade?</p>
        <input  />

        <p>3. Qual seu email?</p>
        <input  />

        <p>4.Qual a sua escolaridade</p>
        <select name="escolaridade" id="escolaridade">
            <option value="medioIncompleto">Ensino médio incompleto</option>
            <option value="medioCompleto">Ensino médio completo</option>
            <option value="superiorIncompleto">Ensino superior incompleto</option>
            <option value="superiorCompleto">Ensino superior completo</option>
        </select>
        </div>
        );
    } 
}
 