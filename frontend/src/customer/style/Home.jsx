import React from 'react'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'

const HomeWrapper = (props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
}

HomeWrapper.propTypes = {
  children: PropTypes.node,
}

const Wrapper = styled.div`
  .home-box {
    margin: 50px auto 80px;

    .box-title {
      a {
        display: flex;
        justify-content: center;
        margin: 0 auto 50px;
        h2 {
          color: #fff;
          font-weight: 600;
          font-size: 36px;
          line-height: 62px;
        }
      }
    }
    .box-content {
      width: calc(100% - 10px);
      margin-left: -10px;
    }
  }
  .container {
    max-width: 1200px;
    min-width: 1024px;
    width: 100%;
    margin: auto;
    margin: 50px auto 80px;

    .category {
      margin: 50px auto 80px;
      width: 100%;
      .category-item {
        width: calc(16.66666667% - 24px);
        margin: 0 10px;
        border-radius: 12px;
        background: #323232;
        height: 220px;
        img {
          width: 180px;
        }
        span {
          display: block;
          text-align: center;
        }
        a {
          text-decoration: none;
          color: #fff;
        }
        &:hover {
          box-shadow:
            -4px -4px 8px rgba(134, 134, 134, 0.2),
            4px 4px 8px rgba(28, 28, 28, 0.4);
        }
      }
    }
  }
`

export default HomeWrapper
