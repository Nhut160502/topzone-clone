import React, { useEffect, useState } from 'react'
import ContentLoader from 'react-content-loader'

const Placeholder = () => {
  const [row, setRow] = useState([])
  useEffect(() => {
    for (let index = 0; index < 10; index++) {
      let y = 80
      setRow((pre) => [...pre, y * index])
    }
  }, [])

  console.log(row)
  return (
    <ContentLoader
      height={'100vh'}
      width={'100%'}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      style={{ marginBottom: '4px' }}
    >
      {row.map((item, idx) => {
        return <rect key={idx} x="19" y={item} rx="10" ry="10" width="100%" height="40" />
      })}
    </ContentLoader>
  )
}

export default Placeholder
