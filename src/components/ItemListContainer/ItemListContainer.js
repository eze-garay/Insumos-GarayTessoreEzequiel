import'./ItemListContainer.css'
import { useEffect, useState } from 'react'
import {getProducts, getProductsBycategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import Loader from '../Loader/Loader'
import { useParams } from 'react-router'

const ItemListContainer = ({greeting}) => {
    const [products, setProducts]= useState([])
    const [error, setError] = useState (false)
    const [loading, setLoading] = useState (false)
    const {categoryId} = useParams()
    
    useEffect ( () => {
       setLoading(true)

       const asyncFunction = categoryId ? getProductsBycategory : getProducts 

       asyncFunction(categoryId).then(resolve => {
            setProducts(resolve)
        }).catch(error => {
            setError(false)
        }).finally(() => {
            setLoading(false)
        })
       
    }, [categoryId])
    
    

if (loading) {
    return <Loader loader='Cargando...' /> 
}
if (error) {
    return <Loader loader='No se puede cargar el catalogo, pruebe nuevamente' /> 
    
}

    return (
        <div className='ContainerList'>
            <h1 className='ListTitle'>{greeting}</h1>
            <div className='ListP'>
            <p>EG nace debido a la necesidad de muchos clientes que buscaban no solamente una relación coherente entre precio y calidad de producto sino también ante la falta de una respuesta sustentada en el conocimiento técnico de los productos que trabajaban. A continuación podrá observar nuestro diferentes productos.</p>
            </div>
            <ItemList products={products} />
        </div>
    )
}

export default ItemListContainer