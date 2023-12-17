import React from 'react'
import { PropTypes } from 'prop-types'
import { styled } from 'styled-components'

const CommentWrapper = (props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
}
CommentWrapper.propTypes = {
  children: PropTypes.node,
}

const Wrapper = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #ebf0f9;
  & + & {
    border-bottom: none;
  }

  .cmt-top {
    display: flex;
    gap: 1rem;
    p {
      text-transform: capitalize;
      color: #222b45;
      display: inline;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
    }
    .confirm-buy {
      color: #2ba832;
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;
    }
  }
  .cmt-intro {
    margin-top: 8px;
    .cmt-top-star {
      display: flex;
      gap: 6px;
    }
  }
  .cmt-content {
    margin-top: 10px;
    p {
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
    }
  }
  .cmt-bottom {
    margin-top: 10px;
    display: flex;
    align-items: center;
    button {
      background-color: transparent;
      border: none;
      color: #222b45;
      display: flex;
      gap: 4px;
      font-size: 15px;
      font-weight: 5000;
      align-items: center;
      padding-right: 12px;
    }
    > span {
      color: #8f9bb3;
      font-size: 14px;
      padding-left: 12px;
      border-left: 1px solid #8f9bb3;
    }
  }
`
export default CommentWrapper
