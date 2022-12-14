
import "./styles/selectStyles.css";

function Select({ textName, text, catchDados, itens }) {
  return (
    <div className="selec">
      <label className="selec__texto" htmlFor={textName}>
        {text}
      </label>
      <select
        className="selec__escolhas"
        name={textName}
        id={textName}
        onChange={catchDados}
        defaultValue={"DEFAULT"}
        
      >
        
          <option className="escolhas__opt" value="DEFAULT" disabled={true}>
          Selecione...
        </option>
        
        {itens.map((element, index) => (
          <option className="escolhas__opt" value={element} key={index}>
            {typeof(element) === typeof(1) ? `R$ ${element}` : element}
            
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
