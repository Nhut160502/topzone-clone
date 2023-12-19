import { styled } from 'styled-components'

export const Wrapper = styled.div``

export const Container = styled.div`
  position: relative;
  max-width: 1200px;
  min-width: 1024px;
  width: 100%;
  margin: auto;
  margin: 50px auto 80px;
`

export const Category = styled.div`
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
`

export const Box = styled.div`
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
`

export const About = styled.div`
  background-color: #000;
  .video {
    position: relative;
    video {
      display: block;
      width: 100%;
      height: auto;
      margin: auto;
    }
    .gradient-bg {
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 2.68%,
        rgba(0, 0, 0, 0.72) 53.2%,
        rgba(0, 0, 0, 0.86) 69.35%,
        #000 86.01%
      );
      height: 50%;
      position: absolute;
      bottom: 0;
      width: 100%;
    }
    img {
      margin: auto;
      width: 30%;
      bottom: 3%;
      right: 0;
      left: 0;
      margin-left: auto;
      margin-right: auto;
      position: absolute;
    }
  }
  p {
    display: block;
    overflow: hidden;
    font-size: 14px;
    line-height: 21px;
    color: #fff;
    text-align: center;
    padding: 12px 0;
    max-width: 675px;
    margin: auto;
  }
  a {
    display: block;
    width: 110px;
    background: #0071e3;
    color: #fff;
    border-radius: 100px;
    padding: 10px;
    font-size: 15px;
    color: #fff;
    margin: 10px auto 20px;
    text-align: center;
  }
`

export const ListStore = styled.div`
  padding: 40px 60px;
  border: 1px solid #757575;
  border-radius: 24px;
  text-align: center;
  max-width: 1180px;
  min-width: 1024px;
  margin: auto;
  color: #fff;

  .store-provinces {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    b {
      font-size: 18px;
      color: #fff;
    }
    .provinces {
      position: relative;
      width: 250px;
      span {
        border: 1px solid #757575;
        border-radius: 12px;
        background-color: #fff;
        display: block;
        height: 50px;
        line-height: 50px;
        position: relative;
        color: #323232;
        text-align: left;
        padding: 0 30px 0 20px;
        cursor: pointer;
      }
      &::after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        right: 20px;
        top: calc(50% - 5px);
        transform: translateY(calc(50% - 5px));
        border-top: 1px solid #323232;
        border-right: 1px solid #323232;
        rotate: 135deg;
      }
      ul {
        display: none;
        position: absolute;
        top: 60px;
        background-color: #fff;
        padding: 0 20px;
        color: #000;
        width: 250px;
        border-radius: 12px;
        li {
          display: block;
          list-style: none;
          text-align: start;
          padding-top: 20px;
          padding-top: 16px;
          font-size: 15px;
        }

        &::after {
          content: '';
          position: absolute;
          top: -4px;
          width: 20px;
          height: 20px;
          background-color: #fff;
          rotate: 45deg;
          left: 30px;
        }
      }
    }
  }
  .store-list {
    ul {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 10px;
      li {
        display: block;
        overflow: hidden;
        padding: 15px 0;
        font-size: 15px;
        line-height: 20px;
        color: #fff;

        span {
          display: block;
          text-align: start;
          padding-bottom: 7px;
          color: #fff;
          span {
            color: #2997ff;
            padding: 0 10px;
            display: inline;
          }
        }
        span#promoApple {
          display: flex;
          align-items: center;
          gap: 2px;
          img {
            width: 24px;
            height: 24px;
          }
          b {
            font-size: 15px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0;
            text-align: left;
            padding-left: 10px;
          }
        }
      }
    }
  }
`
