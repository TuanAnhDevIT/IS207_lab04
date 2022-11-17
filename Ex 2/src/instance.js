import axios from 'axios'

const instance = axios.create({
    baseURL: "YourBackendURL"
})

export default instance 