import { Form, Input, Select, Space } from 'antd'
import React from 'react'

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
const Edit = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`)
  }

  return (
    <Form>
      <Form.Item label="Danh mục" name="category">
        <Select
          mode=""
          placeholder="select one country"
          defaultValue={['china']}
          onChange={handleChange}
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
      <Form.Item label="Tên" name="name">
        <Input />
      </Form.Item>
    </Form>
  )
}
export default Edit
