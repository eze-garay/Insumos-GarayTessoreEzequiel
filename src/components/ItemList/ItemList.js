import Item from "../Item/Item"



const ItemList = ( {products} ) => {
    return (
        <ul>{products.map (prod => <Item key={prod.id} {...prod}></Item>)}</ul>  
    )
}
export default ItemList