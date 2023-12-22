import { DeleteOutlined } from '@ant-design/icons'
import { Button, Table } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

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
    render: (text) => <Link to="/dashboard/subcategory/edit">{text}</Link>,
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

const List = () => {
  return (
    <>
      <Link className="btn-store" to="/dashboard/subcategory/store">
        Thêm danh mục
      </Link>
      <Table dataSource={dataSource} columns={columns} />
    </>
  )
}
export default List
