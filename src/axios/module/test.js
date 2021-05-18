import http from '../http'
import axios from "../axios";
const api = {}
api.getFileList =(params) => {
  return http.post('/api/quality_inspection/file_list', params)
}

api.upFile =(params) => {
  let fd = new FormData()
  for(let key in params){
    fd.append(key, params[key])
  }
  const config = {
    method: 'post',
    url:'/api/quality_inspection/upload_file',
    data: fd,
    headers:{
      "Content-Type": "multipart/form-data; boundary=----WebKitFormBoundaryIFIkNy4Qmn9eBykw"
    }
  }
  return axios(config)
}

api.getStatistics =(params) => {
  return http.post('/api/quality_inspection/statistical', params)
}

api.lookFileList = (data) =>{
  return http.post('/api/quality_inspection/table_analysis', data)
}

export default api
