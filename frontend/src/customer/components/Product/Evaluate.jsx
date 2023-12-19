import React from 'react'
import { IconCmtAllStar } from '../Icon'
import RateList from './RateList'
import Comment from './Comment'
import Rating from './Rating'
import { useDispatch } from 'react-redux'
import { activeRate } from 'src/customer/providers/rateSlice'
import { Evaluete as Wrapper } from 'src/customer/style/ProductPage'

const Evaluate = () => {
  const dispatch = useDispatch()
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default Evaluate
