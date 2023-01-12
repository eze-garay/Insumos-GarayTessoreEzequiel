import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const handleOnAdd = (quantity) => {
        console.log(`agregue al carrito ${quantity} ${name}`)
    }
    
    return (
        <div className="ContainerItemDetail" key={id}>
                <article className='ContainerCardDetail'>
                    <div className='Header'>
                        <img alt='Imagen' src={img}></img>
                        <h2>{name}</h2>
                        <h3>Precio: ${price}</h3>
                        <h4>{category}</h4>
                    </div>
                    <div className='DescriptionCardDetail'>
                        <p className='DescriptionText'>Descripción: {description}</p>
                        <h4>Stock disponible = {stock}</h4>
                        <div className='ConteinerCount'>
                        <ItemCount onAdd={handleOnAdd} stock={stock}/>
                        </div>
                    </div>
                </article>
        </div>

    );

}

export default ItemDetail