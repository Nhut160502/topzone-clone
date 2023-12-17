import React from 'react'
import Product from '../Product'
import { ComboWrapper } from 'src/customer/style'

const data = [
  {
    id: '1',
    name: 'Adapter sạc Apple USB-C 30W',
    price: '1490000',
    img: 'https://cdn.tgdd.vn/Products/Images/9499/251677/s16/TimerThumb/adapter-type-c-30w-iphone-ipad-macbook-apple-my1w2-(3).png',
    percent: 13,
  },
  {
    id: '2',
    name: 'Ốp lưng Magsafe cho iPhone 14 Pro Max',
    price: '1790000',
    img: 'https://cdn.tgdd.vn/Products/Images/60/290328/s16/op-lung-magsafe-iphone-14-pro-max-da-apple-mppq3-thumb-650x650.png',
    percent: 25,
  },
  {
    id: '3',
    name: 'Adapter sạc Apple USB-C 30W',
    price: '3990000',
    img: 'https://cdn.tgdd.vn/Products/Images/54/251854/s16/bluetooth-high-performance-beats-mwnv2-mwnw2-mwnx2-trang-tn-650x650.png',
    percent: 22,
  },
]

const Combo = () => {
  return (
    <ComboWrapper>
      <div className="title">
        <strong>Phụ kiện gợi ý cho iPhone</strong>
      </div>
      <div className="content">
        <Product />
        <div className="plus">
          <i className="topzone-plus"></i>
        </div>
        <ul>
          {data.map((item) => {
            const priceOld = Number(item.price).toLocaleString('it-IT')
            const priceCurrent = (
              Math.round((item.price - item.price * (item.percent / 100)) / 10000) * 10000
            ).toLocaleString('it-IT')
            return (
              <li className="active" key={item.id}>
                <div className="img-access">
                  <img src={item.img} alt="" />
                </div>
                <h3>{item.name}</h3>
                <strong>{priceCurrent}₫</strong>
                <small>
                  <strike>{priceOld}₫</strike> -13%{' '}
                </small>

                <i className="topzone-stickchoose"></i>
              </li>
            )
          })}
        </ul>
        <div className="total-bill">
          <strong>34.380.000&nbsp;₫</strong>
          <span>
            <strike>35.680.000&nbsp;₫</strike>
            <em>-3%</em>
          </span>
          <button>
            Mua <b>2</b> sản phẩm
          </button>
        </div>
      </div>
    </ComboWrapper>
  )
}

export default Combo
