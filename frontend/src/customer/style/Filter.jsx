import { styled } from 'styled-components'

export const Wrapper = styled.div`
  margin: 30px 0 40px;
  ul {
    display: flex;
    gap: 2rem;
    li {
      color: #afb7bd;
      padding: 10px 0;
      cursor: pointer;
      list-style: none;

      &.active {
        color: #fff;
        border-bottom: 1px solid #fff;
      }
    }
  }
`
