<template>
  <div class="Info">
    <el-row style="margin-bottom: 30px">
      <dyd-title class="info-title"> 知识更新说明</dyd-title>
      <el-input
        type="textarea"
        :rows="4"
        :autosize="{ minRows: 4, maxRows: 4}"
        placeholder="请输入内容"
        :value="text"
      />
    </el-row>

    <el-row>
      <dyd-title class="info-title"> 知识更新内容
      </dyd-title>
    </el-row>

    <el-row>
      <dyd-title class="info-title"> 协同进度</dyd-title>
      <dyd-table :table-data="tableData" class="dyd-table" height="240px" @getData="getData">
        <el-table-column align="left" prop="name" label="流程">
          <template v-slot="scope">
            <span class="el-icon-check circular"></span>
            <span class="el-icon-close circular"></span>
            <span class="el-icon-more circular"></span>
            <span class="icon-null circular"></span>
            {{scope.row.name}}
            <el-tooltip class="item" effect="dark" content="Top Center 提示文字" placement="top">
              <span style="color: #c0c4cc" class="el-icon-question"></span>
            </el-tooltip>
          </template>
        </el-table-column>
        <el-table-column align="right" header-align="right" prop="name" label="操作人" />
        <el-table-column width="10" />
      </dyd-table>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Info',
  components: {},
  props: ['row'],
  data() {
    return {
      text: '本次知识更新的具体说明\n',
      tableData: [
        { name: 'cess' },
        { name: 'cess' },
        { name: 'cess' },
        { name: 'cess' },
        { name: 'cess' },
        { name: 'cess' },
        { name: 'cess' },
        { name: 'cess' },
        { name: 'cess' },
        { name: 'cess' },
        { name: 'cess' },
        { name: 'cess' }
      ]
    }
  },
  computed: {},
  watch: {},
  mounted() {
  },
  created() {
  },
  methods: {
    getData({ cnt, total }) {
      total(0)
    }
  }
}
</script>

<style scoped lang="scss">
  .Info {
    padding: 30px 20px 0 20px;
    .info-title {
      margin-bottom: 10px;
    }
    /deep/.el-table th > .cell {
      font-size: 14px;
    }
    /deep/.el-table th.is-leaf, /deep/.el-table td{
      border-bottom: 0 !important;
      color: #132233;
    }
    .dyd-table /deep/{
      border-radius: 2px;
      border: 1px solid #D3DAE3;
      .is-left{
        &::after{
          height: 28px ;
          width: 1px ;
          border: 1px dashed #0DD8B1;
          opacity: 0.2;
          content: '';
          display: inline-block;
          position: absolute;
          left: 15px;
          z-index: 3001;
        }
      }
      .is-left:last-child{
        &::after{
          display: none !important;
          width: 0 !important;
          border: 0;
          content:none
        }
      }
      .circular{
        width: 14px !important;
        height: 14px !important;
        border-radius: 14px !important;
        line-height: 14px;
        font-size: 10px;
        text-align: center;
        color: #ffffff;
      }
      .el-icon-check {
        background-color: #0DD8B1;
      }
      .el-icon-close {
        background-color: #FF9A00;
      }
      .el-icon-more {
        background-color: #0DD8B1;
      }
      .icon-null {
        background: #c0c4cc;
        display: inline-block;
        position: relative;
        top: 3px;
      }
    }
  }
</style>

