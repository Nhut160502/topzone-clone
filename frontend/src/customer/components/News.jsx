import React from 'react'
import { PropTypes } from 'prop-types'
import { NewsWrapper } from '../style'
import { Link } from 'react-router-dom'

const News = (props) => {
  const { data } = props
  console.log(data)
  return (
    <NewsWrapper>
      <Link>
        <div className="image">
          <img src={data?.img} alt="" />
        </div>
        <div className="title">
          <h3>{data?.title}</h3>
        </div>
        <div className="created">
          <span>{data?.createdAt}</span>
        </div>
      </Link>
    </NewsWrapper>
  )
}

News.propTypes = {
  data: PropTypes.object,
}
export default News
