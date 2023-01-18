import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'



const ItemDetail = ({ id, name, img, category, description, price, stock, }) => {
    const [quantity, setQuantity] = useState (0)

    const {addItem,isInCart} = useContext (CartContext)

    const handleOnAdd = (quantity) => {
        console.log(`agregue al carrito ${quantity} ${name}`)

        setQuantity(parseInt(quantity))

        addItem({id, name, price, quantity})
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
                            {
                               isInCart (id) ? (
                                    <Link to='/cart'>Terminar Compra</Link>
                                ) : (<ItemCount onAdd={handleOnAdd} stock={stock}/>)
                            }
                        </div>
                    </div>
                </article>
        </div>

    );

}

export default ItemDetail