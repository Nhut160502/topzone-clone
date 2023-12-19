import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'

import {
  Wrapper,
  HightLight,
  ListCategry,
  Newest,
  Video,
  VideoMain,
  VideoList,
  Content,
  TekFooter,
} from '../style/Tekzone'
import { IconVideo } from '../components/Icon'
import News from '../components/News'

const data = [
  {
    url: 'https://cdn.tgdd.vn/News/Thumb/1557826/lg-1200x675.jpg',
    title:
      'Apple Watch S9 | Apple Watch SE thế hệ mới chỉ từ 6.990.000 đồng tại TopZone, sắm ngay chờ chi',
    time: '2023-12-19T16:00',
  },
  {
    url: 'https://cdn.tgdd.vn/News/Thumb/1557826/lg-1200x675.jpg',
    title:
      'Apple Watch S9 | Apple Watch SE thế hệ mới chỉ từ 6.990.000 đồng tại TopZone, sắm ngay chờ chi',
    time: '2023-12-19T14:00',
  },
  {
    url: 'https://cdn.tgdd.vn/News/Thumb/1557826/lg-1200x675.jpg',
    title:
      'Apple Watch S9 | Apple Watch SE thế hệ mới chỉ từ 6.990.000 đồng tại TopZone, sắm ngay chờ chi',
    time: '2023-12-19T14:00',
  },
  {
    url: 'https://cdn.tgdd.vn/News/Thumb/1557826/lg-1200x675.jpg',
    title:
      'Apple Watch S9 | Apple Watch SE thế hệ mới chỉ từ 6.990.000 đồng tại TopZone, sắm ngay chờ chi',
    time: '2023-12-19T14:00',
  },
  {
    url: 'https://cdn.tgdd.vn/News/Thumb/1557826/lg-1200x675.jpg',
    title:
      'Apple Watch S9 | Apple Watch SE thế hệ mới chỉ từ 6.990.000 đồng tại TopZone, sắm ngay chờ chi',
    time: '2023-12-19T14:00',
  },
  {
    url: 'https://cdn.tgdd.vn/News/Thumb/1557826/lg-1200x675.jpg',
    title:
      'Apple Watch S9 | Apple Watch SE thế hệ mới chỉ từ 6.990.000 đồng tại TopZone, sắm ngay chờ chi',
    time: '2023-12-19T14:00',
  },
  {
    url: 'https://cdn.tgdd.vn/News/Thumb/1557826/lg-1200x675.jpg',
    title:
      'Apple Watch S9 | Apple Watch SE thế hệ mới chỉ từ 6.990.000 đồng tại TopZone, sắm ngay chờ chi',
    time: '2023-12-19T14:00',
  },
  {
    url: 'https://cdn.tgdd.vn/News/Thumb/1557826/lg-1200x675.jpg',
    title:
      'Apple Watch S9 | Apple Watch SE thế hệ mới chỉ từ 6.990.000 đồng tại TopZone, sắm ngay chờ chi',
    time: '2023-12-19T14:00',
  },
]

const categories = [
  {
    id: '1',
    name: 'iPhone',
    url: 'https://cdn.tgdd.vn/newscategory/2155/iPhone.png',
  },
  {
    id: '2',
    name: 'Mac',
    url: '	https://cdn.tgdd.vn/newscategory/2156/Mac.png',
  },
  {
    id: '3',
    name: 'iPad',
    url: 'https://cdn.tgdd.vn/newscategory/2157/Ipad.png',
  },
  {
    id: '4',
    name: 'Watch',
    url: 'https://cdn.tgdd.vn/newscategory/2158/Watch.png',
  },
  {
    id: '5',
    name: 'Âm thanh',
    url: 'https://cdn.tgdd.vn/newscategory/2159/AirPods.png',
  },
  {
    id: '6',
    name: 'Phụ kiện',
    url: 'https://cdn.tgdd.vn/newscategory/2160/PK.png',
  },
  {
    id: '7',
    name: 'Dịch vụ',
    url: 'https://cdn.tgdd.vn/newscategory/2161/Dich-vu.png',
  },
]

const videos = [
  {
    title: 'Khắc phục lỗi nóng máy trên iPhone 15 Pro Max khi lên iOS 17 !!! - Topzone',
    url: 'https://img.youtube.com/vi/odkAvJBKYpY/mqdefault.jpg',
  },
  {
    title: 'Khắc phục lỗi nóng máy trên iPhone 15 Pro Max khi lên iOS 17 !!! - Topzone',
    url: 'https://img.youtube.com/vi/odkAvJBKYpY/mqdefault.jpg',
  },
  {
    title: 'Khắc phục lỗi nóng máy trên iPhone 15 Pro Max khi lên iOS 17 !!! - Topzone',
    url: 'https://img.youtube.com/vi/odkAvJBKYpY/mqdefault.jpg',
  },
  {
    title: 'Khắc phục lỗi nóng máy trên iPhone 15 Pro Max khi lên iOS 17 !!! - Topzone',
    url: 'https://img.youtube.com/vi/odkAvJBKYpY/mqdefault.jpg',
  },
]
const Tekzone = () => {
  return (
    <Wrapper>
      <HightLight>
        <Row>
          <Col lg="8">
            <div className="item">
              <Link href="">
                <img src={data[0].url} alt="" />
                <h3 className="title">{data[0].title}</h3>
              </Link>
            </div>
          </Col>
          <Col lg="4" className="">
            <div className="item">
              <Link href="">
                <img src={data[1].url} alt="" />
                <h3 className="title">{data[1].title}</h3>
              </Link>
            </div>
            <div className="item">
              <Link href="">
                <img src={data[1].url} alt="" />
                <h3 className="title">{data[1].title}</h3>
              </Link>
            </div>
          </Col>
        </Row>
      </HightLight>
      <ListCategry>
        {categories.map((item) => (
          <li key={item.id}>
            <img src={item.url} alt="" />
            <h3>{item.name}</h3>
          </li>
        ))}
      </ListCategry>
      <Newest>
        <div className="title-filter">
          <h3>Mới nhất</h3>
        </div>
        <div className="content">
          <ul>
            {data.map((item, idx) => {
              return (
                <li key={idx}>
                  <News data={item} />
                </li>
              )
            })}
          </ul>
        </div>
      </Newest>
      <Video>
        <div className="container">
          <div className="title-filter">
            <h3>Video</h3>
          </div>
          <Content>
            <VideoMain>
              <Link>
                <div className="image">
                  <img
                    alt="Chip mới M3 tại sự kiện Scary Fast có gì hot?"
                    src="https://img.youtube.com/vi/EnRa4uTWbyM/maxresdefault.jpg"
                  />
                  <IconVideo />
                </div>
                <p className="title">Chip mới M3 tại sự kiện Scary Fast có gì hot?</p>
              </Link>
            </VideoMain>
            <VideoList>
              {videos.map((video, idx) => (
                <Link key={idx} className="item">
                  <div className="image">
                    <IconVideo />
                    <img src={video.url} alt="" />
                  </div>
                  <p className="title">{video.title}</p>
                </Link>
              ))}
            </VideoList>
          </Content>
        </div>
      </Video>
      <TekFooter>
        <ul>
          {data.map((item, idx) => {
            return (
              <li key={idx}>
                <News data={item} />
              </li>
            )
          })}
        </ul>
      </TekFooter>
    </Wrapper>
  )
}

export default Tekzone
