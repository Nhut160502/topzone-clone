import React, { useState } from 'react'
import { Styled, CartEmpty, CartContent, InforCustomer, GetGoods } from './Styled'
import { IconCartEmpty } from 'src/customer/components/Icon'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Input, { Checkbox } from 'src/customer/components/Input'
const data = [
  {
    id: '1',
    name: 'iPhone 15 Pro Max 256GB ',
    price: '34.990.000',
    url: 'https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-gold-thumbtz-200x200.png',
    percent: '4',
    colorSelect: '1',
    colors: [
      {
        id: '1',
        name: 'Titan tự nhiên',
      },
      {
        id: '2',
        name: 'Titan trắng',
      },
      {
        id: '3',
        name: 'Titan đen',
      },
    ],
  },
  {
    id: '2',
    name: 'iPhone 15 Pro Max 256GB',
    price: '34.190.000',
    url: 'https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-thumbtz-200x200.png',
    percent: '4',
    colorSelect: '1',
    colors: [
      {
        id: '1',
        name: 'Titan tự xanh',
      },
      {
        id: '2',
        name: 'Titan trắng',
      },
      {
        id: '3',
        name: 'Titan đen',
      },
    ],
  },
]

const InFor = (props) => {
  return (
    <InforCustomer {...props}>
      <h4 className="cart-title">Thông tin khách hàng</h4>
      <div className="radio-flex">
        <Checkbox label="Anh" name="sex" value="male" />
        <Checkbox label="Chị" name="sex" value="female" />
      </div>
      <div className="content">
        <div className="item-form">
          <input type="text" name="fullName" id="fullName" placeholder="Họ và tên" />
          <div className="validate">
            <span>Vui lòng nhập họ và tên</span>
          </div>
        </div>
        <div className="item-form">
          <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Số điện thoại" />
          <div className="validate">
            <span>Vui lòng nhập số điện thoại</span>
          </div>
        </div>
      </div>
    </InforCustomer>
  )
}

const Cart = () => {
  return (
    <Styled>
      {data.length <= 0 && (
        <CartEmpty>
          <div className="cart-icon">
            <IconCartEmpty />
          </div>
          <span>Giỏ hàng của bạn chưa có sản phẩm nào!</span>
          <p>
            Hỗ trợ:{' '}
            <a style={{ color: '#288ad6' }} href="tel:1900969642">
              1900 9696 42
            </a>{' '}
            (08h00 - 21h30)
          </p>
        </CartEmpty>
      )}
      <CartContent>
        {data.map((item, idx) => (
          <div className="item" key={idx}>
            <Row>
              <Col lg="2" className="item-image">
                <img src={item.url} alt="" />
                <div className="btn-remove">Xóa</div>
              </Col>
              <Col lg="10" className="item-infor">
                <div className="detail">
                  <Link className="name">{item.name}</Link>
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
                  <div className="quantity">
                    <div className="minus"></div>
                    <input type="number" value={1} />
                    <div className="plus"></div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </CartContent>
      <InFor />
      <form action="">
        <GetGoods>
          <h4 className="cart-title">Thông tin khách hàng</h4>
          <div className="radio-flex">
            <div className="item-location">
              <input type="radio" name="location" id="male" value="male" />
              <label htmlFor="male">Giao tận nơi</label>
            </div>
            <div className="item-location">
              <input type="radio" name="location" id="female" value="female" />
              <label htmlFor="female">Nhận tại cửa hàng</label>
            </div>
          </div>
          <div className="content">
            <div className="item-form">
              <button type="button">Chọn tỉnh / thành phố</button>
              <div className="select"></div>
            </div>
            <div className="item-form">
              <button type="button">Chọn quận / huyện</button>
              <div className="select"></div>
            </div>
            <div className="item-form">
              <button type="button">Chọn phường / xã</button>
              <div className="select"></div>
            </div>
            <div className="item-form">
              <input type="text" placeholder="Số nhà, tên đường" />
            </div>
          </div>
          <div className="note">
            <input type="text" name="note" placeholder="Nhập ghi chú nếu có" />
            <div className="note-item">
              <div className="item-form">
                <input type="checkbox" id="orther" />
                <label htmlFor="orther">Gọi người khác nhận hàng</label>
              </div>
              <div className="item-note-content">{/* <InFor className="orther" /> */}</div>
            </div>
            <div className="note-item">
              <div className="item-form">
                <Input type="checkbox" />
                <label htmlFor="copy-data">Chuyển danh bạ, dữ liệu qua máy mới</label>
              </div>
            </div>
            <div className="note-item">
              <Input type="" />
            </div>
          </div>
        </GetGoods>
      </form>
    </Styled>
  )
}

export default Cart
