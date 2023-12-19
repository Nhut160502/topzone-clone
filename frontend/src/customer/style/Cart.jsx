const { styled } = require('styled-components')

export const Wrapper = styled.div`
  min-height: 100vh;
  margin: auto;
  background-color: #fff;

  .container {
    max-width: 600px;
  }
  .overplay {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100vh;
    display: none;

    &.active {
      display: block;
    }
  }
`

export const CartEmpty = styled.div`
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
export const CartContent = styled.div`
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.07),
    0 10.0266px 33.4221px rgba(0, 0, 0, 0.0503198),
    0 5.36071px 17.869px rgba(0, 0, 0, 0.0417275),
    0 3.00517px 10.0172px rgba(0, 0, 0, 0.035),
    0 1.59602px 5.32008px rgba(0, 0, 0, 0.0282725),
    0 0.664142px 2.21381px rgba(0, 0, 0, 0.0196802);
  background: #fff;
  border-radius: 12px 12px 0 0;
`

export const GetGoods = styled.div`
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

export const BoxForm = styled.div`
  box-shadow:
    0 24px 80px rgba(0, 0, 0, 0.07),
    0 10.0266px 33.4221px rgba(0, 0, 0, 0.0503198),
    0 5.36071px 17.869px rgba(0, 0, 0, 0.0417275),
    0 3.00517px 10.0172px rgba(0, 0, 0, 0.035),
    0 1.59602px 5.32008px rgba(0, 0, 0, 0.0282725),
    0 0.664142px 2.21381px rgba(0, 0, 0, 0.0196802);
  background: #fff;
  border-top: 4px solid #e5e5e5;
  padding: 15px 30px 10px;

  .box-title {
    line-height: 20px;
    font-weight: 600;
    color: #000;
    text-transform: none;
    font-size: 15px;
    padding-bottom: 10px;
  }

  .infor-customer {
    padding: 15px 0 5px 0;
  }

  .infor-location {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 20px;
    background: #f5f5f7;
    border: 0;
    border-radius: 12px;
    padding: 16px 14px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .infor-note {
    margin-top: 20px;
    display: grid;
    .box-radio {
      margin: 6px 0;
    }
  }
  .box-absolute {
    width: 100%;
    background: #e5e5e5 !important;
    border-radius: 12px;
    padding: 10px 10px 3px;
    margin: 10px 0 0;
    position: relative;
    &::after {
      content: '';
      width: 12px;
      height: 12px;
      background-color: #e5e5e5;
      position: absolute;
      left: 50px;
      top: -6px;
      rotate: 45deg;
    }

    .box-control {
      margin-bottom: 8px;
    }
  }
  .box-total {
    display: flex;
    justify-content: space-between;
    padding: 10px 0 10px;
    font-size: 14px;
    strong {
      font-weight: 700;
    }
    span.total {
      color: #ed1c24;
      font-weight: 600;
      font-size: 14px;
    }
    span.point {
      font-weight: 600;
    }
    + .box-total {
    }
  }
  .btn-submit {
    button {
      width: 100%;
      height: 50px;
      border-radius: 12px;
      font-size: 15px;
      background-color: #0071e3;
      margin: 10px 0;
    }
    small {
      text-align: center;
      display: block;
      font-size: 12px;
    }
  }
`

export const BoxItem = styled.div`
  display: flex;
  gap: 2rem;
  position: relative;
  .box-radio {
    display: flex;
    align-items: center;
    gap: 10px;
    input[type='checkbox'],
    input[type='radio'] {
      width: 16px;
      height: 16px;
    }
  }

  .box-control {
    width: 100%;
    position: relative;
    input {
      width: 100%;
      border: 1px solid #e5e5e5;
      border-radius: 12px;
      color: #fff;
      padding: 15px;
    }

    input.transparent {
      background-color: transparent;
      color: #000;
    }

    button {
      color: #000;
      border-radius: 12px;
      border: 1px solid #e5e5e5;
      background-color: transparent;
      padding: 15px;
      font-size: 13px;
      line-height: 18px;
      width: 100%;
      text-align: left;
    }
    .select {
      position: absolute;
      border: 1px solid var(--lightgray2);
      box-sizing: border-box;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
      border-radius: 12px;
      background-color: #fff;
      top: 56px;
      right: 0;
      left: 0;
      z-index: 1;
      width: 260px;
      padding: 10px;
      display: none;

      &.active {
        display: block;
      }

      .top-select {
        position: relative;
        margin: 10px 0;
        input {
          background-color: transparent;
          color: #000;
        }
        i {
          position: absolute;
          right: 0;
        }
      }
      .content-select {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 4px;
        li {
          list-style: none;
          padding: 7px;
          font-size: 14px;
          cursor: pointer;

          &.active {
            color: #fff;
            background: #0071e3;
            border-radius: 8px;
          }
        }
      }
    }
  }

  .validate {
    display: none;
    span {
      display: block;
      overflow: hidden;
      padding-top: 5px;
      color: #dd4b39;
      font-size: 12px;
    }
  }
`

export const Security = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  height: 0;
  transition: all 0.3s;
  overflow: hidden;

  &.active {
    height: 100vh;
  }
  .container {
    background-color: #fff;
    max-width: 340px;
    padding: 30px 20px;
    position: relative;
    .security-policy-popup_close {
      position: absolute;
      top: 0;
      right: 5px;
      color: #333;
      font-size: 18px;
      cursor: pointer;
      padding: 10px;
      background-color: transparent;
      border: none;
    }
    h3 {
      font-weight: 700;
      font-size: 14px;
      line-height: 18px;
      margin-bottom: 10px;
    }
    p {
      line-height: 20px;
      text-align: justify;
      font-size: 15px;
    }
    button.button {
      border: 1px #288ad6;
      border-radius: 4px;
      padding: 10px;
      color: #fff;
      background-color: #288ad6;
      cursor: pointer;
      width: 100%;
      margin-top: 10px;
    }
  }
`

export const CartItem = styled.div`
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
`
