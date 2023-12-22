import { Button, Form, Input, message } from 'antd'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Uploads from 'src/auth/components/Uploads'
import { configsForm } from 'src/auth/configs/form'
import { storeCateory } from 'src/auth/services/categories'

const Store = () => {
  const navigate = useNavigate()
  const [file, setFile] = useState(null)

  const handleSubmit = async (value) => {
    try {
      const formData = new FormData()

      formData.append('name', value.name)
      formData.append('file', file)

      const res = await storeCateory(formData)

      if (res.success) {
        message.success(res.message)
        navigate('/dashboard/category')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmitFailed = () => message.error('Vui lòng điển đủ thông tin!')

  const handleGetFiles = (files) => files.length >= 0 && setFile(files[0]?.originFileObj)

  return (
    <Form {...configsForm} onFinish={handleSubmit} onFinishFailed={handleSubmitFailed}>
      <Form.Item label="Tên danh mục" name="name" rules={[{ required: true, message: '' }]}>
        <Input />
      </Form.Item>
      <Uploads onGetFiles={handleGetFiles} max={1} />
      <Button htmlType="submit" type="primary" size="middle">
        Thêm
      </Button>
    </Form>
  )
}
export default Store
