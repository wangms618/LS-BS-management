import axios from 'axios';  //引入axios可以统一提示报错
import { Message } from 'element-ui'
import config from '@/config/config.js'


const instance = axios.create({
    baseURL: config.server, // 本地环境地址
    timeout: 3000, // 请求超时时间，3000ms未响应则停止请求
    withCredentials: true, // 跨域请求允许携带cookie
    responseType: 'json',
    headers: { 'Content-Type': 'application/json' }
})



//axios请求拦截器
instance.interceptors.request.use(function (config) {
    // 发送请求之前做一些处理
    return config;
}, function (error) {
    // 当请求异常时做一些处理
    // 弹出错误消息
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error);
});


//axios响应拦截器
instance.interceptors.response.use(function (response) {
    
    if (response.status === 200) {
        return response
    } else {
        // 非200状态的处理

        Message({
            message: response.statusText,
            type: 'error',
            duration: 5 * 1000
        })
    }
}, function (error) {

    //当响应异常时做出处理
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error);
})

export default instance