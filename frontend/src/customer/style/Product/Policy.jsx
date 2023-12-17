import React from 'react'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'

const PolicyWrapper = (props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
}

PolicyWrapper.propTypes = {
  children: PropTypes.node,
}

const Wrapper = styled.div`
  ul {
    li {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 0 0 12px;
      span {
        overflow: hidden;
        font-size: 15px;
        line-height: 20px;
        color: #fff;
      }
      i {
        width: 24px;
        height: 24px;
        background-repeat: no-repeat;
      }
    }
  }
`

export default PolicyWrapper
