import React from 'react'
import { Wrapper } from '../style/Filter'

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

export default Filter
