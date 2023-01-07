import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'



const ItemDetail = ({product}) => {


    return (
        <div className="ContainerItemDetail">
        {product.map((prod) => {
            return (
                <article className='ContainerCardDetail' key={prod.id}>
                    <div className='Header'>
                        <img  src={prod.img} alt='Imagen'></img>
                        <h2>{prod.name} </h2>
                        <h3>${prod.price}</h3>
                    </div>
                    <div className='DescriptionCardDetail'>
                        <p className='DescriptionText'>{prod.description} </p>
                        <h4>{prod.stock} </h4>
                        <div className='ConteinerCount'>
                        <ItemCount/>
                        </div>
                    </div>
                </article>
         )}
 
        )}
        </div>

    )

}

export default ItemDetail