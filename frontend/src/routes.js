import DefaultLayout from './auth/layouts/DefaultLayout'
import {
  Dashboard,
  EditCapacity,
  EditCategory,
  EditColor,
  EditProduct,
  EditSpecific,
  EditSub,
  EditVersion,
  ListAttribute,
  ListCategory,
  ListProduct,
  ListSpecific,
  ListSub,
  StoreCapacity,
  StoreCategory,
  StoreColor,
  StoreProduct,
  StoreSpecific,
  StoreSub,
  StoreVersion,
} from './auth/pages'
import Default from './customer/layouts/Default'
import { Cart, Category, Home, Product } from './customer/pages'
import Tekzone from './customer/pages/Tekzone'

export const publicRouters = [
  {
    path: '/',
    element: Home,
    layout: Default,
  },
  {
    path: '/c/:slug',
    element: Category,
    layout: Default,
  },
  {
    path: '/p/:slug',
    element: Product,
    layout: Default,
  },
  {
    path: '/cart',
    element: Cart,
    layout: Default,
  },
  {
    path: '/tekzone',
    element: Tekzone,
    layout: Default,
  },
]

export const privateRouters = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    element: Dashboard,
    layout: DefaultLayout,
  },

  // category
  {
    path: '/dashboard/category',
    name: 'Danh mục',
    element: ListCategory,
    layout: DefaultLayout,
  },
  {
    path: '/dashboard/category/edit/:slug',
    name: 'Chỉnh sửa',
    element: EditCategory,
    layout: DefaultLayout,
  },
  {
    path: '/dashboard/category/store',
    name: 'Thêm danh mục',
    element: StoreCategory,
    layout: DefaultLayout,
  },

  // sub category
  {
    path: '/dashboard/subcategory',
    name: 'Danh mục con',
    element: ListSub,
    layout: DefaultLayout,
  },
  {
    path: '/dashboard/subcategory/edit/:slug',
    name: 'Chỉnh sửa',
    element: EditSub,
    layout: DefaultLayout,
  },
  {
    path: '/dashboard/subcategory/store',
    name: 'Thêm danh mục con',
    element: StoreSub,
    layout: DefaultLayout,
  },

  // product
  {
    path: '/dashboard/product',
    name: 'Sản phẩm',
    element: ListProduct,
    layout: DefaultLayout,
  },
  {
    path: '/dashboard/product/edit',
    name: 'Chỉnh sửa',
    element: EditProduct,
    layout: DefaultLayout,
  },
  {
    path: '/dashboard/product/store',
    name: 'Thêm sản phẩm',
    element: StoreProduct,
    layout: DefaultLayout,
  },

  // attribute
  {
    path: '/dashboard/attribute',
    name: 'Thuộc tính',
    element: ListAttribute,
    layout: DefaultLayout,
  },
  {
    path: '/dashboard/attribute/edit/color',
    name: 'Chỉnh sửa',
    element: EditColor,
    layout: DefaultLayout,
  },
  {
    path: '/dashboard/attribute/store/color',
    name: 'Thêm màu sắc',
    element: StoreColor,
    layout: DefaultLayout,
  },
  {
    path: '/dashboard/attribute/edit/capacity',
    name: 'Chỉnh sửa',
    element: EditCapacity,
    layout: DefaultLayout,
  },
  {
    path: '/dashboard/attribute/store/capacity',
    name: 'Thêm dung lượng',
    element: StoreCapacity,
    layout: DefaultLayout,
  },
  {
    path: '/dashboard/attribute/edit/version',
    name: 'Chỉnh sửa',
    element: EditVersion,
    layout: DefaultLayout,
  },
  {
    path: '/dashboard/attribute/store/version',
    name: 'Thêm phiên bản',
    element: StoreVersion,
    layout: DefaultLayout,
  },

  // specific
  {
    path: '/dashboard/specific',
    name: 'Chi tiết',
    element: ListSpecific,
    layout: DefaultLayout,
  },
  {
    path: '/dashboard/specific/edit',
    name: 'Chỉnh sửa',
    element: EditSpecific,
    layout: DefaultLayout,
  },
  {
    path: '/dashboard/specific/store',
    name: 'Thêm chi tiết',
    element: StoreSpecific,
    layout: DefaultLayout,
  },
]
