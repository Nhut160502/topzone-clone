import React, { useEffect, useState } from 'react'
import Slider from '../components/Slider'
import { Link } from 'react-router-dom'
import Filter from '../components/Filter'
import { Col, Row } from 'react-bootstrap'
import Product from '../components/Product'
import { Sort, Wrapper } from '../style/Category'

const dataSlider = [
  {
    url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1170x300/https://cdn.tgdd.vn/2023/11/banner/IP15-2400-600-1920x480-1.png',
    to: '/',
  },
  {
    url: 'https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100,s_1170x300/https://cdn.tgdd.vn/2023/11/banner/ip14-AW-S8-2400-600-1920x480-1.png',
    to: '/',
  },
]

const sorts = [
  {
    id: '1',
    title: 'Mới ra mắt',
  },
  {
    id: '2',
    title: 'Bán chạy',
  },
  {
    id: '3',
    title: 'Giá thấp đến cao',
  },
  {
    id: '4',
    title: 'Giá cao đến thấp',
  },
]

const Category = () => {
  const [data, setData] = useState([])
  const [openSort, setOpenSort] = useState(false)
  const [contentSort, setContentSort] = useState('1')

  const handleOpenSort = () => setOpenSort(!openSort)
  const handleSetContentSort = (id) => {
    setContentSort(id)
    setOpenSort(false)
  }

  useEffect(() => {
    for (let i = 0; i < 20; i++) {
      setData((pre) => [...pre, i])
    }
  }, [])
  return (
    <Wrapper>
      <div className="title">
        <img
          src="https://img.tgdd.vn/imgt/f_webp,fit_outside,quality_100/https://cdn.tgdd.vn/Category/42/WiPhone-120x35.png"
          alt=""
        />
      </div>
      <Slider dots autoplay={false} className="slider">
        {dataSlider.map((item, idx) => (
          <Link key={idx}>
            <img src={item.url} alt="" />
          </Link>
        ))}
      </Slider>
      <Filter />
      <Sort>
        <div className="sort-container">
          <div className="sort-title" onClick={handleOpenSort}>
            <span>Xếp theo: </span>
            <span className="option">{sorts.find((item) => item.id === contentSort).title}</span>
          </div>
          <div className={openSort === true ? 'sort-content active' : 'sort-content'}>
            <ul>
              {sorts.map((item, idx) => (
                <li
                  key={idx}
                  className={contentSort === item.id && 'active'}
                  onClick={() => handleSetContentSort(item.id)}
                >
                  {item.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Sort>
      <Row>
        {data?.map((item) => (
          <Col key={item} lg={'4'}>
            <Product />
          </Col>
        ))}
      </Row>
    </Wrapper>
  )
}

export default Category
