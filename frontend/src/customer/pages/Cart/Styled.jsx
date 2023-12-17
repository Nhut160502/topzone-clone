import React from 'react'
import { PropTypes } from 'prop-types'
import { styled } from 'styled-components'

export const CartEmpty = (props) => {
  const { children } = props
  return <CartEmptyStyled>{children}</CartEmptyStyled>
}

export const CartContent = (props) => {
  const { children } = props
  return <CartContentStyled>{children}</CartContentStyled>
}

export const Styled = (props) => {
  const { children } = props
  return (
    <Wrapper>
      <div className="container">{children}</div>
    </Wrapper>
  )
}

export const InforCustomer = (props) => {
  const { children } = props
  return <InforCustomerWrapper>{children}</InforCustomerWrapper>
}

export const GetGoods = (props) => {
  const { children } = props
  return <GetGoodsWrapper>{children}</GetGoodsWrapper>
}

Styled.propTypes = {
  children: PropTypes.node,
}

CartEmpty.propTypes = {
  children: PropTypes.node,
}

CartContent.propTypes = {
  children: PropTypes.node,
}

InforCustomer.propTypes = {
  children: PropTypes.node,
}
GetGoods.propTypes = {
  children: PropTypes.node,
}

// styled
const GetGoodsWrapper = styled.div`
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.07),
    0 10.0266px 33.4221px rgba(0, 0, 0, 0.0503198),
    0 5.36071px 17.869px rgba(0, 0, 0, 0.0417275),
    0 3.00517px 10.0172px rgba(0, 0, 0, 0.035),
    0 1.59602px 5.32008px rgba(0, 0, 0, 0.0282725),
    0 0.664142px 2.21381px rgba(0, 0, 0, 0.0196802);
  background: #fff;
  border-top: 4px solid #e5e5e5;
  border-bottom: 4px solid #e5e5e5;
  padding: 15px 30px 10px;
  .content {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.5rem;
    padding: 15px 0 5px 0;
    button,
    input {
      color: #000;
      border-radius: 12px;
      border: 1px solid #e5e5e5;
      background-color: transparent;
      padding: 15px;
      font-size: 13px;
      line-height: 18px;
      width: 100%;
    }
    button {
      text-align: left;
    }
  }
  .note {
    padding: 20px 0;
    > input {
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      color: #000;
      padding: 15px;
      width: 100%;
      margin-bottom: 7px;
    }
    .note-item {
      > .item-form {
        display: flex;
        gap: 0.5rem;
      }
      > input {
        border: 1px solid #e5e5e5;
        border-radius: 12px;
        color: #000;
        padding: 15px;
        width: 100%;
        margin-bottom: 7px;
      }
    }
    .item-note-content {
      > div {
        box-shadow: none;
        border: none;
      }

      input {
        width: auto;
        height: auto;
      }
    }
  }
`

const InforCustomerWrapper = styled.div`
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.07),
    0 10.0266px 33.4221px rgba(0, 0, 0, 0.0503198),
    0 5.36071px 17.869px rgba(0, 0, 0, 0.0417275),
    0 3.00517px 10.0172px rgba(0, 0, 0, 0.035),
    0 1.59602px 5.32008px rgba(0, 0, 0, 0.0282725),
    0 0.664142px 2.21381px rgba(0, 0, 0, 0.0196802);
  background: #fff;
  border-top: 4px solid #e5e5e5;
  border-bottom: 4px solid #e5e5e5;
  padding: 15px 30px 10px;

  .content {
    display: flex;
    gap: 1rem;
    padding: 15px 0 5px 0;
    input {
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      color: #000;
      padding: 15px;
      width: 100%;
    }
    .item-form {
      position: relative;
      width: 100%;
      .validate {
        span {
          display: block;
          overflow: hidden;
          padding-top: 5px;
          color: #dd4b39;
          font-size: 12px;
        }
      }
    }
  }
`

const CartEmptyStyled = styled.div`
  width: 100%;
  padding-top: 52px;
  font-size: 15px;
  color: #000;
  text-align: center;

  .cart-icon {
    display: flex;
    justify-content: center;
  }
  span {
    display: block;
    margin: 0 auto;
    width: 200px;
    padding: 0 10px;
    line-height: 21px;
  }
  p {
    padding: 20px 0;
  }
`

const CartContentStyled = styled.div`
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.07),
    0 10.0266px 33.4221px rgba(0, 0, 0, 0.0503198),
    0 5.36071px 17.869px rgba(0, 0, 0, 0.0417275),
    0 3.00517px 10.0172px rgba(0, 0, 0, 0.035),
    0 1.59602px 5.32008px rgba(0, 0, 0, 0.0282725),
    0 0.664142px 2.21381px rgba(0, 0, 0, 0.0196802);
  background: #fff;
  border-radius: 12px 12px 0 0;

  .item {
    padding: 40px 0 10px 0;
    margin: 0 30px;
    & + .item {
      border-top: 1px solid #e5e5e5;
    }
    .item-image {
      padding-left: 0;
      img {
        width: 80px;
        height: 80px;
      }
      .btn-remove {
        font-size: 11px;
        color: #9e9e9f;
        position: relative;
        text-align: center;
        margin-top: 3px;
        &::before {
          content: '';
          position: absolute;
          left: 25px;
          top: 0;
          transform: translateY(50%);
          right: 6px;
          width: 1px;
          height: 6px;
          background: #9e9e9f;
          border-radius: 4px;
          rotate: 45deg;
        }
        &::after {
          content: '';
          position: absolute;
          transform: translateY(50%);
          left: 20px;
          right: 6px;
          width: 1px;
          height: 6px;
          top: 0;
          background: #9e9e9f;
          border-radius: 4px;
          rotate: -45deg;
        }
      }
    }
    .item-infor {
      padding-left: 0;
      .detail {
        display: flex;
        justify-content: space-between;
        .name {
          color: #000;
        }
        .price {
          text-align: right;
          span {
            display: block;
            font-weight: 700;
            font-size: 15px;
            line-height: 20px;
          }
          strike {
            font-weight: 400;
            color: #757575;
            font-size: 14px;
            line-height: 21px;
          }
        }
      }
      .promotion {
        .title-promotion {
          font-size: 14px;
          position: relative;
          overflow: visible;
          display: inline-block;
          position: relative;
          &::after {
            position: absolute;
            right: -16px;
            top: 0;
            bottom: 0;
            transform: translateY(50%);
            margin-left: 4px;
            content: '';
            width: 8px;
            height: 8px;
            border-left: 2px solid #757575;
            border-bottom: 2px solid #757575;
            rotate: -45deg;
            line-height: 16px;
          }
        }
      }
      .choose {
        display: flex;
        justify-content: space-between;
        margin-top: 15px;
        align-items: center;
        .quantity {
          display: flex;
          height: 24px;
          width: 76px;
          input {
            width: 24px;
            border-radius: 4px;
            height: 24px;
            line-height: 22px;
            background: #f5f5f7;
            color: #000;
            font-size: 13px;
            margin: 0 0;
            border: none;
            text-align: center;
          }
          .minus {
            width: 24px;
            height: 24px;
            position: relative;
            border: 1px solid #e5e5e5;
            background: #fff;

            width: 24px;
            height: 24px;
            border-radius: 4px;
            &::after {
              content: '';
              width: 10px;
              height: 1px;
              background: #e5e5e5;
              background: rgb(62, 62, 63);
              display: block;
              margin: 11px auto;
            }
            &.disable {
              &::after {
                background: rgb(229, 229, 229);
              }
            }
          }
          .plus {
            position: relative;
            border: 1px solid #e5e5e5;
            background: #fff;
            width: 24px;
            height: 24px;
            border-radius: 4px;
            &.disable {
              &::after {
                background: rgb(229, 229, 229);
              }
              &::before {
                background: rgb(229, 229, 229);
              }
            }
            &::after {
              content: '';
              width: 1px;
              height: 10px;
              background: rgb(62, 62, 63);
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translateX(-50%) translateY(-50%);
            }
            &::before {
              content: '';
              width: 10px;
              height: 1px;
              background: rgb(62, 62, 63);
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translateX(-50%) translateY(-50%);
            }
          }
        }
        .color {
          button {
            padding: 6px 28px 6px 10px;
            border-radius: 8px;
            font-size: 15px;
            border: 1px solid #e5e5e5;
            position: relative;
            background-color: transparent;
            color: #000;
            position: relative;

            &.active {
              &::after {
                border: none;
                border-right: 2px solid #757575;
                border-top: 2px solid #757575;
                top: calc(50% - 4px);
              }
            }

            &:after {
              content: '';
              position: absolute;
              right: 16px;
              top: calc(50% - 8px);
              bottom: 0;
              transform: translateY(50%);
              margin-left: 4px;
              width: 8px;
              height: 8px;
              border-left: 2px solid #757575;
              border-bottom: 2px solid #757575;
              rotate: -45deg;
              line-height: 16px;
            }
          }
        }
      }
    }
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  margin: auto;
  background-color: #fff;

  .container {
    max-width: 600px;
  }
  h4.cart-title {
    line-height: 20px;
    font-weight: 600;
    color: #000;
    text-transform: none;
    font-size: 15px;
    padding-bottom: 10px;
  }
  .radio-flex {
    display: flex;
    gap: 3rem;
    label {
      margin-left: 10px;
    }
  }
`
