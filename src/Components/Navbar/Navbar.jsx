import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu, setMenu] = useState("shop") //to set menu items that are clicked
    const {getTotalCartItems} = useContext(ShopContext) //get the function from context api
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        {/* when one option is clicked in menu, that will be underlined with <hr/> tag */}
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("men")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link> {menu==="men"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("women")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link> {menu==="women"?<hr/>:<></>}</li>
        <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link> {menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to="/login"><button>Login</button></Link>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar