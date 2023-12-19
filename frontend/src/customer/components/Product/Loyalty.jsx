import React from 'react'
import { Loyalty as Wrapper } from 'src/customer/style/ProductPage'

const Loyalty = () => {
  return (
    <Wrapper>
      <div className="qr-download">
        <img
          alt=""
          className="lazyloaded"
          width="72"
          height="72"
          src="//cdn.tgdd.vn/mwgcart/topzone/images/promote_loyalty/qr.png?v=1"
        />
        <p>Quét để tải App</p>
      </div>
      <div className="text-area">
        <p className="text-area__title">
          <img
            alt=""
            className=" ls-is-cached lazyloaded"
            width="32"
            height="32"
            src="//cdn.tgdd.vn/mwgcart/topzone/images/promote_loyalty/logo.png"
          />
          <span>Quà Tặng VIP</span>
        </p>
        <p className="text-area__content">
          Tích &amp; Sử dụng điểm <br /> cho khách hàng thân thiết
        </p>
        <p className="text-area__note">Sản phẩm của tập đoàn MWG</p>
      </div>
      <div className="download-link">
        <a href="http://play.google.com/store/apps/details?id=mwg.tgdd.loyalty">
          <img
            alt=""
            className=" ls-is-cached lazyloaded"
            width="136"
            height="40"
            src="//cdn.tgdd.vn/mwgcart/topzone/images/promote_loyalty/ggplay.png"
          />
        </a>
        <a href="https://apps.apple.com/vn/app/qu%C3%A0-t%E1%BA%B7ng-vip/id1589555369">
          <img
            alt=""
            className=" ls-is-cached lazyloaded"
            width="136"
            height="40"
            src="//cdn.tgdd.vn/mwgcart/topzone/images/promote_loyalty/appstore.png"
          />
        </a>
      </div>
    </Wrapper>
  )
}

export default Loyalty
