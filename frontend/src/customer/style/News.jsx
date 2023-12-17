import React from 'react'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'

const NewsWrapper = (props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
}

NewsWrapper.propTypes = {
  children: PropTypes.node,
}

const Wrapper = styled.div`
  background: #323232;
  border-radius: 24px;
  padding: 0 0 15px;
  margin: 0 10px 0 10px;
  a {
    display: block;
    .image {
      img {
        border-radius: 24px 24px 0 0;
        width: 100%;
      }
    }
    .title {
      h3 {
        overflow: hidden;
        padding: 12px;
        height: 78px;
        font-size: 15px;
        line-height: 20px;
        color: #fff;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
      }
    }
    .created {
      span {
        display: block;
        overflow: hidden;
        font-size: 12px;
        line-height: 20px;
        padding: 0 12px;
        color: #757575;
        font-weight: 400;
      }
    }
  }
  &:hover {
    box-shadow:
      -4px -4px 8px rgba(134, 134, 134, 0.2),
      4px 4px 8px rgba(28, 28, 28, 0.4);
  }
`

export default NewsWrapper
