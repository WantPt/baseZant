// 遍历对象不能为空判断
export function objNull(obj) {
    let flag = [true];
    for (let i in obj) {
        if (!obj[i]) flag = [false, i];
    }
    return flag
}