import { Button, ColorPicker, Form, Input } from 'antd'
import React from 'react'

const Color = () => {
  return (
    <Form>
      <Form.Item label="Tên màu sắc" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Mã màu" name="code">
        <ColorPicker showText onChange={(e) => console.log(e)} />
      </Form.Item>
      <Button htmlType="submit" type="primary">
        Thêm
      </Button>
    </Form>
  )
}

export default Color
