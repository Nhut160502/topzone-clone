import React from 'react'
import styled from 'styled-components'

const Filter = () => {
  return (
    <Wrapper>
      <ul>
        <li className="active">Tất cả</li>
        <li>iPhone 15</li>
        <li>iPhone 14</li>
        <li>iPhone 13</li>
        <li>iPhone 12</li>
        <li>iPhone 11</li>
      </ul>
    </Wrapper>
  )
}
const Wrapper = styled.div`
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

export default Filter
