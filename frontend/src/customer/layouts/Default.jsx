import React from 'react'
import styled from 'styled-components'
import { AppFooter, AppHeader } from '../components/App'
import { PropTypes } from 'prop-types'

const Default = (props) => {
  const { children } = props
  return (
    <Wrapper>
      <AppHeader />
      <AppContent>{children}</AppContent>
      <AppFooter />
    </Wrapper>
  )
}

const Wrapper = styled.div``
const AppContent = styled.div``

Default.propTypes = {
  children: PropTypes.node,
}

export default Default
