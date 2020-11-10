import React from "react";

export default class Passo3 extends React.Component{
    render(){
        return(
            <div>
                <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
                <p>5. Por que não terminou um curso de graduação?</p>
                <input />

                <p>6. Você fez algum curso complementar</p>
                <select name="cursoComplementar" id="cursoComplementar">
                    <option value="medioIncompleto">Curso técnico</option>
                    <option value="medioCompleto">Curso de inglês</option>
                    <option value="superiorIncompleto">Não fiz curso complementar</option>
                </select>
            </div>
        )
    }
}