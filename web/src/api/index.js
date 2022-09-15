const axios = require('axios')

const instance = axios.create({
  baseUrl: process.env.API_BASE_URL,
  timeout: 1000,
})

export const getUser = async (options) => {
  try {
    const res = await instance.get('api/users', {
      params: {
        ...options,
      },
    })
    return res
  } catch (error) {
    if (error) {
      return Promise.reject(new Error(error.message))
    }
  }
}
