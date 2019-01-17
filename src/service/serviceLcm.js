import axios from './service';
const api = '/api';
// 商品管理
export function qryProduct(promise) {
    return axios.post(api + '/app/eat/qryProduct', promise).then(res => {
        return res.data;
    })
}