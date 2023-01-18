import { createContext, useState } from "react"



export const CartContext = createContext()


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)

    const addItem = (productAdd) => {
        if (!isInCart(productAdd.id)) {
         setCart(prev =>[...prev, productAdd])
       } else {
       console.error('Ya esta agregado')
       }
    }
    const isInCart = (id) => cart.some(prod => id === prod.id)


    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach ( prod => {
            accu += prod.quantity
        })
        return accu
    }


    const totalQuantity = getTotalQuantity ()
    
return (
        <CartContext.Provider value={{addItem,isInCart,totalQuantity}}>
            { children }
        </CartContext.Provider>
    )
}

