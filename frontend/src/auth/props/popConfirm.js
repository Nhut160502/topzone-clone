import React from 'react'
import { QuestionCircleOutlined } from '@ant-design/icons'

export const popConfirm = {
  title: 'Cảnh báo',
  description: 'Dử liệu sẽ bị xóa vĩnh viển và không thể khôi phục. Bạn có muốn tiếp tục?',
  okText: 'Tiếp tục',
  cancelText: 'Hủy',
  icon: (
    <QuestionCircleOutlined
      style={{
        color: 'red',
      }}
    />
  ),
}
