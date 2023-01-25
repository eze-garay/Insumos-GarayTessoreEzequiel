import './Car.css'
import { useContext } from 'react' 
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'





const Car = () => {
    const {cart,totalQuantity,removeItem,clear,sumTotal} = useContext (CartContext);


    if (totalQuantity === 0) {
        return (
            <div className='ContainerVacio'>
                <h1 className='ContainerH'>No hay productos seleccionados</h1>
                <Link to='/' ><button className='Button ContainerB'>Volver al inicio</button></Link>
            </div>
        )
    }



    return (

            <div className='ContainerTable'>
                <table className='Table'>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th><button className='Button' onClick={clear}>Vaciar</button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map (products => (  
                        <tr key={products.id}>
                            <td>{products.name} </td>
                            <td>{products.quantity} </td>
                            <td>$ {products.quantity * products.price} </td>
                            <td><button className='Button' onClick={ () => removeItem(products.id)}>Eliminar</button></td>
                        </tr>
                        ))}
                        <tr>
                            <td></td>
                            <td>Suma Total</td>
                            <td>$ {sumTotal()} </td>
                            <Link to='/chec' ><td><button className='Button'>Finalizar</button></td></Link>
                        </tr>
        
                    </tbody>
        
                </table>
        
            </div>
        
            )
    
}
export default Car;