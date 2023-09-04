import "./Cart.css";
import CartItem from "./CartItem";
import Offcanvas from "../UI/Offcanvas";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const Cart = ({ onHideCart }) => {

    const cartContext = useContext(CartContext)
    const hasItems = cartContext.items.length > 0

    const cartItems = (
        <ul className="cart-items">
            {cartContext.items.map((product) => <CartItem key={product.id} product={product} />)}
        </ul>
    )

    return (
        <Offcanvas onHideCart={onHideCart}>
            <div className="cart-head">
                <h2>Sepetim</h2>
                <a href="/" className="cart-close" onClick={onHideCart}>X</a>
            </div>
            {cartItems}
            <div className="total">
                <span>Toplam Değer</span>
                <span>{cartContext.totalAmount}₺</span>
            </div>
            {
                hasItems && <div className="actions">
                    <button className='cart-order'>Sipariş Ver</button>
                    <button className='cart-clear' onClick={cartContext.clearItem}>Temizle</button>
                </div>
            }
        </Offcanvas>
    )
}

export default Cart