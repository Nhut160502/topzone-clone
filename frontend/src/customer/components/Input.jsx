import React, { useEffect, useRef, useState } from 'react'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'

const Input = (props) => {
  return <Wrapper {...props} />
}

export const Checkbox = (props) => {
  const { label, name } = props
  const inputRef = useRef(null)
  const parentRef = useRef(null)
  const [checked, setChecked] = useState(inputRef?.current?.checked || false)

  const handleChange = (e) => {
    const listInput = document.getElementsByTagName('input')
    for (let i = 0; i < listInput.length; i++) {
      const element = listInput[i]
      if (element.type === e.target.type && element.name === e.target.name) {
        if (inputRef.current !== element) {
          console.log()
          const listParetn = document.getElementsByClassName(parentRef.current.className)
          for (let i = 0; i < listParetn.length; i++) {
            const pare = listParetn[i]
            console.log(pare)
            pare.classList.remove('checked')
          }
        }
      }
    }
  }

  return (
    <CheckBoxWrapper
      ref={parentRef}
      className={checked && 'checked'}
      onClick={() => {
        parentRef.current.lastElementChild.click()
        setChecked(inputRef.current.checked)
      }}
    >
      <i className="cartnew-choose"></i>
      <span>{label}</span>
      <input type="checkbox" {...props} name={name} hidden ref={inputRef} onChange={handleChange} />
    </CheckBoxWrapper>
  )
}
Checkbox.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  checked: PropTypes.bool,
}

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  &.checked {
    i {
      background-position: -221px -46px;
    }
  }
`

const Wrapper = styled.input``
export default Input
