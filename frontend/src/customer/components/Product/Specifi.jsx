import React, { useState } from 'react'
import { SpecifiWrapper } from 'src/customer/style'

const data = [
  {
    id: '1',
    name: 'Màn hình',
    desc: [
      {
        'Công nghệ màn hình': ['OLED'],
      },
      {
        'Độ phân giải': ['2796 x 1290 Pixels'],
      },
      {
        'Màn hình rộng': ['6.7inch - Tần số quét 120 Hz'],
      },
      {
        'Độ sáng tối đa': ['2000 nits'],
      },
      {
        'Mặt kính cảm ứng': ['Kính cường lực Ceramic Shield'],
      },
    ],
  },
  {
    id: '2',
    name: 'Camera sau',
    desc: [
      { 'Độ phân giải': ['Chính 48 MP & Phụ 12 MP, 12 MP'] },
      {
        'Quay phim': [
          '4K 2160p@30fps',
          '4K 2160p@60fps',
          '8K 4320p@24fps',
          'FullHD 1080p@30fps',
          'FullHD 1080p@60fps',
          'HD 720p@30fps',
        ],
      },
      { 'Đèn Flash': ['Có'] },
      {
        'Tính năng': [
          'Ban đêm (Night Mode)',
          'Bộ lọc màu',
          'Chống rung quang học (OIS)',
          'Cinematic',
          'Deep Fusion',
          'Dolby Vision HDR',
          'Góc rộng (Wide)',
          'Góc siêu rộng (Ultrawide)',
          'Live Photo',
          'Quay chậm (Slow Motion)',
          'Siêu độ phân giải',
          'Smart HDR 5',
          'Toàn cảnh (Panorama)',
          'Trôi nhanh thời gian (Time Lapse)',
          'Xóa phông',
          'Zoom kỹ thuật số',
          'Zoom quang học',
          'Ảnh Raw',
        ],
      },
    ],
  },
  {
    id: '3',
    name: 'Camera trước',
    desc: [
      { 'Độ phân giải': ['12 MP'] },
      {
        'Tính năng': [
          'Smart HDR 5',
          'Bộ lọc màu',
          'Chụp đêm',
          'Live Photo',
          'Nhãn dán (AR Stickers)',
          'Quay video 4K',
          'Quay video Full HD',
          'Quay video HD',
          'Trôi nhanh thời gian (Time Lapse)',
          'Xóa phông',
        ],
      },
    ],
  },
  {
    id: '4',
    name: 'Hệ điều hành & CPU',
    desc: [
      {
        'Hệ điều hành': ['iOS 17'],
      },
      {
        'Chip xử lý (CPU)': ['Apple A17 Pro Bionic 6 nhân'],
      },
      {
        'Tốc độ CPU': ['3.78 GHz'],
      },
      {
        'Chip đồ họa (GPU)': ['Apple GPU 6 nhân'],
      },
    ],
  },
  {
    id: '5',
    name: 'Bộ nhớ & Lưu trữ',
    desc: [
      {
        Ram: ['8GB'],
      },
      {
        'Dung lượng lưu trữ': ['256 GB'],
      },
      {
        'Danh bạ': ['Không giới hạn'],
      },
    ],
  },
  {
    id: '6',
    name: 'Kết nối',
    desc: [
      { 'Mạng di động': ['Hỗ trợ 5G'] },
      { SIM: ['1 Nano SIM & 1 eSIM'] },
      { Wifi: ['6 GHz', 'Wi-Fi 802.11 a/b/g/n/ac/ax', 'Wi-Fi MIMO'] },
      { GPS: ['BEIDOU', 'GALILEO', 'GLONASS', 'A-GPS', 'NavIC', 'QZSS'] },
      { Bluetooth: ['v5.3'] },
      { 'Cổng kết nối/sạc': ['Type-C'] },
      { 'Jack tai nghe': ['Type-C'] },
    ],
  },
  {
    id: '7',
    name: 'Pin & Sạc',
    desc: [
      { 'Dung lượng pin': ['4422 mAh'] },
      { 'Loại pin': ['Li-Ion'] },
      { 'Hỗ trợ sạc tối đa': ['20 W'] },
      { 'Công nghệ pin': ['Sạc không dây MagSafe', 'Sạc ngược không dây', 'Tiết kiệm pin'] },
    ],
  },
  {
    id: '8',
    name: 'Tiện ích',
    desc: [
      { 'Bảo mật nâng cao': ['Mở khoá khuôn mặt Face ID'] },
      {
        'Tính năng đặc biệt': ['Màn hình luôn hiển thị AOD', 'Phát hiện va chạm (Crash Detection)'],
      },
      { 'Kháng nước, bụi': ['IP68'] },
      { 'Ghi âm': ['Có'] },
      { 'Xem phim': ['H.264(MPEG4-AVC)'] },
      { 'Nghe nhạc': ['AAC', 'FLAC', 'MP3'] },
    ],
  },
  {
    id: '9',
    name: 'Thông tin chung',
    desc: [
      { 'Thiết kế': ['Nguyên khối'] },
      { 'Chất liệu': ['Khung Titan & Mặt lưng kính cường lực'] },
      { 'Kích thước, khối lượng': ['Dài 159.9 mm - Ngang 76.7 mm - Dày 8.25 mm - Nặng 221 g'] },
      { 'Thời điểm ra mắt': ['09/2023'] },
    ],
  },
]
const Specifi = () => {
  const [activeSpeifi, setActiveSpeifi] = useState(['1', '2'])

  const handleAactiveSpecfici = (id) => {
    if (activeSpeifi.includes(id)) {
      setActiveSpeifi(activeSpeifi.filter((item) => item !== id))
    } else {
      setActiveSpeifi((pre) => [...pre, id])
    }
  }
  return (
    <SpecifiWrapper>
      {data.map((item) => (
        <div
          key={item.id}
          className={activeSpeifi.includes(item.id) ? 'box-specifi active' : 'box-specifi'}
        >
          <span onClick={() => handleAactiveSpecfici(item.id)}>{item.name}</span>
          <ul>
            {item.desc.map((val, idx) => (
              <li key={idx}>
                <aside>{Object.keys(val)}</aside>
                <aside>
                  {Object.values(val).map((a) => a.map((s, i) => <span key={i}>{s}</span>))}
                </aside>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </SpecifiWrapper>
  )
}

export default Specifi
