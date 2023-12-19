import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from '../style/Product'

const Product = () => {
  return (
    <Wrapper className="product-item">
      <Link to="/p/iphone-15">
        <div className="image">
          <img
            src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_300x300/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-thumbtz-650x650.png"
            alt=""
          />
        </div>
        <h3>iPhone 15 Pro Max 256GB</h3>
        <span>
          <h4>33.090.000₫</h4>
          <strike>34.190.000₫</strike>
          <small>-3%</small>
        </span>
      </Link>
    </Wrapper>
  )
}

export default Product
