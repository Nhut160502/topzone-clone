import { Button, Table, Tabs } from 'antd'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { DeleteOutlined } from '@ant-design/icons/lib/icons'
import { styled } from 'styled-components'

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
]

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: () => <Button danger icon={<DeleteOutlined />}></Button>,
  },
]

const items = [
  {
    label: 'Màu sắc',
    path: 'colors',
    key: 1,
    to: '/dashboard/attribute/store/color',
  },
  {
    label: 'Phiên bản',
    path: 'versions',
    key: 2,
    to: '/dashboard/attribute/store/version',
  },
  {
    label: 'Dung lượng',
    path: 'capacity',
    key: 3,
    to: '/dashboard/attribute/store/capacity',
  },
]

const List = () => {
  const [to, setTo] = useState(items.find((item) => item.key === 1).to)
  const handleChangeTabs = (id) => {
    setTo(items.find((item) => item.key === id).to)
  }
  return (
    <Wrapper>
      <Link className="btn-store" to={to}>
        Thêm
      </Link>
      <Tabs items={items} defaultActiveKey={1} onChange={handleChangeTabs} />
      <Table dataSource={dataSource} columns={columns} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  .btn-store {
    position: absolute;
    right: 1rem;
    top: 6px;
    z-index: 99999;
  }
`

export default List
