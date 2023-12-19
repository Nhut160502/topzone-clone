import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import News from '../components/News'
import { Wrapper, Container, Category, Box, About, ListStore } from '../style/Home'
// import { theme } from '../handler/theme'
import Sale from '../components/Sale'

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

const stores = [
  {
    name: 'TopZone Tân Thanh',
    address:
      'Số nhà 583, Tổ dân phố 10, Phường Tân Thanh, Thành phố Điện Biên Phủ, Tỉnh Điện Biên, Việt Nam',
    applePay: true,
  },
  {
    name: 'TopZone Tân Thanh',
    address:
      'Số nhà 583, Tổ dân phố 10, Phường Tân Thanh, Thành phố Điện Biên Phủ, Tỉnh Điện Biên, Việt Nam',
    applePay: true,
  },
  {
    name: 'TopZone Tân Thanh',
    address:
      'Số nhà 583, Tổ dân phố 10, Phường Tân Thanh, Thành phố Điện Biên Phủ, Tỉnh Điện Biên, Việt Nam',
    applePay: true,
  },
  {
    name: 'TopZone Tân Thanh',
    address:
      'Số nhà 583, Tổ dân phố 10, Phường Tân Thanh, Thành phố Điện Biên Phủ, Tỉnh Điện Biên, Việt Nam',
    applePay: true,
  },
  {
    name: 'TopZone Tân Thanh',
    address:
      'Số nhà 583, Tổ dân phố 10, Phường Tân Thanh, Thành phố Điện Biên Phủ, Tỉnh Điện Biên, Việt Nam',
    applePay: true,
  },
  {
    name: 'TopZone Tân Thanh',
    address:
      'Số nhà 583, Tổ dân phố 10, Phường Tân Thanh, Thành phố Điện Biên Phủ, Tỉnh Điện Biên, Việt Nam',
    applePay: true,
  },
  {
    name: 'TopZone Tân Thanh',
    address:
      'Số nhà 583, Tổ dân phố 10, Phường Tân Thanh, Thành phố Điện Biên Phủ, Tỉnh Điện Biên, Việt Nam',
    applePay: true,
  },
  {
    name: 'TopZone Tân Thanh',
    address:
      'Số nhà 583, Tổ dân phố 10, Phường Tân Thanh, Thành phố Điện Biên Phủ, Tỉnh Điện Biên, Việt Nam',
    applePay: true,
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
    <Wrapper>
      <Slider dots>
        {dataSlider.map((item, idx) => (
          <Link to={item.to} key={idx}>
            <img src={item.url} alt="" />
          </Link>
        ))}
      </Slider>

      <Container>
        <img
          style={{ position: 'absolute', width: '100%', zIndex: '-1' }}
          src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/christmas/desktop/BG.png"
          alt=""
        />
        <Sale />
        <Category>
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
        </Category>

        {dataCategory.map((item, idx) => (
          <Box key={idx}>
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
          </Box>
        ))}
        <Box>
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
        </Box>
      </Container>

      <About>
        <div className="video">
          <video width="854" autoPlay loop muted>
            <source src="//cdn.tgdd.vn/mwgcart/topzone/video/Gt-Topzone.mp4" type="video/mp4" />
          </video>
          <div className="gradient-bg"></div>
          <img
            alt=""
            className="logov-topzone"
            src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_570x207/https://cdn.tgdd.vn/mwgcart/topzone/images/logo-video.png?v=4"
          />
        </div>
        <p>
          Tại TopZone, khách hàng yêu mến hệ sinh thái Apple sẽ tìm thấy đầy đủ và đa dạng nhất các
          sản phẩm như iPhone, iPad, Apple Watch, MacBook và các phụ kiện Apple... với không gian
          mua sắm đẳng cấp, hiện đại.
        </p>
        <Link to="/">Đọc thêm</Link>
      </About>
      <ListStore>
        <div className="store-provinces">
          <b>Mở bán tại 98 cửa hàng</b>
          <div className="provinces">
            <span>Chọn tỉnh thành</span>
            <ul>
              <li>Hồ Chí Minh</li>
              <li>Hà Nội</li>
              <li>Đà Nẵng</li>
              <li>An Giang</li>
              <li>Bà Rịa - Vũng Tàu</li>
              <li>Bắc Ninh</li>
              <li>Bến Tre</li>
              <li>Bình Định</li>
              <li>Bình Dương</li>
              <li>Bình Phước</li>
              <li>Bình Thuận</li>
              <li>Cà Mau</li>
              <li>Cần Thơ</li>
              <li>Đắk Lắk</li>
              <li>Điện Biên</li>
              <li>Đồng Nai</li>
              <li>Gia Lai</li>
              <li>Hà Tĩnh</li>
              <li>Hải Phòng</li>
            </ul>
          </div>
        </div>
        <div className="store-list">
          <ul>
            {stores.map((store, idx) => (
              <li key={idx}>
                <a href="/sieu-thi-so-583-to-dan-pho-10-phuong-tan-thanh-thanh-pho-dien-bien-phu-tinh-dien-bien-id-12581">
                  <span>
                    {store.name} <span>Xem chỉ đường</span>
                  </span>
                  <span>{store.address}</span>
                  {store.applePay && (
                    <span id="promoApple">
                      <img
                        src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/mwgcart/topzone/images/common/Icon_ApplePay.png"
                        alt=""
                      />
                      <b> Hỗ trợ thanh toán qua Apple Pay</b>
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </ListStore>
    </Wrapper>
  )
}

export default Home
