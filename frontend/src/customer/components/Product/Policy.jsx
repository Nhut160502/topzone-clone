import React from 'react'
import { PolicyWrapper } from 'src/customer/style'
import { IconBaoHang, IconBoxtskt, IconDoiTra, IconGiaoHang, IconTongDai } from '../Icon'
const data = [
  {
    icon: <IconBoxtskt />,
    title: <span>Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Type C</span>,
  },
  {
    icon: <IconDoiTra />,
    title: (
      <span>
        Hư gì đổi nấy <b>12 tháng</b> tại 3282 siêu thị trên toàn quốc{' '}
        <a href="https://www.topzone.vn/bao-hanh-doi-tra">
          {' '}
          Xem chi tiết chính sách bảo hành, đổi trả{' '}
        </a>
      </span>
    ),
  },
  {
    icon: <IconBaoHang />,
    title: <span>Bảo hành chính hãng 1 năm</span>,
  },
  {
    icon: <IconGiaoHang />,
    title: (
      <span>
        Giao hàng nhanh toàn quốc <a href="/giao-hang">Xem chi tiết</a>
      </span>
    ),
  },
  {
    icon: <IconTongDai />,
    title: (
      <span>
        Tổng đài: <a href="tel:1900969642">1900.9696.42</a> (9h00 - 21h00 mỗi ngày)
      </span>
    ),
  },
]

const Policy = () => {
  return (
    <PolicyWrapper>
      <ul>
        {data.map((item, idx) => (
          <li key={idx}>
            {item.icon}
            {item.title}
          </li>
        ))}
      </ul>
    </PolicyWrapper>
  )
}

export default Policy
