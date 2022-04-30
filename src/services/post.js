import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com/users'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getById = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

export default {
  getAll,
  getById
}