import qs from 'qs'
export default function ({
  $axios,
  redirect
}) {
  $axios.onRequest(config => {
    if (config.method === 'post') {
      const contentType = config.headers['Content-Type']
      if (contentType && contentType.toLowerCase() === 'multipart/form-data') {
        // 原生表单上传文件，data 不处理
      } else {
        // post 默认json提交 转换成接口接受的表单提交
        config.data = qs.stringify(config.data)
      }
    }
    // token 授权
    // const token = localStorage.getItem('token')
    // if (token) {
    //   config.headers['Authorization'] = token
    // }
  })

  $axios.onResponse(response => {
    if (response.status === 200) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  })
  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
  })
}
