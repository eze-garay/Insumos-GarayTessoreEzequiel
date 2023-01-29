import './Checkout.css'
import Loader from '../Loader/Loader'
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from "firebase/firestore"
import { useContext, useState } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../services/firebase/firebaseConfig"

import { useNavigate } from "react-router-dom"

const Checkout = () => {
    const [nombre, setNombre] = useState ('')
    const [telefono, setTelefono] = useState ('')
    const [email, setEmail] = useState ('')
    const [mensaje, setMensaje] = useState ('')
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState('')
    const { cart, sumTotal, clear } = useContext(CartContext)

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name: nombre,
                    phone: telefono,
                    email: email,
                    message: mensaje
                },
                items: cart,
                total: sumTotal()
            }
    
            const batch = writeBatch(db)
    
            const ids = cart.map(prod => prod.id)
            console.log(ids)
    
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            // getDocs(productsRef).then(productsAddedToCartFromFirestore => {
    
            // })
    
            const productsAddedToCartFromFirestore = await getDocs(productsRef)
            const { docs } = productsAddedToCartFromFirestore
    
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity})
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
    
                const orderAdded = await addDoc (orderRef, objOrder)
    
                const { id } = orderAdded
                setOrderId(id)

                clear()

                setTimeout(() => {
                    navigate('/')
                }, 3000)

                console.log(id)
            } else {
                console.error('hay productos fuera de stock')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
       
        
    }

    if(loading) {
        return <Loader loader='Generando orden...' />
    }

    if(orderId) {
        return (
            <div>
                <h3 className='ContainerH'>El Id de su compra es: {orderId}</h3>
            </div>
        )
    }

   

    return (

            <div className="contenedor">
                    <div className="wrapper animated bounceInLeft">
                    <h3 className='text'>Complete el siguiente formulario para continuar con la compra</h3>
                    <h4 className='text'> Su Orden:</h4>
                    {cart.map( product => (
                        <div className="info-empresa">
                            <ul className="servicios" key={product.id}>
                            <li><i className="fa fa-mobile"></i>{product.quantity} {product.name}</li>
                            </ul>
                        </div>
                    ) )}
                     <h4 className='text'>Total a pagar: $ {sumTotal()} </h4>

                    <div className="contacto">
                        <h3>Datos del titular</h3>
                        <form className="formulario">
                        <p>
                            <label>Nombre</label>
                            <input type="text" value={nombre} id="nombre" required onInput={(e) => {setNombre(e.target.value)}} />
                        </p>
                        <p>
                            <label>Correo</label>
                            <input type="email" value={email} id="email" required onInput={(e) => {setEmail(e.target.value)}} />
                        </p>
                        <p>
                            <label>Teléfono</label>
                            <input type="text" value={telefono} id="teléfono" required onInput={(e) => {setTelefono(e.target.value)}} />
                        </p>
                        <p className="full">
                            <label>Mensaje</label>
                            <textarea value={mensaje} id="mensaje" required onInput={(e) => {setMensaje(e.target.value)}}></textarea>
                        </p>
                        <p className="full">
                            <button className="boton-enviar" onClick={createOrder}>Finalizar Compra</button>
                        </p>
                        </form>
                    </div>
                    </div>
            </div> 
   
    )
}

export default Checkout