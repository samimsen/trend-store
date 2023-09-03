import { useState } from "react"
import Cart from "./components/Cart/Cart"
import Hero from "./components/Hero/Hero"
import Header from "./components/Layout/Header"
import Products from "./components/Products/Products"
import CartProvider from "./context/CartProvider"

function App() {

  const [cartIsShow, setCartIsShow] = useState(false)

  const showCartHandler = () => {
    setCartIsShow(true)
  }

  const hideCartHandler = (e) => {
    e.preventDefault()
    setCartIsShow(false)
  }

  return (
    <CartProvider>
      {cartIsShow && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <Hero />
      <Products onHideCart={hideCartHandler} />
    </CartProvider>
  )
}

export default App
