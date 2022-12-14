import { useState } from "react";
import "./styles/habilidadesStyles.css";

function Habilidades({catchDados,identificador}) {

  return (
    <div >
      <h3> {identificador == "habilidade" ?  "Habilidades Necessárias" :  "Atividades Necessárias"} </h3>
      <div className="habilidades">
        <div>
          <input
            type="checkbox"
            name="calmo"
            id="calmo"
            value= {identificador == "habilidade" ?  "Calmo" :  "Manter Organizado"} 
            onChange={catchDados}
          />
          <label htmlFor="calmo">{identificador == "habilidade" ?  "Calmo" :  "Manter Organizado"}</label>
        </div>

        <div>
          <input
            type="checkbox"
            name="responsavel"
            id="responsavel"
            value={identificador == "habilidade" ?  "Responsável" :  "Lavar os utensílios de cozinha"}
            onChange={catchDados}
          />
          <label htmlFor="responsavel">{identificador == "habilidade" ?  "Responsável" :  "Lavar os utensílios de cozinha"}</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="organizado"
            id="organizado"
            value="organizado"
            onChange={catchDados}
          />
          <label htmlFor="organizado">Organizado</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="compromissado"
            id="compromissado"
            value={identificador == "habilidade" ?  "compromissado" :  "Ajudar no fechamento"}
            onChange={catchDados}
          />
          <label htmlFor="compromissado">{identificador == "habilidade" ?  "Compromissado" :  "Ajudar no fechamento"}</label>
        </div>
        <div>
          <input
            type="checkbox"
            name="grupo"
            id="grupo"
            value={identificador == "habilidade" ?  "trabalho em grupo" :  "Atender os clientes"}
            onChange={catchDados}
          />
          <label htmlFor="grupo">{identificador == "habilidade" ?  "Trabalho em grupo" :  "Atender os clientes"} </label>
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
