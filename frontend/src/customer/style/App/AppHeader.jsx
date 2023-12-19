import { styled } from 'styled-components'

export const Wrapper = styled.div`
  height: 60px;
  width: 100%;
  background-color: #000;
  .container {
    height: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    color: #fff;

    .header-left {
      display: flex;
      align-items: center;
      .logo {
        background-position: 0 0;
      }
    }
    .header-center {
      ul {
        height: 100%;
        display: flex;
        align-items: center;
        li {
          list-style: none;
          height: 100%;
          padding: 0 1.5rem;
          transition: all 0.3s;
          a {
            font-size: 14px;
            color: #fff;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fff;
            text-decoration: none;
          }
          &:hover {
            background-color: #2d2d2d;
          }
        }
      }
    }
    .header-right {
      display: flex;
      align-items: center;
      gap: 1rem;

      .search,
      .cart {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-color: #2f3033;
      }
    }
  }
`
