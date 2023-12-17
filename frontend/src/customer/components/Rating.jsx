import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { disActiveRate } from '../providers/rateSlice'

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
    // console.log(files)
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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  transition: 0.3s;
  &.active {
    height: 100vh;
  }
  overflow: hidden;

  .iconcmt-unstarlist {
    background-position: -80px -75px;
    height: 38px;
    width: 40px;

    &.active {
      background-position: -125px -80px;
    }
  }
  .iconcmt-camera {
    background-position: -144px -124px;
    height: 17px;
    width: 20px;
  }
  .iconcmt-shield {
    background-position: -63px -97px;
    height: 14px;
    width: 17px;
  }

  .container {
    width: 680px;
    background-color: #fff;
    position: relative;
    padding-bottom: 30px;
    .title {
      text-align: center;
      p {
        font-size: 14px !important;
        border-bottom: 1px solid #f5f5f7;
        font-size: 16px;
        font-weight: bold;
        line-height: 20px;
        padding: 22px;
      }
    }
    .btn-close {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
    }
    .product {
      margin-top: 20px;
      .image {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 100px;
          height: 100px;
        }
      }
      .name {
        text-align: center;
        margin-top: 20px;
        line-height: 23px;
        font-size: 18px;
        font-weight: 600;
      }
      ul {
        display: flex;
        justify-content: center;
        gap: 1rem;
        li {
          list-style: none;
          text-align: center;
          p {
            margin-top: 5px;
            font-size: 14px;
          }
        }
      }
    }
    .form-rate {
      display: none;
      margin-top: 30px;
      padding: 0 30px;

      &.active {
        display: block;
      }

      .image-review {
        display: flex;
        gap: 1rem;
        img {
          width: 48px;
          height: 48px;
        }
        .item {
          position: relative;
          .delete-image {
            border-radius: 50%;
            background-color: #fff;
            cursor: pointer;
            height: 14px;
            line-height: 14px;
            position: absolute;
            right: 3px;
            top: 3px;
            text-align: center;
            width: 14px;
            z-index: 1;
            &::after {
              background-color: #e5e5e5;
              content: '';
              height: 10px;
              left: 6px;
              position: absolute;
              top: 2px;
              width: 2px;
              rotate: -45deg;
            }
            &::before {
              background-color: #e5e5e5;
              content: '';
              height: 10px;
              left: 6px;
              position: absolute;
              top: 2px;
              width: 2px;
              rotate: 45deg;
            }
          }
        }
      }
      textarea {
        width: 100%;
        border: 1px solid #e5e5e5;
        border-radius: 12px;
        background-color: transparent;
        outline: none;
        color: #000;
        padding: 6px;
      }
      .control {
        .item {
          display: flex;
          gap: 1rem;
          margin: 12px 0;

          input {
            width: 100%;
            border: 1px solid #e5e5e5;
            border-radius: 12px;
            color: #757575;
            font-size: 14px;
            height: 50px;
            line-height: 17px;
            padding: 10px;
            outline: none;
          }
        }
        .item-share {
          justify-content: space-between;
          align-items: baseline;
        }
        .uploads {
          .content-uploads {
            display: flex;
            gap: 3px;
            cursor: pointer;

            p {
              color: #0071e3;
              font-size: 14px;
            }
            span {
              color: #000;
              font-size: 14px;
            }
          }
        }
        .share {
          cursor: pointer;
          display: flex;
          gap: 2px;
          input[type='checkbox'] {
            width: 20px;
            height: auto !important;
          }
          label {
            font-size: 14px;
            color: #000;
          }
        }
      }
      button {
        margin: 12px 0;
        background-color: #0071e3;
        border-radius: 12px;
        border: 1px solid #0071e3;
        cursor: pointer;
        color: #fff;
        display: block;
        padding: 15px;
        transition: 0.3s;
        width: 100%;
        cursor: pointer;

        &.disabled {
          pointer-events: none;
          opacity: 0.5;
        }
      }
      .intro-txt {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        a {
          padding: 0 10px;
        }
        a:last-child {
          border-left: 1px solid #d8d8d8;
        }
      }
    }
    .formrate__information {
      font-size: 13px;
    }
  }
`

export default Rating
