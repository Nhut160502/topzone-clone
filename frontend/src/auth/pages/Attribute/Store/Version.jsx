import { Button, Form, Input } from 'antd'
import React from 'react'

const Version = () => {
  return (
    <Form>
      <Form.Item label="Tên phiên bản" name="name">
        <Input />
      </Form.Item>
      <Button htmlType="submit" type="primary">
        Thêm
      </Button>
    </Form>
  )
}

export default Version
