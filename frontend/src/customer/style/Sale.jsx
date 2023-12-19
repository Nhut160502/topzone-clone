const { styled } = require('styled-components')

export const Wrapper = styled.div`
  background-size: cover !important;
  background-position: center;
  position: relative;
  max-width: 1200px;
  border-radius: 12px;
  margin: 20px auto;
  padding: 0 10px 10px;
  color: #fff;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  gap: 5rem;

  .image {
    visibility: hidden;
    width: 41%;
    margin-left: -10px;
    img {
      width: 100%;
    }
  }

  .endtime {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 10px;
    text-align: center;
    span.end-title {
      text-transform: uppercase;
      font-size: 16px;
      font-weight: bold;
    }
    .countdown-timer {
      label {
        font-size: 25px;
        padding: 9px;
        position: relative;
      }
      #minutes,
      #hours {
        &::after {
          content: ':';
          position: absolute;
          right: -2px;
          font-size: 18px;
          color: #fff;
          font-weight: bold;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
  .listing-timeline {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 10px;
    text-align: center;
    font-size: 15px;
    position: relative;
    cursor: pointer;

    &.active {
      font-size: 17px;
      .timeline {
        font-weight: bold;
        font-size: 20px;
      }
      &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        height: 4px;
        border-radius: 100px;
        width: 40px;
        background: #fff;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
    }
  }
`

export const List = styled.div`
  .item {
    width: 100%;
    margin: 0 5px 10px;
    border: 0;
    float: left;
    max-width: calc(100% - 10px);
    border-radius: 5px;
    padding: 0 5px 10px;
    background: #323232;
    border-radius: 15px;
    position: relative;
    .image {
      height: 195px;
      line-height: 195px;
      display: flex;
      align-items: center;
      justify-content: center;
      > img {
        width: 100%;
        height: auto;
        max-width: 170px;
      }
    }

    .name {
      height: 40px;
      line-height: 20px;
      font-size: 14px;
      text-align: center;
      color: #fff;
      margin: 10px auto 5px;
      overflow: hidden;
    }
    .price {
      span {
        display: block;
        text-align: center;
      }
      .price-default {
        color: #ff9921;
        display: block;
        font-size: 18px;
        font-weight: bold;
      }
      .price-discount {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 5px;
        min-height: 24px;
        font-size: 14px;
        label {
          text-align: center;
          margin: 0 7px;
          color: #999;
          text-decoration: line-through;
        }
        small {
          padding: 3px;
          background: #f70000;
          color: #fff;
          border-radius: 3px;
          vertical-align: middle;
          font-weight: bold;
        }
      }
    }
    .fs-contain {
      position: relative;
      display: block;
      overflow: visible;
      margin: 15px 0 0;
      min-height: 20px;
      img {
        position: absolute;
        left: 0;
        width: 20px;
        height: auto;
        z-index: 1;
        top: 50%;
        transform: translateY(-58%);
      }
      .rq_count {
        min-height: 17px;
        padding-left: 21px;
        background-color: #ddd;
        border-radius: 25px;
        text-align: center;
        width: 100%;
        bottom: 0;
        left: 0;
        position: absolute;
        color: #000;
        overflow: hidden;
        i {
          background: linear-gradient(64.85deg, #fcb500 23.67%, #ffd41d 106.12%);
          min-width: 15px;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
        }
        b {
          display: block;
          position: relative;
          z-index: 1;
          font-weight: normal;
          font-size: 11px;
          line-height: 15px;
        }
      }
    }
  }
`
