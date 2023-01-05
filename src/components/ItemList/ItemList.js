import Item from "../Item/Item"
import React from "react"
import'./ItemList.css'


const ItemList = ( {products} ) => {
    return (
        <div className="ContainerGrilla">
            {products.map((prod) => {
                return (
                    <div key={prod.id}>
                    <Item prod={prod} />
                    </div>
                )}
            )}
        </div>
    )
}
export default ItemList