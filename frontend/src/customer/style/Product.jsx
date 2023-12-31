import { styled } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;

  a {
    background-color: #323232;
    display: block;
    margin: 0 10px;
    border-radius: 12px;
    padding: 50px 0;
    &:hover {
      box-shadow:
        9px 9px 16px rgba(0, 0, 0, 0.44),
        -9px -9px 16px rgba(83, 83, 86, 0.8);
    }
    .image {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 250px !important;
        height: 250px !important;
      }
    }

    h3 {
      padding: 0 10px;
      margin: 12px 0;
      text-align: center;
      font-size: 15px;
      line-height: 20px;
      color: #fff;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    span {
      display: block;
      overflow: hidden;
      line-height: 23px;
      padding: 0 10px;
      color: #fff;
      text-align: center;
      h4 {
        font-size: 18px;
        display: inline-block;
        font-weight: 600;
      }
      strike {
        font-size: 15px;
        line-height: 20px;
        font-weight: 400;
        margin-left: 5px;
        margin-right: 5px;
      }
      small {
        font-size: 15px;
        line-height: 20px;
        font-weight: 400;
      }
    }
  }
`
