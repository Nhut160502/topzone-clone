import axios from '../utils/axios'

const path = '/category'

export const getCategories = () => {
  return axios.get(path)
}

export const deleteCategory = (id) => {
  return axios.delete(`${path}/${id}`)
}

export const storeCateory = (data) => {
  return axios.post(path, data)
}

export const showCategory = (slug) => {
  return axios.get(`${path}/${slug}`)
}
