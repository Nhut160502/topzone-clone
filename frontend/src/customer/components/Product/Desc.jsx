import React, { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { DescImage } from 'src/customer/style/ProductPage'

const data = [
  'https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-210923-113413.jpg',
  'https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-210923-113413-1.jpg',
  'https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-051023-102933.jpg',
  'https://cdn.tgdd.vn/Products/Images/42/305658/s16/iphone-15-pro-max-210923-113414-1.jpg',
]

const Desc = () => {
  const [showDescImage, setShowDescImage] = useState(false)

  return (
    <DescImage>
      <AnimateHeight height={showDescImage ? 'auto' : 300} easing="auto">
        {data.map((item, idx) => (
          <img key={idx} src={item} alt="" />
        ))}
      </AnimateHeight>
      {!showDescImage && (
        <>
          <div className={showDescImage ? 'article' : 'article active'}></div>
          <div className="see-more">
            <button onClick={() => setShowDescImage(true)}>Xem thêm</button>
          </div>
        </>
      )}
    </DescImage>
  )
}

export default Desc
