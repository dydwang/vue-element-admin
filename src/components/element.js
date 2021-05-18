import Element from 'element-ui';
export default function(Vue) {
  // 表格文字溢出时省略号再提示
  Element.TableColumn.props['showOverflowTooltip'].default = true
  // 文字标题居中
  Element.TableColumn.props['align'].default = 'center'
  Element.TableColumn.props['headerAlign'].default = 'center'
  Vue.use(Element)
}
