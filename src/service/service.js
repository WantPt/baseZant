// import Vue from 'vue'
import axios from 'axios'
import router from '../router';
import { Toast, Notify } from 'vant';
//  设置默认请求头

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
    //  设置请求超时之前的毫秒数
axios.defaults.timeout = 60000
    //  请求拦截器
axios.interceptors.request.use(
    config => {
        Toast.loading({
            mask: true,
            message: '加载中...'
        });
        config.headers = {
            'token': localStorage.getItem('token') || '' // 请求带上token
        }

        return config
    },
    error => {
        Toast.clear();
        return Promise.reject(error)
    }
)
axios.interceptors.response.use((data) => {
    Toast.clear();
    if (data.headers['customize-token']) {
        localStorage.setItem('customize-token', data.headers['customize-token'])
    }
    if (code == 200) {
        return data
    } else {
        if (!data.data) {
            Notify('未知错误');
            return
        }
        Notify(data.data.msg);
    }
}, error => {
    Toast.clear();
    return Promise.reject(error)
})

export default axios