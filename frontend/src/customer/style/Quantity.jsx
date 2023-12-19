import { styled } from 'styled-components'

export const Wrapper = styled.div`
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
    cursor: pointer;
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
    cursor: pointer;
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
`
