import './ItemDetailContainer.css' 
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router'
import {useAsync } from '../hook/useAsync'
import { getProductsId } from '../../services/firebase/firestore/products'


const ItemDetailContainer = () => {
    const {productId} = useParams()
    const getProductsWhitProduct = () => getProductsId (productId)
    const {data: products , error, loading} = useAsync (getProductsWhitProduct, [productId])


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