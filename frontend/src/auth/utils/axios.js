import axiosDefault from 'axios'

const axios = axiosDefault.create({
  baseURL: `http://localhost:8080/auth/api/`,
})

export default axios
