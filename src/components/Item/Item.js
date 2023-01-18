import'./Item.css'
import React from 'react'
import { Link } from 'react-router-dom'


const Item = ({id, img, category, name, price, }) => {
    return (
        <div className='CardWard'>
            <article className='Card'>
                <header className='CardHeader'>
                    <img src={img} alt='Imagen'/>
                </header>
                <footer className='CardFooter'>
                    <div className='CardCategoria'>
                        <span>{category}</span>
                        <h1>{name}</h1>
                    </div>
                    <div className='CardText'>
                        <h2>${price}</h2>
                    </div>
                    <Link to={`/detail/${id}`}  className='CardButton'> Ver detalle</Link>
                </footer>
            </article>
        </div>
    
    )
   
}

export default Item