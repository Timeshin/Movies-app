import axios from 'axios'

const fetchInstance = axios.create({ baseURL: process.env.REACT_APP_API_URL })

export default fetchInstance
