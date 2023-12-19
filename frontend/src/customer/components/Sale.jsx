import React, { useEffect, useState } from 'react'
import { List, Top, Wrapper } from '../style/Sale'
import Slider from 'react-slick'

const Sale = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    for (let i = 0; i < 16; i++) {
      setData((pre) => [...pre, i])
    }
  }, [])

  useEffect(() => {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24

    const countDown = new Date('2023-12-19T23:59').getTime()

    const x = setInterval(function () {
      const now = new Date().getTime()
      const distance = countDown - now

      // document.getElementById('days').innerText = Math.floor(distance / day)
      if (Math.floor((distance % day) / hour) < 10)
        document.getElementById('hours').innerText = '0' + Math.floor((distance % day) / hour)
      else document.getElementById('hours').innerText = Math.floor((distance % day) / hour)

      if (Math.floor((distance % hour) / minute) < 10)
        document.getElementById('minutes').innerText = '0' + Math.floor((distance % hour) / minute)
      else document.getElementById('minutes').innerText = Math.floor((distance % hour) / minute)

      if (Math.floor((distance % minute) / second) < 10)
        document.getElementById('seconds').innerText =
          '0' + Math.floor((distance % minute) / second)
      else document.getElementById('seconds').innerText = Math.floor((distance % minute) / second)

      if (distance < 0) clearInterval(x)
    }, 0)
  }, [])

  return (
    <Wrapper
      style={{ background: `url("https://www.topzone.vn/images/christmas/desktop/FS.png")` }}
    >
      <input type="datetime-local" onChange={(e) => console.log(e.target.value)} />
      <Top>
        <div className="image">
          <img src="https://cdn.tgdd.vn/mwgcart/topzone/images/icon-fs.png" alt="" />
        </div>
        <div className="endtime">
          <span className="end-title">Kết thúc trong</span>
          <span className="countdown-timer">
            <label id="hours"></label>
            <label id="minutes"></label>
            <label id="seconds"></label>
          </span>
        </div>
        <div className="listing-timeline active">
          <span>Đang diển ra</span>
          <span className="timeline">08:00 - 23:59</span>
        </div>
        <div className="listing-timeline">
          <span>Ngày mai</span>
          <span className="timeline">08:00 - 23:59</span>
        </div>
      </Top>
      <List>
        <Slider arrows={false} slidesToShow={6} slidesToScroll={6}>
          {data.map((item) => (
            <div className="item" key={item}>
              <div className="image">
                <img
                  src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Products/Images/42/153856/s16/iphone-11-black-thumbtz-650x650.png"
                  alt=""
                />
              </div>
              <h3 className="name">iPhone 14 Pro Max 128GB</h3>
              <strong className="price">
                <span className="price-default">27.190.000₫</span>
                <span className="price-discount">
                  <label>29.390.000₫</label>
                  <small>-7%</small>
                </span>
              </strong>
              <div className="fs-contain">
                <img
                  width="15"
                  height="15"
                  src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/fs-iconfire.png"
                  alt="icon flashsale"
                />
                <span className="rq_count">
                  <i style={{ width: '80%' }} className="fs-iconfire"></i>
                  <b>Còn 15/20</b>
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </List>
    </Wrapper>
  )
}

export default Sale
