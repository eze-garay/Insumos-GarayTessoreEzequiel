import'./ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
    return (
        <div className='ContainerList'>
            <h1 className='ListTitle'>{greeting}</h1>
            <div className='ListP'>
            <p>EG nace debido a la necesidad de muchos clientes que buscaban no solamente una relación coherente entre precio y calidad de producto sino también ante la falta de una respuesta sustentada en el conocimiento técnico de los productos que trabajaban. A continuación podrá observar nuestro diferentes productos.</p>
            </div>

        </div>
    )
}

export default ItemListContainer