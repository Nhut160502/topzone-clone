import React, { useState } from 'react'
import { Wrapper } from '../style/Quantity'

const Quantity = () => {
  const [value, setValue] = useState(1)
  const handlePlus = () => {
    setValue((pre) => pre + 1)
  }
  const handleMinus = () => {
    if (value <= 1) return
    setValue((pre) => pre - 1)
  }
  return (
    <Wrapper>
      <div className="minus" onClick={handleMinus}></div>
      <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
      <div className="plus" onClick={handlePlus}></div>
    </Wrapper>
  )
}

export default Quantity
