import { Form, Input, Select, Space } from 'antd'
import React from 'react'
import Uploads from 'src/auth/components/Uploads'
import { configsForm } from 'src/auth/configs/form'

const options = [
  {
    label: 'China',
    value: 'china',
    emoji: '🇨🇳',
    desc: 'China (中国)',
  },
  {
    label: 'USA',
    value: 'usa',
    emoji: '🇺🇸',
    desc: 'USA (美国)',
  },
  {
    label: 'Japan',
    value: 'japan',
    emoji: '🇯🇵',
    desc: 'Japan (日本)',
  },
  {
    label: 'Korea',
    value: 'korea',
    emoji: '🇰🇷',
    desc: 'Korea (韩国)',
  },
]

const attrs = [
  {
    label: 'Dung lượng',
    value: 'capacity',
  },
  {
    label: 'Phiên bản',
    value: 'version',
  },
]
const Store = () => {
  return (
    <Form {...configsForm}>
      <Form.Item label="Danh mục">
        <Select
          mode=""
          placeholder="select one country"
          options={options}
          optionRender={(option) => (
            <Space>
              <span role="img" aria-label={option.data.label}>
                {option.data.emoji}
              </span>
              {option.data.desc}
            </Space>
          )}
        />
      </Form.Item>

      <Form.Item label="Danh mục con">
        <Select mode="" placeholder="select one country" options={attrs} />
      </Form.Item>

      <Form.Item label="Tên sản phẩm">
        <Input />
      </Form.Item>

      <Form.Item label="Thuộc tính">
        <Select mode="" placeholder="select one country" options={attrs} />
      </Form.Item>

      <Form.Item label="Dung lượng">
        <Select
          mode=""
          placeholder="select one country"
          defaultValue={['china']}
          options={attrs}
          optionRender={(option) => (
            <Space>
              <span role="img" aria-label={option.data.label}>
                {option.data.emoji}
              </span>
              {option.data.desc}
            </Space>
          )}
        />
      </Form.Item>

      <Form.Item label="Phiên bản">
        <Select
          mode=""
          placeholder="select one country"
          defaultValue={['china']}
          options={attrs}
          optionRender={(option) => (
            <Space>
              <span role="img" aria-label={option.data.label}>
                {option.data.emoji}
              </span>
              {option.data.desc}
            </Space>
          )}
        />
      </Form.Item>

      <Form.Item label="Màu sắc">
        <Select
          mode="multiple"
          placeholder="select one country"
          options={attrs}
          optionRender={(option) => (
            <Space>
              <span role="img" aria-label={option.data.label}>
                {option.data.emoji}
              </span>
              {option.data.desc}
            </Space>
          )}
        />
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <Uploads multiple />
      </Form.Item>
      <Form.Item label="Số luọng">
        <Input type="number" />
      </Form.Item>

      <Form.Item label="Sản phẩm gợi ý">
        <Select mode="multiple" placeholder="select one country" options={attrs} />
      </Form.Item>

      <Form.Item label="Sản phẩm giảm giá khi mua cùng">
        <Select mode="multiple" placeholder="select one country" options={attrs} />
      </Form.Item>

      <Form.Item label="Chi tiết sản phẩm">
        <Select mode="multiple" placeholder="select one country" options={attrs} />
      </Form.Item>

      <Form.Item label="Hình ảnh mô tả">
        <Uploads multiple />
      </Form.Item>
    </Form>
  )
}
export default Store
