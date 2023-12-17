import React from 'react'
import { Link } from 'react-router-dom'

import { IconHeaderCart, IconHeaderSearch, IconLogo } from '../Icon'
import { AppHeaderWrapper } from 'src/customer/style'

const categories = ['iPhone', 'Mac', 'iPad', 'Watch', 'Âm Thanh', 'Phụ kiện', 'TekZone', 'TopCare']

const AppHeader = () => {
  return (
    <AppHeaderWrapper>
      <div className="container">
        <div className="header-left">
          <div className="logo">
            <Link to="/">
              <IconLogo />
            </Link>
          </div>
        </div>
        <div className="header-center">
          <ul>
            {categories.map((item, idx) => (
              <li key={idx}>
                <Link to="/c/iphone">{item}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="header-right">
          <div className="search">
            <IconHeaderSearch />
          </div>
          <div className="cart">
            <Link to="/cart">
              <IconHeaderCart />
            </Link>
          </div>
        </div>
      </div>
    </AppHeaderWrapper>
  )
}

export default AppHeader
