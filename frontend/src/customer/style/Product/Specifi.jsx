import React from 'react'
import { styled } from 'styled-components'
import { PropTypes } from 'prop-types'

const SpecifiWrapper = (props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
}

SpecifiWrapper.propTypes = {
  children: PropTypes.node,
}

const Wrapper = styled.div`
  display: block;
  .box-specifi {
    margin-bottom: 20px;
    &.active {
      ul {
        display: block;
      }
      span {
        &::before {
          display: none;
        }
      }
    }
    > span {
      display: block;
      overflow: hidden;
      background: #f5f5f7;
      padding: 15px 10px;
      color: #000;
      font-size: 15px;
      line-height: 20px;
      font-weight: 600;
      position: relative;
      cursor: pointer;

      &::after {
        content: '';
        width: 16px;
        height: 2px;
        background: #000;
        border-radius: 2px;
        position: absolute;
        right: 14px;
        top: 50%;
        transform: translateY(-50%);
      }
      &::before {
        content: '';
        width: 2px;
        height: 16px;
        background: #000;
        border-radius: 2px;
        position: absolute;
        right: 21px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    ul {
      display: none;
      li {
        list-style: none;
        display: flex;
        gap: 30px;
        padding: 20px 10px;
        border-bottom: 1px solid #e5e5e5;
        aside:first-child {
          width: 150px;
          font-size: 15px;
          line-height: 20px;
          font-weight: 500;
        }
        aside {
          font-size: 15px;
          line-height: 20px;
          span {
            display: block;
            font-size: 15px;
            line-height: 20px;
            color: #101010;
            font-weight: 400;
          }
        }
      }
    }
  }
`

export default SpecifiWrapper
