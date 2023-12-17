import React from 'react'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'

const PromotionWrapper = (props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
}

PromotionWrapper.propTypes = {
  children: PropTypes.node,
}

const Wrapper = styled.div`
  display: block;
  overflow: hidden;
  padding: 20px 15px 10px 15px;
  background: #2f3033;
  border-radius: 12px;
  margin: 0 0 20px;

  span {
    display: block;
    overflow: hidden;
    font-size: 15px;
    line-height: 20px;
    color: #fff;
    padding: 0 5px 6px;
    font-weight: bold;
  }

  small {
    display: block;
    overflow: hidden;
    font-size: 13px;
    line-height: 18px;
    color: #fff;
    border-bottom: 1px solid #414141;
    padding: 0 5px 13px;
    margin: 0 0 16px;
  }

  p {
    position: relative;
    padding-left: 14px;
    padding-bottom: 6px;
    &::before {
      content: '•';
      position: absolute;
      left: 0;
    }
    font-size: 14px;
    line-height: 21px;
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 20px);
    font-weight: 500;
    a {
      display: inline;
      color: #2997ff;
      overflow: hidden;
      font-size: 14px;
      line-height: 21px;
    }
  }
`

export default PromotionWrapper
