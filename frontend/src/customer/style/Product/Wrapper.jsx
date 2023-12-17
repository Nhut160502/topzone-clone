import React from 'react'
import { PropTypes } from 'prop-types'
import { styled } from 'styled-components'

const WrapperProduct = (props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
}

WrapperProduct.propTypes = {
  children: PropTypes.node,
}
const Wrapper = styled.div`
  .product-detail {
    min-width: 1180px;
    max-width: 1180px;
    margin: 20px auto 40px auto;
    color: #fff;

    .sticky {
      position: sticky;
      top: 0;
      height: calc(100% - 680px);
    }

    .product-detail-img-main {
      display: block;
      img {
        width: '100%';
      }
    }
    .product-detail-img-mini {
      margin-top: 1rem;
      .item {
        padding: 5px;
      }
    }
  }
  .description {
    background-color: #fff;
    overflow: hidden;
    .description-container {
      max-width: 1200px;
      min-width: 1024px;
      margin: 45px auto 0 auto;
      overflow: hidden;
      .description-tabs {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-bottom: 40px;
        padding-top: 40px;
        li {
          list-style: none;
          color: #3a3a3a;
          padding: 10px 18px;
          font-size: 15px;
          line-height: 20px;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
          border: 1px solid #e5e5e5;

          &.active {
            border: 1px solid #0055d4;
          }
        }
      }
      .description-content {
        max-width: 680px;
        margin: 0 auto;
      }
    }
  }
`

export default WrapperProduct
