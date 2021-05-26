<template>
  <div class="DydTable">
    <el-table
      v-loading="loading && isLoading"
      v-bind="$attrs"
      v-on="$listeners"
      :data="tableData"
      stripe
      style="width: 100%"
    >
      <el-table-column
        v-if="showSelect"
        type="selection"
        width="55">
      </el-table-column>
      <slot />
      <template slot="empty">
        <dyd-null-data v-bind="$attrs" />
      </template>
    </el-table>
    <dyd-page v-if="showPage" v-show="pageForm.total > 1" :data="pageForm" v-bind="$attrs" />
  </div>
</template>

<script>
export default {
  name: 'DydTable',
  components: {},
  props: {
    tableData: { // 表格数据
      type: Array,
      default: () => []
    },
    cnt: { // 请求参数
      type: Object,
      default: () => {
        return {

        }
      }
    },
    pageName: {
      type: String,
      default: 'page_index'
    },
    sizeName: {
      type: String,
      default: 'page_size'
    },
    pageSize: { // 分页器默认显示10条
      type: Number,
      default: 10
    },
    isLoading: { // 是否显示加载
      default: true
    },
    showSelect: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      pageForm: {
        size: this.pageSize,
        page: 1,
        total: 0
      },
      loading: true,
      showPage: true
    }
  },
  computed: {
    cntAssign() {
      return Object.assign(
        this.cnt,
        {
          [this.pageName]: this.pageForm.page,
          [this.sizeName]: this.pageForm.size
        }
      )
    },
    watchCntAssign() {
      return JSON.stringify(this.cntAssign)
    }
  },
  watch: {
    watchCntAssign(news, olds) {
      // console.log(news, olds);
      // console.log('watchCntAssign');
      this.getData()
    }
  },
  mounted() {
    // console.log('mounted');
    this.getData()
  },
  created() {
  },
  methods: {
    async getData(call) {
      this.loading = true
      const data = {
        cnt: this.$copy(this.cntAssign), // 请求参数
        total: (val) => { // 请求成功
          this.pageForm.total = val
          !call || call(true)
          this.loading = false
        },
        overtime: () => { // 超时 或 加载失败
          !call || call(false)
          this.loading = false
        }
      }
      this.$emit('getData', data)
    }
  }
}
</script>

<style scoped lang="scss">
  .DydTable {
    /deep/ .DydPage {
      margin-top: 15px;
      text-align: center;
      display: flex;
      align-items: center;
      justify-content:center;
    }
    /deep/.el-table th>.cell {
      line-height: 16px;
      font-size: 16px;
      color: #132233;
      letter-spacing: 0.56px;
    }
    /deep/.el-table th {
      border-bottom-color: #EDF2F7;
    }
    /deep/.el-table td {
      // background-color:  rgba(57,131,250,0.10);
      border-bottom: none;
    }
    /deep/.el-table__empty-block {
      width: calc( 100% - 100px ) !important;
      margin: 50px;
    }
    /deep/.el-table__empty-text{
      width: auto;
    }
  }
</style>

