const { styled } = require('styled-components')

export const Wrapper = styled.div`
  .product-name {
    display: block;
    padding: 0 0 20px;
    color: #fff;
    font-size: 32px;
    font-weight: 700;
    padding-top: 5px;
    line-height: 1.2;
  }
  .product-price {
    display: flex;
    font-size: 26px;
    color: #fff;
    padding: 0 0 20px;
    align-items: center;
    strike {
      padding: 0 10px;
      font-weight: 400;
      font-size: 18px;
      line-height: 23px;
    }
  }
`
export const Content = styled.div`
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
`

export const Description = styled.div`
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
`

export const Capacity = styled.div`
  margin-bottom: 20px;
  > span {
    display: block;
    overflow: hidden;
    font-size: 15px;
    line-height: 20px;
    margin: 0 0 10px;
  }
  ul {
    display: flex;
    gap: 1rem;
    li {
      list-style: none;
      button {
        display: block;
        overflow: hidden;
        color: #dbdbdb;
        background: #2f3033;
        border-radius: 8px;
        padding: 10px 12px;
        text-align: center;
        font-size: 14px;
        line-height: 21px;
        border: 1px solid transparent;
      }
      &.active {
        button {
          background: #1c1c1d;
          border: 1px solid #535353;
        }
      }
    }
  }
`

export const Colors = styled.div`
  margin-bottom: 20px;
  > span {
    display: block;
    overflow: hidden;
    font-size: 15px;
    line-height: 20px;
    margin: 0 0 10px;
  }

  ul {
    display: flex;
    gap: 1rem;
    li {
      list-style: none;
      button {
        width: 40px;
        height: 40px;
        display: block;
        overflow: hidden;
        border-radius: 100%;
        box-shadow: inset 0 3px 4px rgba(0, 0, 0, 0.25);
        background: #123e61;
        position: relative;
        border: 1px solid transparent;
      }
      &.active {
        button {
          border: 2px solid #0071e3;
        }
      }
    }
  }
`

export const Promotion = styled.div`
  display: block;
  overflow: hidden;
  padding: 20px 15px 10px 15px;
  background: #2f3033;
  border-radius: 12px;
  margin: 0 0 20px;

  span {
    display: block;
    overflow: hidden;
    font-size: 15px;
    line-height: 20px;
    color: #fff;
    padding: 0 5px 6px;
    font-weight: bold;
  }

  small {
    display: block;
    overflow: hidden;
    font-size: 13px;
    line-height: 18px;
    color: #fff;
    border-bottom: 1px solid #414141;
    padding: 0 5px 13px;
    margin: 0 0 16px;
  }

  p {
    position: relative;
    padding-left: 14px;
    padding-bottom: 6px;
    &::before {
      content: '•';
      position: absolute;
      left: 0;
    }
    font-size: 14px;
    line-height: 21px;
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 20px);
    font-weight: 500;
    a {
      display: inline;
      color: #2997ff;
      overflow: hidden;
      font-size: 14px;
      line-height: 21px;
    }
  }
`

export const ButtonSubmit = styled.div`
  padding-bottom: 10px;
  .btn-buy {
    width: 100%;
    margin-bottom: 10px;
    font-size: 20px;
    line-height: 25px;
    color: #fff;
    border-radius: 12px;
    text-align: center;
    padding: 18px 0;
    background: #0071e3;
    font-weight: 700;
    border: none;
  }
  .btn-inst {
    display: flex;
    gap: 1rem;
    button {
      color: #101010;
      background: #fff;
      font-size: 16px;
      padding: 10px 0;
      margin-right: 0;
      border-radius: 12px;
      text-align: center;
      width: 100%;
      font-weight: 700;
      line-height: 25px;
      span {
        display: block;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.1;
      }
    }
  }
`

export const Policy = styled.div`
  ul {
    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 0 0 12px;
      span {
        overflow: hidden;
        font-size: 15px;
        line-height: 20px;
        color: #fff;
      }
      i {
        width: 24px;
        height: 24px;
        background-repeat: no-repeat;
      }
    }
  }
`

export const Loyalty = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 4px;
  background-color: #2f3033;
  margin-top: 10px;
  justify-content: space-between;
  .qr-download p {
    font-style: italic;
    font-size: 11px;
    line-height: 13px;
    white-space: nowrap;
    color: #999;
  }
  .text-area {
    text-align: center;
    .text-area__title {
      display: flex;
      align-items: center;
      justify-content: center;
      .text-area__title span {
        margin-left: 5px;
        font-size: 18px;
        line-height: 24px;
        color: #fff;
      }
      .text-area__content {
        font-size: 14px;
        line-height: 17px;
        color: #fff;
        margin-top: 5px;
      }
    }
    .text-area__note {
      font-style: italic;
      font-size: 11px;
      line-height: 13px;
      color: #999;
      margin-top: 5px;
    }
  }
  .download-link {
    a {
      display: block;
      + a {
        margin-top: 5px;
      }
    }
  }
`

export const DescImage = styled.div`
  width: 100%;
  position: relative;
  img {
    width: 100%;
  }
  .see-more {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 5px;
    button {
      outline: none;
      background: transparent;
      color: #2f80ed;
      border: none;
      position: relative;
      cursor: pointer;
      &::after {
        content: '';
        position: absolute;
        right: -20px;
        top: 0;
        width: 10px;
        height: 10px;
        border-top: 2px solid #2f80ed;
        border-left: 2px solid #2f80ed;
        rotate: 225deg;
      }
    }
  }
  .article {
    background: linear-gradient(
      to bottom,
      rgba(255 255 255/0),
      rgba(255 255 255/62.5),
      rgba(255 255 255/1)
    );
    bottom: 0;
    height: 105px;
    left: -150px;
    position: absolute;
    width: 980px;
    margin-bottom: 0;
    display: none;
    &.active {
      display: block;
    }
  }
`

export const Specifi = styled.div`
  display: block;
  .box-specifi {
    margin-bottom: 20px;
    &.active {
      ul {
        display: block;
      }
      span {
        &::before {
          display: none;
        }
      }
    }
    > span {
      display: block;
      overflow: hidden;
      background: #f5f5f7;
      padding: 15px 10px;
      color: #000;
      font-size: 15px;
      line-height: 20px;
      font-weight: 600;
      position: relative;
      cursor: pointer;

      &::after {
        content: '';
        width: 16px;
        height: 2px;
        background: #000;
        border-radius: 2px;
        position: absolute;
        right: 14px;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        content: '';
        width: 2px;
        height: 16px;
        background: #000;
        border-radius: 2px;
        position: absolute;
        right: 21px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    ul {
      display: none;
      li {
        list-style: none;
        display: flex;
        gap: 30px;
        padding: 20px 10px;
        border-bottom: 1px solid #e5e5e5;
        aside:first-child {
          width: 150px;
          font-size: 15px;
          line-height: 20px;
          font-weight: 500;
        }
        aside {
          font-size: 15px;
          line-height: 20px;
          span {
            display: block;
            font-size: 15px;
            line-height: 20px;
            color: #101010;
            font-weight: 400;
          }
        }
      }
    }
  }
`

export const Needbuy = styled.div`
  border-bottom: 1px solid #ccc;
  margin-bottom: 35px;
  .slick-slider {
    .slick-prev {
      left: 0;
    }
    .slick-next {
      right: 0;
    }
  }
  .product-item {
    a {
      background-color: transparent;
      &:hover {
        box-shadow: none;
      }
    }
    span,
    h3 {
      color: #000;
    }
  }
  .title {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin: 0 0 40px;
    strong {
      overflow: hidden;
      color: #101010;
      font-size: 26px;
      line-height: 32px;
      font-weight: 700;
    }
    div {
      position: relative;
      i {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        color: #fff;
        background-color: #999;
        display: block;
        cursor: pointer;
        font-size: 10px;
        line-height: 16px;
        text-align: center;
      }
    }
    span {
      position: absolute;
      display: none;
      width: 300px;
      border: 1px solid #f1f1f1;
      border-radius: 4px;
      background-color: #fff;
      font-size: 14px;
      font-weight: 500;
      padding: 7px 10px;
      top: 33px;
      left: -140px;
      line-height: 18px;

      &.active {
        display: block;
      }
    }
  }
`

export const Combo = styled.div`
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

export const Evaluete = styled.div`
  max-width: 780px;
  border-radius: 12px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 30px;
  color: #333;
  margin-top: 30px;
  border: 1px solid #e5e5e5;
  .title {
    font-size: 26px;
    font-weight: bold;
    line-height: 32px;
    text-align: left;
  }
  .point {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    p {
      color: #ff9f00;
      font-size: 28px;
      font-weight: bold;
      line-height: 28px;
    }
    span {
      color: #0071e3;
      font-size: 14px;
    }
  }

  .btn-rating {
    margin-top: 25px;
    button {
      width: 50%;
      background-color: #0071e3;
      border: 1px solid #0071e3;
      color: #fff;
      padding: 14px 10px;
      font-size: 16px;
      border-radius: 8px;
      transition: 0.3s;

      &:hover {
        background-color: #fff;
        color: #0071e3;
      }
    }
  }
`

export const RateList = styled.div`
  margin-bottom: 20px;
  ul {
    width: 300px;
    li {
      display: flex;
      align-items: center;
      .timeline-star {
        background-color: #eee;
        border-radius: 20px;
        height: 6px;
        position: relative;
        width: calc(100% - 60px);

        .timing {
          background-color: #ff9f00;
          border-radius: 20px;
          left: 0;
          height: 6px;
          position: absolute;
          top: 0;
        }
      }
      .number-percent {
        color: #323232;
        font-size: 12px;
        font-weight: bold;
        line-height: 15px;
        padding-left: 10px;
        text-align: left;
        width: 35px;
      }
      .iconcmt-blackstar {
        background-image: url(//cdn.tgdd.vn/mwgcart/avacomment/images/icon_comment_2x.png?v=2);
        background-repeat: no-repeat;
        display: inline-block;
        line-height: 30px;
        vertical-align: middle;
        background-size: 200px 150px;
        background-position: -160px -65px;
        height: 11px;
        width: 12px;
      }
      .number-star {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 6px;
        margin-right: 6px;
      }
    }
  }
`

export const Comment = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #ebf0f9;
  & + & {
    border-bottom: none;
  }

  .cmt-top {
    display: flex;
    gap: 1rem;
    p {
      text-transform: capitalize;
      color: #222b45;
      display: inline;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
    }
    .confirm-buy {
      color: #2ba832;
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 12px;
    }
  }
  .cmt-intro {
    margin-top: 8px;
    .cmt-top-star {
      display: flex;
      gap: 6px;
    }
  }
  .cmt-content {
    margin-top: 10px;
    p {
      font-size: 14px;
      font-weight: 500;
      line-height: 18px;
    }
  }
  .cmt-bottom {
    margin-top: 10px;
    display: flex;
    align-items: center;
    button {
      background-color: transparent;
      border: none;
      color: #222b45;
      display: flex;
      gap: 4px;
      font-size: 15px;
      font-weight: 5000;
      align-items: center;
      padding-right: 12px;
    }
    > span {
      color: #8f9bb3;
      font-size: 14px;
      padding-left: 12px;
      border-left: 1px solid #8f9bb3;
    }
  }
`

export const Rating = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0;
  position: fixed;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
  transition: 0.3s;
  &.active {
    height: 100vh;
  }
  overflow: hidden;

  .iconcmt-unstarlist {
    background-position: -80px -75px;
    height: 38px;
    width: 40px;

    &.active {
      background-position: -125px -80px;
    }
  }
  .iconcmt-camera {
    background-position: -144px -124px;
    height: 17px;
    width: 20px;
  }
  .iconcmt-shield {
    background-position: -63px -97px;
    height: 14px;
    width: 17px;
  }

  .container {
    width: 680px;
    background-color: #fff;
    position: relative;
    padding-bottom: 30px;
    .title {
      text-align: center;
      p {
        font-size: 14px !important;
        border-bottom: 1px solid #f5f5f7;
        font-size: 16px;
        font-weight: bold;
        line-height: 20px;
        padding: 22px;
      }
    }
    .btn-close {
      position: absolute;
      right: 20px;
      top: 20px;
      cursor: pointer;
    }
    .product {
      margin-top: 20px;
      .image {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 100px;
          height: 100px;
        }
      }
      .name {
        text-align: center;
        margin-top: 20px;
        line-height: 23px;
        font-size: 18px;
        font-weight: 600;
      }
      ul {
        display: flex;
        justify-content: center;
        gap: 1rem;
        li {
          list-style: none;
          text-align: center;
          p {
            margin-top: 5px;
            font-size: 14px;
          }
        }
      }
    }
    .form-rate {
      display: none;
      margin-top: 30px;
      padding: 0 30px;

      &.active {
        display: block;
      }

      .image-review {
        display: flex;
        gap: 1rem;
        img {
          width: 48px;
          height: 48px;
        }
        .item {
          position: relative;
          .delete-image {
            border-radius: 50%;
            background-color: #fff;
            cursor: pointer;
            height: 14px;
            line-height: 14px;
            position: absolute;
            right: 3px;
            top: 3px;
            text-align: center;
            width: 14px;
            z-index: 1;
            &::after {
              background-color: #e5e5e5;
              content: '';
              height: 10px;
              left: 6px;
              position: absolute;
              top: 2px;
              width: 2px;
              rotate: -45deg;
            }
            &::before {
              background-color: #e5e5e5;
              content: '';
              height: 10px;
              left: 6px;
              position: absolute;
              top: 2px;
              width: 2px;
              rotate: 45deg;
            }
          }
        }
      }
      textarea {
        width: 100%;
        border: 1px solid #e5e5e5;
        border-radius: 12px;
        background-color: transparent;
        outline: none;
        color: #000;
        padding: 6px;
      }
      .control {
        .item {
          display: flex;
          gap: 1rem;
          margin: 12px 0;

          input {
            width: 100%;
            border: 1px solid #e5e5e5;
            border-radius: 12px;
            color: #757575;
            font-size: 14px;
            height: 50px;
            line-height: 17px;
            padding: 10px;
            outline: none;
          }
        }
        .item-share {
          justify-content: space-between;
          align-items: baseline;
        }
        .uploads {
          .content-uploads {
            display: flex;
            gap: 3px;
            cursor: pointer;

            p {
              color: #0071e3;
              font-size: 14px;
            }
            span {
              color: #000;
              font-size: 14px;
            }
          }
        }
        .share {
          cursor: pointer;
          display: flex;
          gap: 2px;
          input[type='checkbox'] {
            width: 20px;
            height: auto !important;
          }
          label {
            font-size: 14px;
            color: #000;
          }
        }
      }
      button {
        margin: 12px 0;
        background-color: #0071e3;
        border-radius: 12px;
        border: 1px solid #0071e3;
        cursor: pointer;
        color: #fff;
        display: block;
        padding: 15px;
        transition: 0.3s;
        width: 100%;
        cursor: pointer;

        &.disabled {
          pointer-events: none;
          opacity: 0.5;
        }
      }
      .intro-txt {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 13px;
        a {
          padding: 0 10px;
        }
        a:last-child {
          border-left: 1px solid #d8d8d8;
        }
      }
    }
    .formrate__information {
      font-size: 13px;
    }
  }
`
