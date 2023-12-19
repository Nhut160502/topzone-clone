import React from 'react'
import { PropTypes } from 'prop-types'
import { Link } from 'react-router-dom'
import { Wrapper } from '../style/News'
import { getTime } from '../handler/countdown'

const News = (props) => {
  const { data } = props
  const time = getTime(data.time)
  return (
    <Wrapper>
      <Link>
        <div className="image">
          <img src={data.url} alt="" />
        </div>
        <div className="infor">
          <h3>{data.title}</h3>
          <span>{time}</span>
        </div>
      </Link>
    </Wrapper>
  )
}

News.propTypes = {
  data: PropTypes.object,
}

export default News
