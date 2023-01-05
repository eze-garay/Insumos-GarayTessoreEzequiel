import'./Item.css'
import React from 'react'

const Item = ({prod}) => {
    return (
        <div className='CardWard'>
            <article className='Card'>
                <header className='CardHeader'>
                    <h1>{prod.name}</h1>
                    <img src={prod.img} />
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