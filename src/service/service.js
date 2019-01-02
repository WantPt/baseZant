// import Vue from 'vue'
import axios from 'axios'
import router from '../router';
//  设置默认请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
//  设置请求超时之前的毫秒数
axios.defaults.timeout = 60000

//  请求拦截器
axios.interceptors.request.use(
    config => {
        config.headers = {
            'token': localStorage.getItem('token') || '' // 请求带上token
        }

        return config
    },
    error => {
        return Promise.reject(error)
    }
)
axios.interceptors.response.use((data) => {

    if (data.headers['customize-token']) {
        localStorage.setItem('customize-token', data.headers['customize-token'])
    }
}, error => {
    return Promise.reject(error)
})

export default axios
