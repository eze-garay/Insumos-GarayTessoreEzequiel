import'./Item.css'
const Item = () => {
    return (
        <div className='CardWard'>
            <article className='Card'>
                <header className='CardHeader'>
                    <img src=''></img>
                </header>
                <footer className='CardFooter'>
                    <div className='CardCategoria'>
                        <span>Categoría</span>
                    </div>
                    <div className='CardText'>
                        <h1>Texto</h1>
                        <p>Párrafo</p>
                    </div>
                    <div className='CardStock'>
                        <h1>Stock</h1>
                    </div>
                </footer>
            </article>
        </div>
    )
}

export default Item