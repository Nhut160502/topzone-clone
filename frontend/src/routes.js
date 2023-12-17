import Default from './customer/layouts/Default'
import { Cart, Category, Home, Product } from './customer/pages'

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
]
