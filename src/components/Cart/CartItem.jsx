import "./cartItem.css"

const CartItem = ({ product }) => {
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
                        <span> x{product.amount}</span>
                    </div>
                </div>
                <a className="cart-item-remove" href="/">x</a>
            </div>
        </li>
    )
}

export default CartItem