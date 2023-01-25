import './ItemDetailContainer.css' 
import ItemDetail from '../ItemDetail/ItemDetail'
import { useEffect, useState } from 'react'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'


const ItemDetailContainer = () => {
    const [products, setProducts]= useState([])
    const [error, setError] = useState (false)
    const [loading, setLoading] = useState (false)
    const {productId} = useParams()

    
    useEffect ( () => {
    
       setLoading(true)
       const docRef = doc(db, 'products', productId)
       getDoc(docRef).then(response => {
        console.log (response)
        const data = response.data ()
        const productAdapted = { id: response.id, ...data}
        setProducts(productAdapted)
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