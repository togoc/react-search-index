import { message } from 'antd';
import axios from 'axios'

const ajax = axios.create({
    baseURL: '/api/search'
})

const key = 'loading';

let times = 0



ajax.interceptors.request.use(request => {
    message.loading({ content: '获取数据...', key });
    times++
    return request
}, error => {
    return Promise.reject(error)
})


ajax.interceptors.response.use(response => {
    times--
    if (times === 0)
        message.success({ content: '加载完成!', key, duration: 0.5 });
    return response
}, error => {
    return Promise.reject(error)
})






export default ajax