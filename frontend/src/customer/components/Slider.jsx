import React from 'react'
import styled from 'styled-components'
import SliderSlick from 'react-slick'
import { PropTypes } from 'prop-types'

const Slider = (props) => {
  const { children, show } = props

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: show || 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    focusOnSelect: true,
  }
  return (
    <Wrapper>
      <SliderSlick {...props} {...settings}>
        {children}
      </SliderSlick>
    </Wrapper>
  )
}

Slider.propTypes = {
  children: PropTypes.node,
  show: PropTypes.number,
}

const Wrapper = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: 100%;
  }
`
export default Slider
