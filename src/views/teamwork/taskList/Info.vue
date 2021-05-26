<template>
  <div class="Info">
    <el-form :model="ruleForm" ref="ruleForm" label-width="90px" class="demo-ruleForm" label-position="top">
      <dyd-title class="info-title" style="margin-bottom: 20px"> 知识类别</dyd-title>
      <el-form-item label="文章标题" prop="name" :rules="[{ required: true}]">
        <el-input :value="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="一级标题" prop="name" :rules="[{ required: true}]">
        <el-input :value="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="二级标题" prop="name" :rules="[{ required: true}]">
        <el-input :value="ruleForm.name"></el-input>
      </el-form-item>
      <dyd-title class="info-title" style="margin-bottom: 20px"> 知识信息 </dyd-title>
      <el-form-item label="标准问" prop="name" :rules="[{ required: true}]">
        <el-input :value="ruleForm.name" type="textarea" :rows="2"></el-input>
        <QA origin="非煤矿矿山企业取得安全生产许可证需要什么" now="非煤矿矿山企业取得安全生产许可证需要什么"></QA>
      </el-form-item>
      <el-form-item label="标准答" prop="name" :rules="[{ required: true}]">
        <el-input :value="ruleForm.name" type="textarea" :rows="4"></el-input>
        <QA
          origin="（一）建立健全主要负责人、分管负责人、安全生产管理人员、职能部门、岗位安全生产责任制；制定安全检查制度、职业危害预防制度、安全教育培训制度、生产安全事故管理制度、重大危险源监控和重大隐患整改制度、设备安全管理制度、安全生产档案管理制度、安全生产奖惩制度等规章制度…"
          now="（一）建立健全主要负责人、分管负责人、安全生产管理人员、职能部门、岗位安全生产责任制；制定安全检查制度、职业危害预防制度、安全教育培训制度、生产安全事故管理制度、重大危险源"></QA>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import QA from "./QA";
export default {
  name: 'Info',
  components: {QA},
  props: [''],
  data() {
    return {
      ruleForm:{
        name:"12334544"
      },
    }
  },
  computed: {},
  watch: {},
  mounted() {
  },
  created() {
  },
  methods: {}
}
</script>

<style scoped lang="scss">
  .Info {
    padding: 30px 20px 0 20px;
    /deep/.el-form-item__label{
      height: 30px;
      line-height: 20px;
    }
    .el-form-item{
      margin-left: 10px;
    }
    .answer-update {
      border: 1px solid #D3DAE3;
      height: 90px;
      overflow: auto;
      padding: 9px 12px;
    }
  }
</style>

