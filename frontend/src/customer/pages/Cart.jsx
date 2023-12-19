import React, { useRef, useState } from 'react'
import { IconCartEmpty, IconCartSearch } from 'src/customer/components/Icon'
import CartItem from 'src/customer/components/CartItem'
import {
  BoxForm,
  BoxItem,
  CartContent,
  CartEmpty,
  Security,
  Wrapper,
} from 'src/customer/style/Cart'
import AnimateHeight from 'react-animate-height'
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

const Cart = () => {
  const inputSecurity = useRef()
  const [activeSecurity, setActiveSecurity] = useState(false)
  const [activeForm, setActiveForm] = useState({ orther: false, invoice: false })
  const [location, setLocation] = useState({ provinces: null, districts: null, wards: null })
  const [activeLocation, setActiveLocation] = useState(null)

  const handleCheckOrther = (e) => {
    const checked = e.target.checked
    setActiveForm({ ...activeForm, orther: checked })
  }

  const handleCheckInvoice = (e) => {
    const checked = e.target.checked
    setActiveForm({ ...activeForm, invoice: checked })
  }
  const handleActiveSelect = (type) => {
    switch (type) {
      case 'provinces':
        setActiveLocation('provinces')
        break
      case 'districts':
        if (location.provinces === null) return
        setActiveLocation('districts')
        break
      case 'wards':
        if (location.districts === null) return
        setActiveLocation('wards')
        break

      default:
        break
    }
  }

  const handleClickProvince = (e) => {
    setLocation({ ...location, provinces: e.target.innerText })
    setActiveLocation(null)
  }

  const handleClickDistrict = (e) => {
    setLocation({ ...location, districts: e.target.innerText })
    setActiveLocation(null)
  }

  const handleClickWard = (e) => {
    setLocation({ ...location, wards: e.target.innerText })
    setActiveLocation(null)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!inputSecurity.current.checked) {
      setActiveSecurity(true)
      return
    }
    alert('submit')
  }

  return (
    <Wrapper>
      <div className="container">
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
            <CartItem key={idx} data={item} />
          ))}
        </CartContent>

        <form action="" onSubmit={handleSubmit}>
          <BoxForm>
            <h4 className="box-title">Thông tin khách hàng</h4>
            <BoxItem>
              <div className="box-radio">
                <input type="radio" name="sex" id="male" value="male" />
                <label htmlFor="male">Anh</label>
              </div>
              <div className="box-radio">
                <input type="radio" name="sex" id="female" value="female" />
                <label htmlFor="female">Chị</label>
              </div>
            </BoxItem>
            <div className="infor-customer">
              <BoxItem>
                <div className="box-control">
                  <input type="text" name="fullName" id="fullName" placeholder="Họ và tên" />
                  <div className="validate">
                    <span>Vui lòng nhập họ và tên</span>
                  </div>
                </div>
                <div className="box-control">
                  <input
                    type="tel"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Số điện thoại"
                  />
                  <div className="validate">
                    <span>Vui lòng nhập số điện thoại</span>
                  </div>
                </div>
              </BoxItem>
            </div>
          </BoxForm>

          <BoxForm>
            <h4 className="box-title">Thông tin khách hàng</h4>
            <BoxItem>
              <div className="box-radio">
                <input type="radio" name="method-receive" id="shipping" value="shipping" checked />
                <label htmlFor="shipping">Giao tận nơi</label>
              </div>
              <div className="box-radio">
                <input type="radio" name="method-receive" id="store" value="store" />
                <label htmlFor="store">Nhận tại cửa hàng</label>
              </div>
            </BoxItem>
            <div className="infor-location">
              <BoxItem>
                <div className="box-control">
                  <button type="button" onClick={() => handleActiveSelect('provinces')}>
                    {location.provinces ? location.provinces : 'Chọn tỉnh / thành phố'}
                  </button>
                  <div className={activeLocation === 'provinces' ? 'select active' : 'select'}>
                    <div className="top-select">
                      <input type="text" />
                      <input type="text" placeholder="Tìm theo tỉnh thành" />
                      <IconCartSearch />
                    </div>
                    <ul className="content-select">
                      <li onClick={handleClickProvince}>Hà Nội</li>
                      <li onClick={handleClickProvince}>Đồng Tháp</li>
                      <li onClick={handleClickProvince}>Hà Giang</li>
                      <li onClick={handleClickProvince}>Hà Nam</li>
                      <li onClick={handleClickProvince}>Hà Tĩnh</li>
                      <li onClick={handleClickProvince}>Hải Dương</li>
                      <li onClick={handleClickProvince}>Hải Phòng</li>
                      <li onClick={handleClickProvince}>Hậu Giang</li>
                      <li onClick={handleClickProvince}>Khánh Hòa</li>
                      <li onClick={handleClickProvince}>Lai Châu</li>
                      <li onClick={handleClickProvince}>Thái Bình</li>
                      <li onClick={handleClickProvince}>Thái Nguyên</li>
                    </ul>
                  </div>
                </div>
                <div className="box-control">
                  <button type="button" onClick={() => handleActiveSelect('districts')}>
                    {location.districts ? location.districts : 'Chọn quận / huyện'}
                  </button>
                  <div className={activeLocation === 'districts' ? 'select active' : 'select'}>
                    <div className="top-select">
                      <input type="text" placeholder="Tìm theo quận huyện" />
                      <IconCartSearch />
                    </div>
                    <ul className="content-select">
                      <li onClick={handleClickDistrict}>Hà Nội</li>
                      <li onClick={handleClickDistrict}>Đồng Tháp</li>
                      <li onClick={handleClickDistrict}>Hà Giang</li>
                      <li onClick={handleClickDistrict}>Hà Nam</li>
                      <li onClick={handleClickDistrict}>Hà Tĩnh</li>
                      <li onClick={handleClickDistrict}>Hải Dương</li>
                      <li onClick={handleClickDistrict}>Hải Phòng</li>
                      <li onClick={handleClickDistrict}>Hậu Giang</li>
                      <li onClick={handleClickDistrict}>Khánh Hòa</li>
                      <li onClick={handleClickDistrict}>Lai Châu</li>
                      <li onClick={handleClickDistrict}>Thái Bình</li>
                      <li onClick={handleClickDistrict}>Thái Nguyên</li>
                    </ul>
                  </div>
                </div>
              </BoxItem>

              <BoxItem>
                <div className="box-control">
                  <button type="button" onClick={() => handleActiveSelect('wards')}>
                    {location.wards ? location.wards : 'Chọn phường / xã'}
                  </button>
                  <div className={activeLocation === 'wards' ? 'select active' : 'select'}>
                    <div className="top-select">
                      <input type="text" placeholder="Tìm theo phường xã" />
                      <IconCartSearch />
                    </div>
                    <ul className="content-select">
                      <li onClick={handleClickWard}>Hà Nội</li>
                      <li onClick={handleClickWard}>Đồng Tháp</li>
                      <li onClick={handleClickWard}>Hà Giang</li>
                      <li onClick={handleClickWard}>Hà Nam</li>
                      <li onClick={handleClickWard}>Hà Tĩnh</li>
                      <li onClick={handleClickWard}>Hải Dương</li>
                      <li onClick={handleClickWard}>Hải Phòng</li>
                      <li onClick={handleClickWard}>Hậu Giang</li>
                      <li onClick={handleClickWard}>Khánh Hòa</li>
                      <li onClick={handleClickWard}>Lai Châu</li>
                      <li onClick={handleClickWard}>Thái Bình</li>
                      <li onClick={handleClickWard}>Thái Nguyên</li>
                    </ul>
                  </div>
                </div>
                <div className="box-control">
                  <input className="transparent" type="text" placeholder="Số nhà, tên đường" />
                </div>
              </BoxItem>
            </div>

            <div className="infor-note">
              <BoxItem>
                <div className="box-control">
                  <input type="text" name="note" placeholder="Nhập ghi chú nếu có" />
                </div>
              </BoxItem>
              <BoxItem>
                <div className="box-radio">
                  <input type="checkbox" id="orther" onChange={handleCheckOrther} />
                  <label htmlFor="orther">Gọi người khác nhận hàng</label>
                </div>
              </BoxItem>
              <AnimateHeight duration={500} height={activeForm.orther ? 'auto' : 0}>
                <div className="box-absolute">
                  <BoxItem>
                    <div className="box-radio">
                      <input type="radio" name="sex-orther" id="sex-orther-male" value="male" />
                      <label htmlFor="sex-orther-male">Anh</label>
                    </div>
                    <div className="box-radio">
                      <input type="radio" name="sex-orther" id="sex-orther-female" value="female" />
                      <label htmlFor="sex-orther-female">Chị</label>
                    </div>
                  </BoxItem>
                  <div className="infor-customer">
                    <BoxItem>
                      <div className="box-control">
                        <input type="text" name="fullName" id="fullName" placeholder="Họ và tên" />
                        <div className="validate">
                          <span>Vui lòng nhập họ và tên</span>
                        </div>
                      </div>
                      <div className="box-control">
                        <input
                          type="tel"
                          name="phoneNumber"
                          id="phoneNumber"
                          placeholder="Số điện thoại"
                        />
                        <div className="validate">
                          <span>Vui lòng nhập số điện thoại</span>
                        </div>
                      </div>
                    </BoxItem>
                  </div>
                </div>
              </AnimateHeight>
              <BoxItem>
                <div className="box-radio">
                  <input type="checkbox" id="copy" />
                  <label htmlFor="copy">Chuyển danh bạ, dữ liệu qua máy mới</label>
                </div>
              </BoxItem>
              <BoxItem>
                <div className="box-radio">
                  <input type="checkbox" id="company" onChange={handleCheckInvoice} />
                  <label htmlFor="company">Xuất hóa đơn công ty</label>
                </div>
              </BoxItem>
              <AnimateHeight duration={500} height={activeForm.invoice ? 'auto' : 0}>
                <div className="box-absolute">
                  <BoxItem>
                    <div className="box-control">
                      <input type="text" placeholder="Tên công ty" />
                    </div>
                  </BoxItem>
                  <BoxItem>
                    <div className="box-control">
                      <input type="text" placeholder="Địa chỉ công ty" />
                    </div>
                  </BoxItem>
                  <BoxItem>
                    <div className="box-control">
                      <input type="text" placeholder="Mã số thuế" />
                    </div>
                  </BoxItem>
                </div>
              </AnimateHeight>
            </div>
          </BoxForm>

          <BoxForm>
            <div className="box-total">
              <strong>Tổng tiền</strong>
              <span className="total">67.580.000₫</span>
            </div>
            <div className="box-total">
              <span>Điểm tích lũy Quà Tặng VIP:</span>
              <span className="point">67.580 điểm</span>
            </div>
            <div className="box-total">
              <BoxItem>
                <div className="box-radio">
                  <input type="checkbox" id="security-policy" ref={inputSecurity} />
                  <label className="text-security-policy" htmlFor="security-policy">
                    Tôi đồng ý với{' '}
                    <a
                      href="https://www.topzone.vn/chinh-sach-xu-ly-du-lieu-ca-nhan"
                      className="link-policy"
                    >
                      Chính sách xử lý dữ liệu cá nhân
                    </a>{' '}
                    của TopZone
                  </label>
                </div>
              </BoxItem>
            </div>
            <div className="btn-submit">
              <button type="submit">Đặt hàng</button>
              <small>Bạn có thể lựa chọn các hình thức thanh toán ở bước sau</small>
            </div>
          </BoxForm>
        </form>
      </div>

      <Security className={activeSecurity && 'active'}>
        <div className="container">
          <button className="security-policy-popup_close" onClick={() => setActiveSecurity(false)}>
            ✕
          </button>
          <div className="security-policy-content">
            <h3>Bạn chưa đồng ý với Chính sách xử lý dữ liệu cá nhân của TopZone</h3>
            <p>
              <a href="https://www.topzone.vn/chinh-sach-xu-ly-du-lieu-ca-nhan">
                Chính sách xử lý dữ liệu cá nhân
              </a>{' '}
              nhằm phục vụ tốt hơn cho trải nghiệm mua sắm của bạn. Hãy kiểm tra và nhấn đồng ý để
              tiếp tục đặt hàng!
            </p>
          </div>
          <button className="button"> Đồng ý và tiếp tục đặt hàng </button>
        </div>
      </Security>
      <div
        className={activeLocation !== null ? 'overplay active' : 'overplay'}
        onClick={() => setActiveLocation(null)}
      ></div>
    </Wrapper>
  )
}

export default Cart
