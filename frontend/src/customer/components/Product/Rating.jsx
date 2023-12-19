import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { disActiveRate } from '../../providers/rateSlice'
import { Rating as Wrapper } from 'src/customer/style/ProductPage'

const star = ['Rất tệ', 'Tệ', 'Tạm ổn', 'Tốt', 'Rất tốt']

const Rating = () => {
  const dispatch = useDispatch()
  const [openForm, setOpenForm] = useState(false)
  const rate = useSelector((state) => state?.rate)
  const [reviewsStar, setReviewStar] = useState(-1)
  const inputFile = useRef()
  const [imgReviews, setImgReviews] = useState([])
  const [values, setValues] = useState({ fullName: '', phoneNumber: '', desc: '' })
  const [disabledBtn, setDisabledBtn] = useState(true)

  const handleCloseForm = () => {
    dispatch(disActiveRate())
    setTimeout(() => {
      setOpenForm(false)
      setReviewStar(-1)
    }, 1000)
  }

  const handleClickStar = (idx) => {
    setReviewStar(idx)
    setOpenForm(true)
  }

  const handleOpenFile = () => {
    document.getElementById('file').click()
  }

  const handleChangeFile = (e) => {
    const files = e.target.files
    if (files.length > 3) {
      setImgReviews([])
      return alert('Chỉ cho phép tối đa 3 file. Quý khách vui lòng gửi lại.')
    } else {
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        setImgReviews((pre) => [...pre, URL.createObjectURL(file)])
      }
    }
    inputFile.current.value = ''
  }

  const handleRemoveImage = (item) => {
    setImgReviews(imgReviews.filter((val) => val !== item))
  }

  useEffect(() => {
    if (values.desc !== '' && values.fullName !== '' && values.phoneNumber !== '')
      setDisabledBtn(false)
    else setDisabledBtn(true)
  }, [values])

  return (
    <Wrapper className={rate?.active && 'active'}>
      <div className="container">
        <div className="btn-close" onClick={handleCloseForm}></div>
        <div className="title">
          <p>Đánh giá sản phẩm</p>
        </div>
        <div className="product">
          <div className="image">
            <img
              src="https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-blue-thumbtz-650x650.png"
              alt=""
            />
          </div>
          <p className="name">iPhone 15 Pro Max</p>
          <ul className="rating-topzonecr-star">
            {star.map((item, idx) => (
              <li key={idx}>
                <i
                  className={
                    idx <= reviewsStar ? 'iconcmt-unstarlist active' : 'iconcmt-unstarlist'
                  }
                  onClick={() => handleClickStar(idx)}
                ></i>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={openForm ? 'form-rate active' : 'form-rate'}>
          <form action="">
            <div className="control">
              <textarea
                name="desc"
                id=""
                rows="5"
                onChange={(e) => setValues({ ...values, desc: e.target.value })}
              ></textarea>
            </div>
            <div className="control">
              <div className="item item-share">
                <div className="share">
                  <input type="checkbox" id="share" />
                  <label htmlFor="share">Tôi sẽ giới thiệu sản phẩm cho bạn bè, người thân</label>
                </div>
                <div className="uploads">
                  <div className="content-uploads" onClick={handleOpenFile}>
                    <input
                      ref={inputFile}
                      onChange={handleChangeFile}
                      type="file"
                      name=""
                      hidden
                      multiple
                      id="file"
                    />
                    <i className="iconcmt-camera"></i>
                    <p>Gửi ảnh thực tế</p>
                    <span>(tối đa 3 ảnh)</span>
                  </div>
                  <div className="image-review">
                    {imgReviews.length > 0 &&
                      imgReviews.map((item) => (
                        <div className="item" key={item}>
                          <img src={item} alt="" />
                          <i className="delete-image" onClick={() => handleRemoveImage(item)}></i>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="control">
              <div className="item">
                <input
                  name="fullName"
                  onChange={(e) => setValues({ ...values, fullName: e.target.value })}
                  type="text"
                  placeholder="Họ tên (bắt buộc)"
                />
                <input
                  name="phoneNumber"
                  onChange={(e) => setValues({ ...values, phoneNumber: e.target.value })}
                  type="number"
                  placeholder="Số điện thoại (bắt buộc)"
                />
              </div>
              <p className="formrate__information">
                <i className="iconcmt-shield"></i>
                TopZone cam kết bảo mật số điện thoại của bạn
              </p>
            </div>
            <button className={disabledBtn && 'disabled'} type="submit">
              Gửi đánh giá
            </button>
            <p className="intro-txt">
              <a target='"_blank"' href="/quy-dinh-dang-binh-luan">
                Quy định đánh giá
              </a>
              <a href="/bao-mat-thong-tin">Chính sách bảo mật thông tin</a>
            </p>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

export default Rating
