import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { CartItem as Wrapper } from '../style/Cart'
import Quantity from './Quantity'

const CartItem = (props) => {
  const { data } = props
  return (
    <Wrapper>
      <Row>
        <Col lg="2" className="item-image">
          <img src={data?.url} alt="" />
          <div className="btn-remove">Xóa</div>
        </Col>
        <Col lg="10" className="item-infor">
          <div className="detail">
            <Link className="name">{data?.name}</Link>
            <div className="price">
              <span>34.490.000₫</span>
              <strike>34.990.000₫</strike>
            </div>
          </div>
          <div className="promotion">
            <div className="title-promotion">
              <span>6 khuyến mãi</span>
            </div>
          </div>
          <div className="choose">
            <div className="color">
              <button>Titan xanh</button>
            </div>
            <Quantity />
          </div>
        </Col>
      </Row>
    </Wrapper>
  )
}

CartItem.propTypes = {
  data: PropTypes.object,
}

export default CartItem
