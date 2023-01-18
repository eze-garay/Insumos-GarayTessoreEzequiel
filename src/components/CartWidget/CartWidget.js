
import './CartWidget.css'
import Carrito from './assest/Carrito.png'

const CardWidget = ({ totalQuantity }) => {
    return (
        <div className="ContainerCart">
            <img src={Carrito} alt="CardWidget" className='CartImg'/>
            {totalQuantity}
        </div>

    )
}

export default CardWidget