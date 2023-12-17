import React from 'react'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'

const LoyaltyWrapper = (props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
}

LoyaltyWrapper.propTypes = {
  children: PropTypes.node,
}

const Wrapper = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 4px;
  background-color: #2f3033;
  margin-top: 10px;
  justify-content: space-between;
  .qr-download p {
    font-style: italic;
    font-size: 11px;
    line-height: 13px;
    white-space: nowrap;
    color: #999;
  }
  .text-area {
    text-align: center;
    .text-area__title {
      display: flex;
      align-items: center;
      justify-content: center;
      .text-area__title span {
        margin-left: 5px;
        font-size: 18px;
        line-height: 24px;
        color: #fff;
      }
      .text-area__content {
        font-size: 14px;
        line-height: 17px;
        color: #fff;
        margin-top: 5px;
      }
    }
    .text-area__note {
      font-style: italic;
      font-size: 11px;
      line-height: 13px;
      color: #999;
      margin-top: 5px;
    }
  }
  .download-link {
    a {
      display: block;
      + a {
        margin-top: 5px;
      }
    }
  }
`

export default LoyaltyWrapper
