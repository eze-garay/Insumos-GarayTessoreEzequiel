import './ItemDetailContainer.css' 
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import {getProductsById} from '../../asyncMock'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router'


const ItemDetailContainer = () => {
    const [products, setProducts]= useState([])
    const [error, setError] = useState (false)
    const [loading, setLoading] = useState (false)
    const {productId} = useParams()

    
    useEffect ( () => {
    
       setLoading(true)
        getProductsById(productId).then(Response=> {
            setProducts(Response)
        }).catch(error => {
            setError(false)
        }).finally(() => {
            setLoading(false)
        })
        
    }, [productId])
    

if (loading) {
    return <Loader loader='Cargando...' /> 
}
if (error) {
    return <Loader loader='No se puede cargar el catalogo, pruebe nuevamente' /> 
}


return (
        <div className='ContainerItemDetail'>
            <ItemDetail {...products} />
        </div>
    )
} 

export default ItemDetailContainer