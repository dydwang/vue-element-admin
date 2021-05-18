import $routerGo from './routerGo'
import $Time from './Time'
import api from '../axios/api'
import download from './download'

export default function(Vue) {
  Vue.prototype.$routerGo = $routerGo
  Vue.prototype.$Time = function(date) { /** 获取时间*/
    return new $Time(date)
  }
  Vue.prototype.$copy = function(data) { /**  对象不指向同一地址拷贝 --深度拷贝 */
    return JSON.parse(JSON.stringify(data))
  }
  Vue.prototype.$bus = new Vue()

  Vue.prototype.$api = api

  Vue.prototype.$download = download
}
