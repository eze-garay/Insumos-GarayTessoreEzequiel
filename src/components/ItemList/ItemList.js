import Item from "../Item/Item"
import React from "react"
import './ItemList.css'
import { useState } from "react"









const ItemList = ( {products} ) => {

const [list , setList] = useState (false)

const lista = () =>{
    setList(!list)
}
     

    return (
        <div>
        <div>
           <button className='Button' onClick={lista }> cambiar vista </button>  
        </div>
        <div className= {`ContainerGrilla ${list ? 'isActive': ''} ` } > 
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
        </div>
        
    )
}
export default ItemList