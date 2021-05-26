<template>
  <div class="index">
    <el-row style="margin-bottom: 20px">
      <el-button type="text" style="padding: 0;margin-right: 30px;position: relative;top: 1px;color: #606266" @click="$routerGo('addFile')">新建协同</el-button>
      <el-radio-group v-model="radio" >
        <el-radio label="0">我发起的</el-radio>
        <el-radio label="1">指派我的</el-radio>
      </el-radio-group>
    </el-row>

    <el-tabs v-model="activeName" type="card" @tab-click="tabClick">
      <el-tab-pane v-for="(item, index) in statusList" :key="index" :label="item.name" :name="item.status+''">
        <template #label>
          <el-badge size="mini" :value="2" class="item" type="warning">
            {{ item.name }}
          </el-badge>
        </template>
      </el-tab-pane>
    </el-tabs>
    <dyd-table :table-data="tableData" :cnt="cnt" @getData="getData">
      <el-table-column prop="version" label="协同编号" />
      <el-table-column prop="version" label="发起时间" />
      <el-table-column prop="version" label="发起单位" />
      <el-table-column prop="version" label="协同状态" />
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button type="text" @click="row=scope.row; $refs.drawer.show = true">详情</el-button>
        </template>
      </el-table-column>
    </dyd-table>
    <dyd-drawer title="协同需求" ref="drawer" submit-text="知识详情" cancel-text="返回" @submit="$routerGo('task')">
      <infos :row="row" />
    </dyd-drawer>
  </div>
</template>

<script>
import Infos from './Info'
export default {
  name: 'Index',
  components: { Infos },
  props: [''],
  data() {
    return {
      tableData: [{ version: 123 }],
      activeName: '0',
      radio: '0',
      statusList: [
        {
          name: '待审核',
          status: 0
        },
        {
          name: '待处理',
          status: 1
        },
        {
          name: '已完结',
          status: 2
        }
      ],
      row: {}
    }
  },
  computed: {
    cnt() {
      return {
        status: this.activeName,
        radio: this.radio
      }
    }
  },
  watch: {},
  mounted() {
  },
  created() {
  },
  methods: {
    getData({ cnt, total }) {
      console.log('加载')
      total(0)
    },
    tabClick() {

    }
  }
}
</script>

<style scoped lang="scss">
  @import'@/styles/tabs-item.scss';
  .index {
    /deep/.el-tabs__header{
      margin-bottom: 0;
      background: #ffffff;
    }
    /deep/.el-badge__content.is-fixed {
      top: 8px;
      right: 5px;
    }
    /deep/.el-radio__input {
      width: 0;
      display: none;
    }
    /deep/.el-radio__label{
      padding-left: 0;
    }

  }
</style>

