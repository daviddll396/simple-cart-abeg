import React from 'react'
import "./products.css"

const Products = ({productItems, handleAddProduct}) => {
  return (
    <div className="products">
        {productItems.map((productItem) => (
            <div className="card">
                <div className="image">
                    <img className = "product-image"
                        src={productItem.image}
                        alt={productItem.name} />
                </div>
                <div className="product-name">
                    <h3>{productItem.name}</h3>
                </div>
                <div className="product-price">
                    <p>£ {productItem.price}</p>
                </div>
                <div>
                    <button className="product-add-btn" onClick = {() => handleAddProduct(productItem)}>ADD TO CART</button>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Products