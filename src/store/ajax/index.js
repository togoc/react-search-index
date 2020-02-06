import axios from 'axios'

const ajax = axios.create({
    baseURL: '/api/search'
})


export default ajax