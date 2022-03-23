import React from 'react'
import "./cart.css"


function Cart({cartItems}) {



    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)







  return (
    <div className="cart-items">
        <div className="cart-items-header">
            CART ITEMS

            {cartItems.length === 0 && (<div className = "cart-items-empty">NO ITEMS IN CART</div> )}

            <div className = "cart-items-list">
                {cartItems.map((item) => (
                    <div key = {item.id} className="cart-items-list">
                        <img className = "cart-items-image" src={item.image} alt={item.name} />
                    <div className="details">
                        <div className="item-name">
                            {item.name}
                        </div>
                        <div className="item-price">
                            {item.quantity} * £ {item.price}
                        </div>
                    </div>
                        
                    </div>
                    
                ))}
            </div>
            <div className="items-total-price-label">
                Total Price
                <div className="items-total-price">£{totalPrice}</div>
            </div>



        </div>
    </div>
  )
}

export default Cart