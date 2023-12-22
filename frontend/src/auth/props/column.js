import { Image } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

export const columnsCategory = {
  name: {
    title: 'Tên danh mục',
    dataIndex: 'name',
    render: (name, { slug }) => <Link to={`/dashboard/category/edit/${slug}`}>{name}</Link>,
  },
  thumbnail: {
    title: 'Thumbnail',
    dataIndex: 'thumbnail',
    render: (url) => <Image src={url} />,
  },
}
