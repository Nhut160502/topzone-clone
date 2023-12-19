import { styled } from 'styled-components'

export const Wrapper = styled.div`
  .col-lg-4 {
    padding: 0 !important;
  }
  max-width: 1170px;
  min-width: 1024px;
  margin: auto;
  width: 100%;
  .slider {
    img {
      border-radius: 22px;
    }
  }
  .title {
    display: block;
    overflow: hidden;
    margin: 38px 0;
    cursor: default;
    text-align: center;
  }
`

export const Sort = styled.div`
  text-align: right;
  color: #fff;
  cursor: pointer;
  position: relative;
  margin-bottom: 10px;
  .option {
    position: relative;
    &::after {
      content: '';
      width: 8px;
      height: 8px;
      border-right: 1px solid #fff;
      border-bottom: 1px solid #fff;
      transform: rotate(45deg);
      display: inline-block;
      margin: 0 2px 2px 10px;
    }
  }
  .sort-content {
    display: none;
    position: absolute;
    border-radius: 12px;
    right: 0;
    text-align: left;
    top: 25px;
    background-color: #fff;
    color: #000;
    ul {
      padding: 15px 0 0;
      li {
        list-style: none;
        padding: 0 15px 15px;

        &.active {
          position: relative;
          padding: 0 30px 15px;
          color: #0071e3;
          &::before {
            content: '';
            position: absolute;
            left: 15px;
            top: 2px;
            margin-right: 5px;
            width: 7px;
            height: 10px;
            display: inline-block;
            border-top: 1px solid #0071e3;
            border-left: 1px solid #0071e3;
            transform: rotate(-130deg);
          }
        }
      }
    }

    &.active {
      display: block;
    }
  }
`
