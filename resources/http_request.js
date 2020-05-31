import axios from 'axios'
import humps from 'humps'

class HttpRequest {
  constructor (url = 'http://localhost:3030') {
    this.axiosInstance = axios.create({
      baseURL: url,
      timeout: 120000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.axiosInstance.interceptors.request.use((config) => {
      const myConfig = config
      myConfig.data = config.data ? humps.decamelizeKeys(config.data) : config.data
      myConfig.params = config.params ? humps.decamelizeKeys(config.params) : config.params
      return myConfig
    }, error => Promise.reject(error))

    this.axiosInstance.interceptors.response.use((response) => {
      const myResponse = response
      myResponse.data = humps.camelizeKeys(response.data)
      return myResponse.data
    }, error => Promise.reject(error.response.data))
  }

  setHeader (header) {
    this.axiosInstance.defaults.headers.common[header.key] = header.value
    this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  }

  fetch (endpoint, data, config) {
    const params = {
      params: data
    }
    const newParams = Object.assign(params, config)
    return this.axiosInstance.get(endpoint, newParams)
  }

  create (endpoint, data, config) {
    return this.axiosInstance.post(endpoint, data, config)
  }

  update (endpoint, data, config) {
    return this.axiosInstance.put(endpoint, data, config)
  }

  edit (endpoint, data, config) {
    return this.axiosInstance.patch(endpoint, data, config)
  }

  remove (endpoint, data, config) {
    const params = { data }
    const newParams = Object.assign(params, config)
    return this.axiosInstance.delete(endpoint, newParams)
  }

  delete (endpoint, id, config) {
    const params = {
      params: {
        id
      }
    }
    const newParams = Object.assign(params, config)
    return this.axiosInstance.delete(endpoint, newParams)
  }
}

export default HttpRequest
