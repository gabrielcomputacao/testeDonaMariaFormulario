
import "./styles/inputStyle.css"

function Input({ textName,text,catchDados,type}){

    return(
        <div className="inputOutros">
            <label htmlFor={textName}>{text}</label> 
            <input name={textName} type={type}  onChange={catchDados}/>
        </div>
    )
}

export default Input