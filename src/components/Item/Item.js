import'./Item.css'

const Item = ({prod}) => {
    return (
        <div className='CardWard'>
            <article className='Card'>
                <header className='CardHeader'>
                    <h1>{prod.name}</h1>
                </header>
                <footer className='CardFooter'>
                    <div className='CardCategoria'>
                        <span>{prod.category}</span>
                    </div>
                    <div className='CardText'>
                        <h1>{prod.price}</h1>
                        <p>{prod.description} </p>
                    </div>
                    <div className='CardStock'>
                        <h1>{prod.stock}</h1>
                    </div>
                </footer>
            </article>
        </div>
    )
   
}

export default Item