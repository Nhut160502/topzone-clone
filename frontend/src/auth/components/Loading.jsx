import React from 'react'
import ContentLoader from 'react-content-loader'
import { useSelector } from 'react-redux'

const Loading = () => {
  const loading = useSelector((state) => state?.loading)
  console.log(loading)
  return (
    <ContentLoader
      height={'65vh'}
      width={'100%'}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"
      style={{ marginBottom: '4px', display: loading?.active === false && 'none' }}
    >
      <rect x="19" y="20" rx="10" ry="10" width="100%" height="100%" />
    </ContentLoader>
  )
}

export default Loading
