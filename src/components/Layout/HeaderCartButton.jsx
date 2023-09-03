import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import "./headerCartButton.css"
import { CartContext } from "../../context/CartProvider";

const HeaderCartButton = ({ onShowCart }) => {

    const cartContext = useContext(CartContext)

    const totalItemInCart = cartContext.item.reduce((accumulator, currentItem) => {
        accumulator + currentItem.amount
    }, 0)

    return (
        <button className="button" onClick={onShowCart}>
            <span className="icon">
                <CartIcon />
            </span>
            <span>Sepetim</span>
            <span className="badge">{totalItemInCart}</span>
        </button>
    );
};

export default HeaderCartButton;
