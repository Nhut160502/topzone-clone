import { styled } from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  min-width: 980px;
  position: relative;
  margin: auto;
  .title-filter {
    position: relative;
    padding: 20px 10px;
    h3 {
      display: inline-block;
      color: #fff;
      font-weight: 300;
      font-size: 18px;
      line-height: 23px;
      padding: 0 10px;
      letter-spacing: 0.03em;
      text-transform: uppercase;
      font-weight: 700;
      &:after {
        content: url(https://www.topzone.vn/images/topnews/desktop/after-title.png);
        width: 4px;
        height: 20px;
        position: absolute;
        left: 0;
      }
    }
  }
`
export const HightLight = styled.div`
  width: 100%;
  height: 448px;
  overflow: hidden;
  border-radius: 20px;
  margin: 30px 0;
  max-width: 1200px;
  margin: 30px auto;

  .item {
    &:hover {
      img {
        transform: scale(1.3);
      }
    }
    a {
      color: #fff;
      display: block;
    }
    position: relative;
    overflow: hidden;
    img {
      transition: all 0.8s;
      width: 100%;
      height: 100%;
    }
    h3.title {
      position: absolute;
      font-size: 30px;
      line-height: 39px;
      bottom: 0;
      padding: 25px;
      color: #fbfbfb;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 2.68%,
        rgba(0, 0, 0, 0.72) 53.2%,
        rgba(0, 0, 0, 0.86) 69.35%,
        #000 86.01%
      );
      font-weight: 700;
    }
  }
  .col-lg-4 {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    padding: 0 !important;
    h3.title {
      font-size: 18px;
      line-height: 23px;
      font-weight: 700;
    }
    .item {
      height: calc(448px / 2);
      overflow: hidden;
    }
  }
  .col-lg-8 {
    width: calc(66.66666667% - 8px);
    padding: 0 !important;
    margin-right: 8px;
  }
`

export const ListCategry = styled.ul`
  display: flex;
  justify-content: space-between;
  margin: 5px auto 40px auto;
  gap: 16px;
  max-width: 1200px;

  li {
    width: 100%;
    display: flex;
    padding: 8px 21px;
    align-items: center;
    justify-content: space-between;
    background-color: #323232;
    border-radius: 12px;
    color: #fff;
    img {
      width: 48px;
      height: 48px;
    }
  }
`

export const Newest = styled.div`
  max-width: 1200px;
  margin: auto;
  .content {
    ul {
      list-style: none;
    }
  }
`
export const Video = styled.div`
  display: block;
  max-width: 100%;
  height: auto;
  overflow: hidden;
  padding: 20px 0;
  margin: 40px 0;
  background: #101010;
  clear: both;
  .container {
    padding: 0;
    max-width: 1200px;
    width: 100%;
    min-width: 980px;
    position: relative;
    margin: auto;
  }

  img {
    width: 100%;
  }
`
export const Content = styled.div`
  display: flex;
  gap: 20px;
  p.title {
    font-size: 22px;
    line-height: 31px;
    margin-top: 10px;
    overflow: hidden;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`
export const VideoMain = styled.div`
  width: 60%;
  a {
    color: #fff;
    .image {
      height: 405px;
      width: 720px;
      position: relative;

      img {
        width: 100%;
        height: auto;
      }
    }
  }
`
export const VideoList = styled.div`
  width: 40%;
  a.item {
    + a.item {
      border-top: 1px solid #2a2a2a;
      margin-top: 22px;
    }
    color: #fff;
    display: flex;
    min-height: 90px;
    margin-bottom: 10px;
    width: 100%;
    gap: 10px;
    .image {
      position: relative;
      width: 121px;
      height: 68px;

      img {
        width: 121px;
        height: 68px;
        border-radius: 8px;
      }
      i {
        height: 33px;
        width: 33px;
      }
    }
    p {
      font-size: 16px;
      line-height: 22px;
    }
  }
`

export const TekFooter = styled.div`
  max-width: 1200px;
  margin: auto;

  ul {
    list-style: none;
  }
`
