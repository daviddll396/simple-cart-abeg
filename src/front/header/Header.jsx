import React from 'react'
import data from "../../back/Data/Data"
import {Link} from "react-router-dom"
import {FiShoppingCart} from "react-icons/fi"
import "./header.css"



function Header() {
  return (
    <header className="header">
        <div >
            <h1>
                <Link to="/" className = "logo">
                    PC STORE
                </Link>
            </h1>
        </div>
        <div className="header-links">
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                
                <li>
                    <Link to="/cart" className="cart" exact>
                        <FiShoppingCart/>
                    </Link>
                </li>
            </ul>

            
        </div>
    </header>
  )
}

export default Header