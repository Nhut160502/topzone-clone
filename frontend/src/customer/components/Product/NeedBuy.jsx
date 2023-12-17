import React, { useState } from 'react'
import Slider from 'react-slick'
import Product from '../Product'
import { NeedBuyWrapper } from 'src/customer/style'

const settings = {
  focusOnSelect: true,
  speed: 500,
  autoplaySpeed: 2000,
  infinite: false,
  useTransform: false,
  slidesToShow: 4,
  slidesToScroll: 4,
}

const NeedBuy = () => {
  const [show, setShow] = useState(false)
  return (
    <NeedBuyWrapper>
      <div className="title">
        <strong className="sg-access">Phụ kiện nên có cho iPhone 15 Pro Max</strong>
        <div>
          <i onMouseOver={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            ?
          </i>
          <span className={show && 'active'}>
            Điện thoại này trong hộp chưa có một số phụ kiện. Để trải nghiệm máy tốt hơn, bạn có thể
            cân nhắc mua thêm một số phụ kiện gợi ý bên dưới
          </span>
        </div>
      </div>
      <Slider {...settings}>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </Slider>
    </NeedBuyWrapper>
  )
}

export default NeedBuy
