import { useState } from 'react'
import './ItemCount.css'


const ItemCount = ({onAdd, stock,}) => {
    const [count, SetCount] = useState(1)
    


    const decrement = () =>{
        if (count >0) {
            SetCount (prev => prev - 1) 
        }
    }
    const increment = () =>{
        if (0 <= count || count <= stock) {
            SetCount (prev => prev + 1) 
        }
        
    }

    const reset = () =>{
        SetCount (0)
    }



    return (
        <div className="Contador">
            <h3 className="Numero">{count}</h3>
            <button className='Button'onClick={increment} >+</button>
            <button className='Button'onClick={decrement} >-</button>
            <button className='Button'onClick={reset}>Limpiar</button>
            <button className='Button'onClick={()=> onAdd(count)} >Agregar al carrito</button>
        </div>
    )
}

export default ItemCount