import { createContext } from "react"

export const CartContext = createContext()

const CartProvider = ({ children }) => {
    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: () => { },
        removeItem: () => { },
        cleartItem: () => { }
    }

    return (<CartContext.Provider value={cartContext}>
        {children}
    </CartContext.Provider>)
}

export default CartProvider