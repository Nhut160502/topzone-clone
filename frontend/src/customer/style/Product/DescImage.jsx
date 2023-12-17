import React from 'react'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'

const DescImageWrapper = (props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
}

DescImageWrapper.propTypes = {
  children: PropTypes.node,
}

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  img {
    width: 100%;
  }
  .see-more {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 5px;
    button {
      outline: none;
      background: transparent;
      color: #2f80ed;
      border: none;
      position: relative;
      cursor: pointer;
      &::after {
        content: '';
        position: absolute;
        right: -20px;
        top: 0;
        width: 10px;
        height: 10px;
        border-top: 2px solid #2f80ed;
        border-left: 2px solid #2f80ed;
        rotate: 225deg;
      }
    }
  }
  .article {
    background: linear-gradient(
      to bottom,
      rgba(255 255 255/0),
      rgba(255 255 255/62.5),
      rgba(255 255 255/1)
    );
    bottom: 0;
    height: 105px;
    left: -150px;
    position: absolute;
    width: 980px;
    margin-bottom: 0;
    display: none;
    &.active {
      display: block;
    }
  }
`

export default DescImageWrapper
