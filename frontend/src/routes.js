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
