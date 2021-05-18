// 部署到开发环境

const client = require('scp2')
const ora = require('ora')
const chalk = require('chalk')
const spinner = ora(chalk.green('正在发布到开发服务器...'))
spinner.start()

client.scp('./dist-8890/', { // 本地打包文件的位置
  'host': '172.16.203.101', // IP地址
  'port': '22', // 服务器端口
  'username': '', // 用户名
  'password': '', // 密码
  'path': '/usr/local/nginx/html/dist-8890/' // 项目路径
}, err => {
  spinner.stop()
  if (!err) {
    console.log(chalk.green('开发服务器部署完毕。'))
  } else {
    console.log('err', err)
  }
})
