import React from 'react'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'

const ColorsWrapper = (props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
}

ColorsWrapper.propTypes = {
  children: PropTypes.node,
}

const Wrapper = styled.div`
  margin-bottom: 20px;
  span {
    display: block;
    overflow: hidden;
    font-size: 15px;
    line-height: 20px;
    margin: 0 0 10px;
  }
`

export default ColorsWrapper
