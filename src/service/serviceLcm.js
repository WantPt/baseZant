import axios from './service';
const api = '/api';
// 商品管理
export function qryProduct(promise) {
    return axios.post(api + '/app/eat/qryProduct', promise).then(res => {
        return res.data;
    })
}
// 点击添加分类
export function addClassification(promise) {
    return axios.post(api + '/app/eat/addClassification', promise).then(res => {
        return res.data;
    })
}
// 添加商品
export function addProduct(promise) {
    return axios.post(api + '/app/eat/addProduct', promise).then(res => {
        return res.data;
    })
}
// 删除分类
export function delClassification(promise) {
    return axios.post(api + '/app/eat/delClassification', promise).then(res => {
        return res.data;
    })
}
// 删除商品
export function delProduct(promise) {
    return axios.post(api + '/app/eat/delProduct', promise).then(res => {
        return res.data;
    })
}