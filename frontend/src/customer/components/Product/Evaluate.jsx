import React from 'react'
import { EvaluateWrapper } from 'src/customer/style'
import { IconCmtAllStar } from '../Icon'
import RateList from '../RateList'
import Comment from '../Comment'
import Rating from '../Rating'
import { useDispatch } from 'react-redux'
import { activeRate } from 'src/customer/providers/rateSlice'

const Evaluate = () => {
  const dispatch = useDispatch()
  return (
    <EvaluateWrapper>
      <h2 className="title">Đánh giá iPhone 15 Pro Max</h2>
      <div className="box-content">
        <div className="box-start">
          <div className="point">
            <p>5</p>
            <div className="start">
              <IconCmtAllStar />
              <IconCmtAllStar />
              <IconCmtAllStar />
              <IconCmtAllStar />
              <IconCmtAllStar />
            </div>
            <span>2 đánh giá</span>
          </div>
        </div>
      </div>
      <RateList />
      <Comment />
      <Comment />
      <Rating />
      <div className="btn-rating">
        <button onClick={() => dispatch(activeRate())}>Viết đánh giá</button>
      </div>
    </EvaluateWrapper>
  )
}

export default Evaluate
