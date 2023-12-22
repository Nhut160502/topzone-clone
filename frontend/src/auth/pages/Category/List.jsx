import { Button, Popconfirm, Table, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DeleteOutlined } from '@ant-design/icons/lib/icons'
import { deleteCategory, getCategories } from 'src/auth/services'
import { popConfirm } from 'src/auth/props/popConfirm'
import { columnsCategory } from 'src/auth/props/column'
import Placeholder from 'src/auth/components/Placeholder'
import FadeIn from 'react-fade-in'

const List = () => {
  const columns = [
    columnsCategory.name,
    columnsCategory.thumbnail,
    {
      title: 'Actions',
      render: (item) => (
        <Popconfirm {...popConfirm} onConfirm={() => confirm(item._id)}>
          <Button danger icon={<DeleteOutlined />} />
        </Popconfirm>
      ),
    },
  ]

  const [data, setData] = useState([])

  const confirm = async (id) => {
    try {
      const res = await deleteCategory(id)
      if (res.success) {
        setData(data.filter((item) => item._id !== id))
        message.success('Danh mục đã được xóa thành công!')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCategories()
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <Placeholder />

      {/* <FadeIn>
        <Link className="btn-store" to="/dashboard/category/store">
          Thêm danh mục
        </Link>
        <Table dataSource={data} columns={columns} rowKey="_id" />
      </FadeIn> */}
    </>
  )
}
export default List
