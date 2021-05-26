/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const departmentRouter = {
  path: '/teamwork',
  component: Layout,
  redirect: '/teamwork/index',
  name: '任务协同',
  meta: {
    title: '任务协同',
    icon: 'nested'
  },
  children: [
    {
      path: 'index',
      component: () => import('@/views/teamwork/list'), // Parent router-view
      name: '任务协同', // 任务列表
      meta: { title: '任务协同' },
    },{
      path: 'addFile',
      component: () => import('@/views/teamwork/list/AddFile'), // Parent router-view
      name: '新建协同',
      meta: { title: '新建协同' }, // 知识详情
    },{
      path: 'task',
      component: () => import('@/views/teamwork/taskList'), // Parent router-view
      name: '任务内容',
      meta: { title: '任务内容' }, // 知识详情
    }
  ]
}

export default departmentRouter
