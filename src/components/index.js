import DydTitle from './DydTitle' // 竖线标题
import DydPage from './DydPage' // 分页器
import DydTable from './DydTable' // 表格
import DydNullData from './DydNullData' // 空数据
import DydDialog from './DydDialog' // 弹框
import DydUpFile from './DydUpFile' // 上传文件
import DydEditText from './DydEditText' // 上传文件

const publicTitle = {
  install: function(Vue) {
    Vue.component('DydTitle', DydTitle)
    Vue.component('DydPage', DydPage)
    Vue.component('DydTable', DydTable)
    Vue.component('DydNullData', DydNullData)
    Vue.component('DydDialog', DydDialog)
    Vue.component('DydUpFile', DydUpFile)
    Vue.component('DydEditText', DydEditText)
  }
}
export default publicTitle
