import'./Item.css'
import React from 'react'

const Item = ({prod}) => {
    return (
        <div className='CardWard'>
            <article className='Card'>
                <header className='CardHeader'>
                    <img src={prod.img} alt='Imagen'/>
                </header>
                <footer className='CardFooter'>
                    <div className='CardCategoria'>
                        <span>{prod.category}</span>
                        <h1>{prod.name}</h1>
                    </div>
                    <div className='CardText'>
                        <h2>${prod.price}</h2>
                    </div>
                    <div className='CardStock'>
                        <span>Stock disponible = {prod.stock}</span>
                    </div>
                </footer>
            </article>
        </div>
    )
   
}

export default Item