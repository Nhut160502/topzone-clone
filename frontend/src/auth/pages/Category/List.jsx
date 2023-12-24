import { Button, Popconfirm, Table, message } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { DeleteOutlined } from '@ant-design/icons/lib/icons'
import { deleteCategory, getCategories } from 'src/auth/services'
import { popConfirm } from 'src/auth/props/popConfirm'
import { columnsCategory } from 'src/auth/props/column'
import FadeIn from 'react-fade-in/lib/FadeIn'
import { useDispatch } from 'react-redux'
import { activeLoading, disActiveLoading } from 'src/auth/providers/loading'

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

  const dispatch = useDispatch()
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
    dispatch(activeLoading())
    const fetchData = async () => {
      try {
        const res = await getCategories()
        setData(res.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    dispatch(disActiveLoading())
  }, [dispatch])

  return (
    <>
      <FadeIn>
        <Link className="btn-store" to="/dashboard/category/store">
          Thêm danh mục
        </Link>
        <Table dataSource={data} columns={columns} rowKey="_id" />
      </FadeIn>
    </>
  )
}
export default List
