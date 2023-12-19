import React from 'react'
import { IconCmtConFirm, IconCmtLike, IconStarBuy } from '../Icon'
import { Comment as Wrapper } from 'src/customer/style/ProductPage'

const Comment = () => {
  return (
    <Wrapper>
      <div className="cmt-top">
        <p className="name">Lý Minh Hiếu</p>
        <div className="confirm-buy">
          <IconCmtConFirm />
          <span>Đã mua tại TopZone</span>
        </div>
      </div>
      <div className="cmt-intro">
        <div className="cmt-top-star">
          <IconStarBuy />
          <IconStarBuy />
          <IconStarBuy />
          <IconStarBuy />
          <IconStarBuy />
        </div>
      </div>
      <div className="cmt-content">
        <p className="cmt-txt">
          Mình vừa mua 1 máy Iphone 15 Pro Max 256GB bên mình ngày 11/11. Ad cho mình hỏi 1 vấn đề
          ạ.Máy của mình khi tắt màn hình 1 lúc là có khi bật lại máy tự động giảm độ sáng mặc dù
          mình đã tắt chế độ True Tone. Còn lại thì sản phẩm hoạt động tốt ạ.
        </p>
      </div>
      <div className="cmt-bottom">
        <button>
          <IconCmtLike />
          <span>Hữu ích (28)</span>
        </button>
        <span className="cmtd dot-line">Đã dùng khoảng 1 ngày</span>
      </div>
    </Wrapper>
  )
}

export default Comment
