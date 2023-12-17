import React from 'react'
import { PromotionWrapper } from 'src/customer/style'

const Promotion = () => {
  return (
    <PromotionWrapper>
      <span>Khuyến mãi</span>
      <small>Giá và khuyến mãi dự kiến áp dụng đến 23:00 | 31/12</small>
      <div className="promotion-content">
        <p>
          Thu cũ Đổi mới: Giảm đến 2 triệu (Tuỳ model máy cũ, Không kèm thanh toán qua cổng online,
          mua kèm){' '}
          <a href="https://www.topzone.vn/tekzone/topzone-iphone-ipad-giam-khi-tham-gia-thu-cu-doi-moi-1417401">
            Xem chi tiết
          </a>
        </p>
        <p>
          Hoàn tiền nếu ở đâu rẻ hơn (Trong vòng 7 ngày; chỉ áp dụng tại siêu thị){' '}
          <a href="https://www.topzone.vn/tekzone/bao-gia-tot-nhat-hoan-tien-neu-co-chenh-lech-1533364">
            Xem chi tiết
          </a>
        </p>
        <p>
          Hoàn 200,000đ cho chủ thẻ tín dụng HOME CREDIT khi thanh toán đơn hàng từ 5,000,000đ{' '}
          <a href="https://www.topzone.vn/tekzone/hoan-200k-khi-thanh-toan-don-hang-tu-5-trieu-dong-qua-the-tin-dung-home-credit-1553596">
            (Xem chi tiết tại đây)
          </a>
        </p>
        <p>
          Nhập mã VNPAYTGDD giảm từ 50,000đ đến 200,000đ (Áp dụng tùy giá trị đơn hàng) khi thanh
          toán qua VNPAY-QR{' '}
          <a href="https://www.topzone.vn/tekzone/nhap-ma-vnpaytgdd-giam-tu-50000d-den-200000d-khi-thanh-toan-vnpay-qr-1555777">
            (Xem chi tiết tại đây)
          </a>
        </p>
        <p>
          Nhập mã VNPAYTAO giảm ngay 200K cho đơn hàng từ 15 Triệu, chỉ áp dụng thanh toán VNPAY-QR
          tại cửa hàng{' '}
          <a href="https://www.topzone.vn/tekzone/giam-ngay-200k-khi-thanh-toan-iphone-15-series-qua-vnpay-1552876">
            (Xem chi tiết tại đây)
          </a>
        </p>
        <p>
          Nhập mã ZLPIP15 giảm ngay 300K cho đơn hàng từ 20 Triệu, chỉ áp dụng thanh toán qua Ví
          ZALOPAY tại cửa hàng{' '}
          <a href="https://www.topzone.vn/tekzone/nhap-ma-zlpip15-giam-ngay-300k-khi-mua-iphone-15-1553907">
            (Xem chi tiết tại đây)
          </a>
        </p>
      </div>
    </PromotionWrapper>
  )
}

export default Promotion
