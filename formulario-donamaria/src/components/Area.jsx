import "./styles/areaStyles.css"

function Area({text,textName,catchDados}){

    return(
        <div className="area">
            <label className="area__text" htmlFor={textName}>{text}</label>
            <textarea className="area__content" name={textName} onChange={catchDados}>

            </textarea>
        </div>
    )
}

export default Area;