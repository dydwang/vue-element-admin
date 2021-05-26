<template>
  <div class="index">
    <el-button type="text" class="el-icon-circle-plus-outline" style="padding-top: 0"> 继续添加</el-button>
    <el-tabs v-model="activeName" type="card" @tab-click="tabClick">
      <el-tab-pane v-for="(item, index) in statusList" :key="index" :label="item.name" :name="item.status+''">
        <template #label>
          <el-badge size="mini" :value="2" class="item" type="warning">
            {{ item.name }}
          </el-badge>
        </template>
      </el-tab-pane>
    </el-tabs>
    <dyd-table :table-data="tableData" :cnt="cnt" @getData="getData" height="700px">
      <el-table-column prop="version" label="协同类型" />
      <el-table-column prop="version" label="文章标题" />
      <el-table-column prop="version" label="知识目录" />
      <el-table-column prop="version" label="标注问" />
      <el-table-column prop="version" label="说明" />
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button type="text" @click="row=scope.row; $refs.drawer.show = true">查看</el-button>
        </template>
      </el-table-column>
    </dyd-table>
    <dyd-drawer ref="drawer" custom-class="drawer" title="协同需求" submit-text="返回" >
      <template #title>
        {{ title }}
        <span class="drawer-title-msg">
          （ 变更人：张三 ）
        </span>
      </template>
      <Info></Info>
    </dyd-drawer>
  </div>
</template>

<script>
import Info from './Info';
export default {
  name: 'Index',
  components: { Info },
  props: [''],
  data() {
    return {
      tableData: [{ version: 123 }, { version: 123 }],
      activeName: '0',
      radio: '0',
      statusList: [
        {
          name: '全部',
          status: 0
        },
        {
          name: '变更',
          status: 1
        },
        {
          name: '新增',
          status: 2
        },
        {
          name: '删除',
          status: 3
        },
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
    },
    title() {
      return {
        '0': '知识变更',
        '1': '知识变更',
        '2': '知识新增',
        '3': '知识删除',
      }[this.activeName]
    }
  },
  watch: {},
  mounted() {
  },
  created() {
  },
  methods: {
    getData({ cnt, total }) {
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
    .drawer-title-msg {
      font-size: 14px;
      font-weight: 400;
      color: #697687;
      position: absolute;
    }
    /deep/.drawer{
      .cancel {
        display: none;
      }
    }
  }
</style>

