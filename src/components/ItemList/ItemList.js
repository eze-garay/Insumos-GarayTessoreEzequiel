import Item from "../Item/Item"
import React from "react"



const ItemList = ( {products} ) => {
    return (
        <ul>
            {products.map((prod) => {
                return (
                    <div key={prod.id}>
                    <Item products={prod} />
                    </div>
                )}
            )}
        </ul>  
    )
}
export default ItemList