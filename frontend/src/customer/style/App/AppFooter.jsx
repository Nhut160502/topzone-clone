import React from 'react'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'

const AppFooterWrapper = (props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
}

AppFooterWrapper.propTypes = {
  children: PropTypes.node,
}
const Wrapper = styled.div``

export default AppFooterWrapper
