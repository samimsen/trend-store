import { useContext } from "react"
import "./cartItem.css"
import { CartContext } from "../../context/CartProvider"

const CartItem = ({ product }) => {

    const cartContext = useContext(CartContext)

    return (
        <li className="cart-item">
            <div className="cart-item-img">
                <img src={product.img} alt="" />
            </div>
            <div className="cart-item-info">
                <div className="cart-item-texts">
                    <b>{product.name}</b>
                    <div>
                        <span>{product.price}₺</span>
                        <span className="cart-item-amount"> x {product.amount}</span>
                    </div>
                </div>
                <a className="cart-item-remove" href="/" onClick={(e) => {
                    e.preventDefault(),
                    cartContext.removeItem(product.id)
                }}>x</a>
            </div>
        </li>
    )
}

export default CartItem