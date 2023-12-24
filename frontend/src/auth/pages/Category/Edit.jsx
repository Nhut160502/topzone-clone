import { Button, Form, Input } from 'antd'
import { useForm } from 'antd/es/form/Form'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Uploads from 'src/auth/components/Uploads'
import { configsForm } from 'src/auth/configs/form'

const imgs = [
  {
    url: 'https://routine.vn/media/logo/websites/1/logo-white-1.png',
    name: 'Routine',
  },
]

const Edit = () => {
  const { slug } = useParams()
  const [form] = useForm()
  const handleSubmit = (value) => {}
  const handleSubmitFailed = (err) => {}

  useEffect(() => {
    form.setFieldsValue({
      name: 'iPhone',
    })
  }, [form])

  const onGetFiles = (files) => {
    console.log(files)
  }

  useEffect(() => {}, [slug])
  return (
    <Form form={form} {...configsForm} onFinish={handleSubmit} onFinishFailed={handleSubmitFailed}>
      <Form.Item label="Tên danh mục" name="name" rules={[{ required: true, message: '' }]}>
        <Input />
      </Form.Item>
      <Uploads data={imgs} onGetFiles={onGetFiles} multiple />
      <Button htmlType="submit" type="primary" size="middle">
        Thêm
      </Button>
    </Form>
  )
}
export default Edit
