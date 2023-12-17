import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { styled } from 'styled-components'
import Slider from 'react-slick'

import Promotion from '../components/Product/Promotion'
import Policy from '../components/Product/Policy'
import Loyalty from '../components/Product/Loyalty'
import NeedBuy from '../components/Product/NeedBuy'
import Combo from '../components/Product/Combo'
import { CapacityWrapper, ColorsWrapper, WrapperProduct } from '../style'
import Evaluate from '../components/Product/Evaluate'
import Specifi from '../components/Product/Specifi'
import Reviews from '../components/Product/Reviews'
import Desc from '../components/Product/Desc'

const media = [
  {
    color: {
      id: '1',
      name: 'Titan xanh',
      code: '#4f5765',
    },
    gallery: [
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-thumbtz-650x650.png',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-titan-2-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-titan-1-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-titan-3-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-titan-4-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-titan-5-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-titan-6-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-titan-7-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-titan-8-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-titan-9-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-titan-10-650x650.jpg',
    ],
  },
  {
    color: {
      id: '2',
      name: 'Titan tự nhiên',
      code: '#bab4a9',
    },
    gallery: [
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-gold-thumbtz-650x650.png',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-natural-titan-1-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-natural-titan-2-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-natural-titan-3-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-natural-titan-4-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-natural-titan-5-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-natural-titan-6-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-natural-titan-7-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-natural-titan-8-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-natural-titan-9-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-natural-titan-10-650x650.jpg',
      '',
    ],
  },
  {
    color: {
      id: '3',
      name: 'Titan trắng',
      code: '#f2f1ec',
    },
    gallery: [
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-white-thumbtz-650x650.png',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-white-titan-1-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-white-titan-2-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-white-titan-3-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-white-titan-4-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-white-titan-5-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-white-titan-6-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-white-titan-7-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-white-titan-8-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-white-titan-9-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-white-titan-10-650x650.jpg',
    ],
  },
  {
    color: {
      id: '4',
      name: 'Titan đen',
      code: '#464749',
    },
    gallery: [
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-black-thumbtz-650x650.png',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-black-titan-1-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-black-titan-2-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-black-titan-3-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-black-titan-4-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-black-titan-5-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-black-titan-6-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-black-titan-7-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-black-titan-8-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-black-titan-9-650x650.jpg',
      'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-black-titan-10-650x650.jpg',
    ],
  },
]

const sizeData = [
  {
    id: '1',
    name: '256GB',
  },
  {
    id: '2',
    name: '512GB',
  },
  {
    id: '3',
    name: '1T',
  },
]

const settingSlider = {
  focusOnSelect: true,
  speed: 500,
  autoplaySpeed: 2000,
  infinite: false,
  useTransform: false,
}

const Product = () => {
  const [colorSelect, setColorSelect] = useState('1')
  const [sizeSelect, setSizeSelect] = useState('1')
  const [slider2, setSlider2] = useState(null)
  const [slider1, setSlider1] = useState(null)
  const [activeTabs, setActiveTabs] = useState('1')

  return (
    <WrapperProduct>
      <div className="product-detail">
        <Row>
          <Col lg="6" className="sticky">
            <div className="product-detail-img-main">
              <Slider asNavFor={slider2} ref={(slider) => setSlider1(slider)} {...settingSlider}>
                {media
                  .find((item) => item.color.id === colorSelect)
                  .gallery.map((item) => (
                    <img key={item} src={item} alt="" />
                  ))}
              </Slider>
            </div>

            <div className="product-detail-img-mini">
              <Slider
                {...settingSlider}
                slidesToShow={6}
                asNavFor={slider1}
                className="slick-custom"
                ref={(slider) => setSlider2(slider)}
              >
                {media
                  .find((item) => item.color.id === colorSelect)
                  .gallery.map((item) => (
                    <div className="item" key={item}>
                      <img src={item} alt="" />
                    </div>
                  ))}
              </Slider>
            </div>
          </Col>
          <Col lg="6">
            <h1 className="product-name">iPhone 15 Pro Max</h1>
            <strong className="product-price">
              33.090.000₫ * <strike>34.190.000₫</strike>
            </strong>
            <CapacityWrapper>
              <span>Dung lượng</span>
              <ul className="product-capacity">
                {sizeData.map((item) => (
                  <li
                    key={item.id}
                    className={sizeSelect === item.id && 'active'}
                    onClick={() => setSizeSelect(item.id)}
                  >
                    <button>{item.name}</button>
                  </li>
                ))}
              </ul>
            </CapacityWrapper>
            <ColorsWrapper>
              <span>Màu: </span>
              <ul className="product-color">
                {media.map((item) => (
                  <li
                    key={item.color.id}
                    onClick={() => setColorSelect(item.color.id)}
                    className={item.color.id === colorSelect && 'active'}
                  >
                    <button style={{ backgroundColor: item.color.code }}></button>
                  </li>
                ))}
              </ul>
            </ColorsWrapper>
            <Promotion />
            <BtnSubmit>
              <button className="btn-buy">Mua ngay</button>
              <div className="btn-inst">
                <button className="btn-inst-company">
                  Mua trả góp
                  <span>Qua công ty tài chính</span>
                </button>
                <button className="btn-inst-card">
                  Trả góp 0% qua thẻ
                  <span>Visa, Mastercard, JCB, Amex</span>
                </button>
              </div>
            </BtnSubmit>
            <Policy />
            <Loyalty />
          </Col>
        </Row>
      </div>
      <div className="description">
        <div className="description-container">
          <NeedBuy />
          <Combo />
          <ul className="description-tabs">
            <li onClick={() => setActiveTabs('1')}>Mô tả</li>
            <li onClick={() => setActiveTabs('2')}>Thông số kỹ thuật</li>
            <li onClick={() => setActiveTabs('3')}>Đánh giá sản phẩm</li>
          </ul>
          <div className="description-content">
            {activeTabs === '1' && <Desc />}

            {activeTabs === '2' && <Specifi />}
            {activeTabs === '3' && <Reviews />}
          </div>
          <Evaluate />
        </div>
      </div>
    </WrapperProduct>
  )
}

const BtnSubmit = styled.div`
  padding-bottom: 10px;
`

export default Product
