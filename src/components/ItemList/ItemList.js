import Item from "../Item/Item"
import React from "react"
import './ItemList.css'



const ItemList = ( {products} ) => {
    return (
        <div className='ContainerGrilla'>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}
export default ItemList