import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import News from '../components/News'
import { HomeWrapper } from '../style'

const dataSlider = [
  {
    url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/12/banner/MacBook-Pro-M3-2880-800-1920x533.png',
    to: '/',
  },
  {
    url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/11/banner/IP15-2880-800-1920x533-1.png',
    to: '/',
  },
  {
    url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/11/banner/AWCS-2880-800-1920x548.png',
    to: '/',
  },
  {
    url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/11/banner/iPad-9-2880-800-1920x533.png',
    to: '/',
  },
  {
    url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1920x533/https://cdn.tgdd.vn/2023/11/banner/AP-Gen-2-2880-800-1920x533.png',
    to: '/',
  },
]

const dataCategory = [
  {
    url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/IP_Desktop.png',
    name: 'iPhone',
  },
  {
    url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/Mac_Desktop.png',
    name: 'Mac',
  },
  {
    url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/IPad_Desktop.png',
    name: 'iPad',
  },
  {
    url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/Watch_Desktop.png',
    name: 'Watch',
  },
  {
    url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/Amthanh_Desktop.png',
    name: 'Âm thanh',
  },
  {
    url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/desktop/PK_Desktop.png',
    name: 'Phụ Kiện',
  },
]

const newsList = [
  {
    title:
      'Cách thoát, đăng xuất Coin Master để chuyển sang thiết bị khác hoặc tạo một tài khoản mới',
    img: 'https://cdn.tgdd.vn/News/Thumb/1556869/lg-1200x675.jpg',
    createdAt: '3 giờ trước',
  },
  {
    title:
      'Cách xóa mụn trên B612, giúp bạn có làn da đẹp như mong muốn để thỏa thích đăng ảnh sống ảo',
    img: 'https://cdn.tgdd.vn/News/Thumb/1557090/cach-xoa-mun-tren-b612-2-1200x675.jpg',
    createdAt: '3 giờ trước',
  },
  {
    title:
      'Cách tải video trên Pinterest chỉ với vài thao tác, giúp bạn có ngay những thước phim đẹp mắt trên thiết bị',
    img: 'https://cdn.tgdd.vn/News/Thumb/1556684/1-thumbs-1200x675.jpg',
    createdAt: '19 giờ trước',
  },
  {
    title:
      'Cách thoát, đăng xuất Coin Master để chuyển sang thiết bị khác hoặc tạo một tài khoản mới',
    img: 'https://cdn.tgdd.vn/News/Thumb/1556869/lg-1200x675.jpg',
    createdAt: '3 giờ trước',
  },
  {
    title:
      'Cách xóa mụn trên B612, giúp bạn có làn da đẹp như mong muốn để thỏa thích đăng ảnh sống ảo',
    img: 'https://cdn.tgdd.vn/News/Thumb/1557090/cach-xoa-mun-tren-b612-2-1200x675.jpg',
    createdAt: '3 giờ trước',
  },
  {
    title:
      'Cách tải video trên Pinterest chỉ với vài thao tác, giúp bạn có ngay những thước phim đẹp mắt trên thiết bị',
    img: 'https://cdn.tgdd.vn/News/Thumb/1556684/1-thumbs-1200x675.jpg',
    createdAt: '19 giờ trước',
  },
  {
    title:
      'Cách thoát, đăng xuất Coin Master để chuyển sang thiết bị khác hoặc tạo một tài khoản mới',
    img: 'https://cdn.tgdd.vn/News/Thumb/1556869/lg-1200x675.jpg',
    createdAt: '3 giờ trước',
  },
  {
    title:
      'Cách xóa mụn trên B612, giúp bạn có làn da đẹp như mong muốn để thỏa thích đăng ảnh sống ảo',
    img: 'https://cdn.tgdd.vn/News/Thumb/1557090/cach-xoa-mun-tren-b612-2-1200x675.jpg',
    createdAt: '3 giờ trước',
  },
  {
    title:
      'Cách tải video trên Pinterest chỉ với vài thao tác, giúp bạn có ngay những thước phim đẹp mắt trên thiết bị',
    img: 'https://cdn.tgdd.vn/News/Thumb/1556684/1-thumbs-1200x675.jpg',
    createdAt: '19 giờ trước',
  },
]

const Home = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    for (let i = 0; i < 8; i++) {
      setData((pre) => [...pre, i])
    }
  }, [])
  return (
    <HomeWrapper>
      <Slider dots>
        {dataSlider.map((item, idx) => (
          <Link to={item.to} key={idx}>
            <img src={item.url} alt="" />
          </Link>
        ))}
      </Slider>
      <div className="container">
        <div className="category">
          <Row className="category-content">
            {dataCategory.map((item, idx) => (
              <Col lg="2" className="category-item" key={idx}>
                <Link to="/">
                  <div className="image">
                    <img src={item.url} alt="" />
                  </div>
                  <span>{item.name}</span>
                </Link>
              </Col>
            ))}
          </Row>
        </div>

        {dataCategory.map((item, idx) => (
          <div className="home-box" key={idx}>
            <div className="box-title">
              <Link to={'/'}>
                <h2>{item.name}</h2>
              </Link>
            </div>
            <div className="box-content">
              <Slider show={4} arrows={false}>
                {data.map((item) => (
                  <Product key={item} />
                ))}
              </Slider>
            </div>
          </div>
        ))}
        <div className="home-box">
          <div className="box-title">
            <Link to="/">
              <h2>TekZone</h2>
            </Link>
          </div>
          <div className="box-content">
            <Slider show={3} arrows={true}>
              {newsList.map((news, idx) => (
                <News key={idx} data={news} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </HomeWrapper>
  )
}

export default Home
