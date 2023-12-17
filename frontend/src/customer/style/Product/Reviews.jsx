import React from 'react'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'

const ReviewsWrapper = (props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
}

ReviewsWrapper.propTypes = {
  children: PropTypes.node,
}

const Wrapper = styled.div`
  display: block;
`

export default ReviewsWrapper
