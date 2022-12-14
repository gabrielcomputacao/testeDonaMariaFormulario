import { useState, useEffect } from "react";

import "./App.css";
import AdicionarItem from "./components/AdicionarItem";
import Area from "./components/Area";
import Habilidades from "./components/Habilidades";
import Input from "./components/Input";
import Select from "./components/Select";
import GerarPDF from "./dadosPDF/GerarPdf";
import dadosPDF from "./dadosPDF/GerarPdf"

function App() {
  const [dados, setDados] = useState({});
  const [dadosHabilidades, setDadosHabilidade] = useState([]);
  const [dadosAtividade, setDadosAtividade] = useState([]);

  const [cargo, setCargo] = useState([
    "Confeiteiro",
    "Balconista",
    "Operador de Caixa",
  ]);

  const [salario, setSalario] = useState([1200, 1500, 1800, 2000]);

  const [experiencia, setExperiencia] = useState([
    "Menos de 1 Ano",
    "1 Ano",
    "2 Anos",
    "3 Anos",
    "4 Anos",
    "Mais de 5 Anos",
  ]);

  useEffect(() => {
    setDados({
      ...dados,
      habilidades: dadosHabilidades,
      atividades: dadosAtividade,
    });
  }, [dadosHabilidades, dadosAtividade]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(dados);

    GerarPDF(dados)


  }

  function getDados(e) {
    
      setDados({
        ...dados,
        [e.target.name]: e.target.value,
      });
    
  }

  function getDadosAtividades(e) {
    if (e.target.checked) {
      setDadosAtividade([...dadosAtividade, e.target.value]);
    }
  }

  function getDadosHabilidades(e) {
    if (e.target.checked) {
      setDadosHabilidade([...dadosHabilidades, e.target.value]);
    }
  }

  function getSelectDados(e) {
    setDados({
      ...dados,
      [e.target.name]: e.target.options[e.target.selectedIndex].text,
    });
  }

  return (
    <div className="App">
      <div>
        <h1>Formulário de Contratação</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="conjunto">
              <Select
                textName="cargo"
                text="Título do Cargo"
                itens={cargo}
                catchDados={getSelectDados}
              />
              <AdicionarItem item={cargo} handleItem={setCargo} />
            </div>
            <div className="conjunto">
              <Select
                itens={salario}
                textName="salario"
                text="Salário"
                catchDados={getSelectDados}
              />
              <AdicionarItem item={salario} handleItem={setSalario} />
            </div>

            <Habilidades
              catchDados={getDadosAtividades}
              identificador="atividades"
            />
            <Input type="text" text="Outras Atividades" textName="outrasAtividades" catchDados={getDados}/>

            <Area
              textName="beneficios"
              text="Benefícios"
              catchDados={getDados}
            />
            <Area
              textName="etapas"
              text="Etapas do Processo"
              catchDados={getDados}
            />

            <Habilidades identificador="habilidade" catchDados={getDadosHabilidades} />
            <Input type="text" text="Outras Habilidades" textName="outrashabilidades" catchDados={getDados}/>

            <div className="conjunto">
              <Select
                itens={experiencia}
                textName="experiencia"
                text="Experiência Necessária"
                catchDados={getSelectDados}
              />
              <AdicionarItem item={experiencia} handleItem={setExperiencia} />
            </div>

            <button className="buttonEnviar">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
