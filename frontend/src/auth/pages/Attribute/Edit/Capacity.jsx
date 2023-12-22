import { Button, Form, Input } from 'antd'
import React from 'react'

const Capacity = () => {
  return (
    <Form>
      <Form.Item label="Tên dung lượng" name="name">
        <Input />
      </Form.Item>
      <Button type="primary">Thêm</Button>
    </Form>
  )
}

export default Capacity
