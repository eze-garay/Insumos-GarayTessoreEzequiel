import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import React, { useEffect,useState } from "react"



const ItemDetail = ({products}) => {

    const [ItemFind, setItemFind]= useState([])

    useEffect (()=> {
        setItemFind(products.find(products => {
                return products.id = 2;
                })) 
    },[products] )
    console.log(ItemFind)
   

    
    return (
        <div className="ContainerItemDetail" key={ItemFind.id}>
                <article className='ContainerCardDetail'>
                    <div className='Header'>
                        <img alt='Imagen' src={ItemFind.img}></img>
                        <h2>{ItemFind.name}</h2>
                        <h3>{ItemFind.price}</h3>
                    </div>
                    <div className='DescriptionCardDetail'>
                        <p className='DescriptionText'>{ItemFind.description}</p>
                        <h4>{ItemFind.stock}</h4>
                        <div className='ConteinerCount'>
                        <ItemCount/>
                        </div>
                    </div>
                </article>
        </div>

    );

}

export default ItemDetail