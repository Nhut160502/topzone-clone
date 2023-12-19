const { styled } = require('styled-components')

export const Wrapper = styled.div`
  width: 60%;
  padding: 15px 0;
  list-style: none;
  &:hover {
    a {
      color: #2997ff;
    }
  }
  & {
    border-bottom: 1px solid #4f4f4f;
  }
  a {
    color: #fbfbfb;
    display: flex;
    gap: 1rem;
    img {
      width: 288px;
      height: 160px;
      border-radius: 8px;
    }
    h3 {
      line-height: 28px;
      font-size: 22px;
      font-weight: 400;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    span {
      display: block;
      font-size: 12px;
      color: #999;
      margin-top: 10px;
    }
  }
`
