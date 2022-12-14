import { useState } from "react";
import "./styles/getItem.css"


function GetItem({ handleItem, item, setVisible }) {
  const [adicionarItem, setAdicionarItem] = useState(" ");

  function handleOnChangeItem(e) {
    setAdicionarItem(e.target.value);
  }

  function handleSubmitItem(e) {
    e.preventDefault();
    if (adicionarItem != " ") {
      handleItem([...item, adicionarItem]);
      
    }else{
        alert("seu item está vazio, preenche para depois inserir")
    }

    setVisible(false);
  }

  return (
    <div className="opcao">
    <div className="getOpcao">
      <label htmlFor="">Digite o item que deseja adicionar</label>
      <input type="text" onChange={handleOnChangeItem} />
      <button type="button" onClick={handleSubmitItem}>
        OK
      </button>
    </div>
    </div>
  );
}

export default GetItem;
