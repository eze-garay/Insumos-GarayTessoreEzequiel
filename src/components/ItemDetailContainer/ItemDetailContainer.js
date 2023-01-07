import './ItemDetailContainer.css' 
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import {getProducts} from '../../asyncMock'
import Loader from '../Loader/Loader'


const ItemDetailContainer = () => {
    const [products, setProducts]= useState([])
    const [error, setError] = useState (false)
    const [loading, setLoading] = useState (false)
    
    useEffect ( () => {
    
       setLoading(true)
        getProducts().then(productsFormApi => {
            setProducts(productsFormApi)
        }).catch(error => {
            setError(false)
        }).finally(() => {
            setLoading(false)
        })
        
    }, [])
    

if (loading) {
    return <Loader loader='Cargando...' /> 
}
if (error) {
    return <Loader loader='No se puede cargar el catalogo, pruebe nuevamente' /> 
}


return (
        <div className='ContainerItemDetail'>
            <ItemDetail products={products}/>
        </div>
    )
} 

export default ItemDetailContainer