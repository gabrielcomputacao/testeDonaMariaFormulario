import { useState } from "react"
import GetItem from "./GetItem"
import "./styles/adicionarItemStyle.css"

function AdicionarItem({handleItem,item}){

    const [visible,setVisible] = useState(false)
    
    function setStateVisible(visible){
        setVisible(visible)
    }


    return (
        <div>
           
            <div>
                <button className="add" type="button" onClick={setStateVisible}>
                    Adicionar <br /> Item
                </button>
            </div>
            {
                visible && <GetItem visible={visible} setVisible={setVisible} item={item} handleItem={handleItem}/>
            }
        </div>
    )
}


export default AdicionarItem