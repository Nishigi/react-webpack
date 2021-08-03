// export default function fetch() {
//     console.log('this is axios.js');
// }
let baseUrl = 'https://cnodejs.org/api/v1'
let $ = window.$
export default function fetch(url, method, data) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: baseUrl + url,
            method,
            data,
            success(res) {
                if (res.success) resolve(res.data)
                else resolve({ err: 1, msg: 'erro' })
            },
            fail(err) {
                reject(err)
            }
        })
    })
}