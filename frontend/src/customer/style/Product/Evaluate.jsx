import React from 'react'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'

const EvaluateWrapper = (props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
}

EvaluateWrapper.propTypes = {
  children: PropTypes.node,
}

const Wrapper = styled.div`
  max-width: 780px;
  border-radius: 12px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 30px;
  color: #333;
  margin-top: 30px;
  border: 1px solid #e5e5e5;
  .title {
    font-size: 26px;
    font-weight: bold;
    line-height: 32px;
    text-align: left;
  }
  .point {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    p {
      color: #ff9f00;
      font-size: 28px;
      font-weight: bold;
      line-height: 28px;
    }
    span {
      color: #0071e3;
      font-size: 14px;
    }
  }

  .btn-rating {
    margin-top: 25px;
    button {
      width: 50%;
      background-color: #0071e3;
      border: 1px solid #0071e3;
      color: #fff;
      padding: 14px 10px;
      font-size: 16px;
      border-radius: 8px;
      transition: 0.3s;

      &:hover {
        background-color: #fff;
        color: #0071e3;
      }
    }
  }
`

export default EvaluateWrapper
