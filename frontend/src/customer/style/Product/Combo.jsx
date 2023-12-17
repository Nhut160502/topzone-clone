import React from 'react'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'

const ComboWrapper = (props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
}

ComboWrapper.propTypes = {
  children: PropTypes.node,
}

const Wrapper = styled.div`
  .title {
    strong {
      display: block;
      overflow: hidden;
      color: #101010;
      font-size: 26px;
      line-height: 32px;
      margin: 0 0 40px;
      font-weight: 700;
    }
  }
  .content {
    display: flex;
    align-items: center;
    gap: 2rem;

    .plus {
      width: 20px;
      height: 20px;
      .topzone-plus {
        display: block;
        background-image: url(https://cdn.tgdd.vn/mwgcart/topzone/images/icon-topzone.webp);
        background-repeat: no-repeat;
        background-position: -144px -90px;
        width: 20px;
        height: 20px;
        background-size: 514px 226px;
      }
    }

    ul {
      display: flex;
      gap: 20px;
      li {
        &.active {
          i {
            background-position: -192px -89px;
          }
        }
        cursor: pointer;
        position: relative;
        height: 300px;
        border: 1px solid #e5e5e5;
        border-radius: 12px;
        padding: 13px 15px 14px;
        list-style: none;
        .img-access {
          display: block;
          overflow: hidden;
          width: 150px;
          margin: auto;
          height: 170px;
          position: relative;
          img {
            display: block;
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto;
          }
        }

        i {
          position: absolute;
          top: 13px;
          left: 15px;
          background-position: -167px -89px;
          cursor: pointer;
          background-image: url(https://cdn.tgdd.vn/mwgcart/topzone/images/icon-topzone.webp);
          background-repeat: no-repeat;
          display: inline-block;
          line-height: 30px;
          vertical-align: middle;
          background-size: 514px 226px;
          width: 20px;
          height: 20px;
        }
        h3 {
          display: block;
          overflow: hidden;
          font-size: 15px;
          line-height: 20px;
          text-align: center;
          padding: 10px 0;
          max-height: 53px;
        }
        strong {
          display: block;
          overflow: hidden;
          font-size: 20px;
          line-height: 25px;
          color: #101010;
          text-align: center;
          font-weight: 700;
        }
        small {
          display: block;
          overflow: hidden;
          font-size: 15px;
          line-height: 20px;
          color: #323232;
          text-align: center;
        }
      }
    }

    .total-bill {
      strong {
        display: block;
        overflow: hidden;
        font-size: 20px;
        line-height: 25px;
        padding: 5px 0 0;
        text-align: center;
        color: #171d29;
        font-weight: 700;
      }

      span {
        display: block;
        overflow: hidden;
        font-size: 18px;
        line-height: 23px;
        color: #171d29;
        text-align: center;
      }

      button {
        display: block;
        overflow: hidden;
        width: 289px;
        background: #0071e3;
        border-radius: 12px;
        padding: 18px 0;
        text-align: center;
        color: #fff;
        font-size: 20px;
        line-height: 25px;
        margin: 20px 0 0;
      }
    }

    .product-item {
      a {
        background-color: transparent;
        &:hover {
          box-shadow: none;
        }
        .image {
          img {
            width: 170px !important;
            height: 170px !important;
          }
        }
      }
      span,
      h3 {
        color: #000;
      }
    }
  }
`

export default ComboWrapper
