import React from 'react'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'

const NeedBuyWrapper = (props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
}

NeedBuyWrapper.propTypes = {
  children: PropTypes.node,
}

const Wrapper = styled.div`
  border-bottom: 1px solid #ccc;
  margin-bottom: 35px;
  .slick-slider {
    .slick-prev {
      left: 0;
    }
    .slick-next {
      right: 0;
    }
  }
  .product-item {
    a {
      background-color: transparent;
      &:hover {
        box-shadow: none;
      }
    }
    span,
    h3 {
      color: #000;
    }
  }
  .title {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin: 0 0 40px;
    strong {
      overflow: hidden;
      color: #101010;
      font-size: 26px;
      line-height: 32px;
      font-weight: 700;
    }
    div {
      position: relative;
      i {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        color: #fff;
        background-color: #999;
        display: block;
        cursor: pointer;
        font-size: 10px;
        line-height: 16px;
        text-align: center;
      }
    }
    span {
      position: absolute;
      display: none;
      width: 300px;
      border: 1px solid #f1f1f1;
      border-radius: 4px;
      background-color: #fff;
      font-size: 14px;
      font-weight: 500;
      padding: 7px 10px;
      top: 33px;
      left: -140px;
      line-height: 18px;

      &.active {
        display: block;
      }
    }
  }
`

export default NeedBuyWrapper
