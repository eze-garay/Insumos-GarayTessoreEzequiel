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
     
    const clear = () => {
        setCart([])
    };

    const sumTotal = () => {
        return cart.reduce((total, products) => total += products.quantity * products.price, 0);
    } 

    const removeItem = (id) => {
        const deleted = cart.filter((cart) => cart.id !== id);
        setCart(deleted)
        getTotalQuantity(cart.quantity -1);
    };


    const totalQuantity = getTotalQuantity ()
    
return (
        <CartContext.Provider value={{ cart,addItem,isInCart,sumTotal,totalQuantity,removeItem,clear}}>
            { children }
        </CartContext.Provider>
    )
}

