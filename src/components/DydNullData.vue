<template>
  <div class="DydNullData">
    <img class="null-image" src="@/assets/img/nullData.png">
    <div class="dyd-null-page-text">{{nullDataText}}</div>
  </div>
</template>

<script>
  export default {
    name: 'index',
    props: {
      nullDataText: {
        type: String,
        default: '暂无数据'
      }
    },
    components: {},
    data() {
      return {}
    },
    computed: {},
    methods: {},
    mounted() {
    },
    created() {
    },
    watch: {}
  }
</script>

<style scoped lang="scss">
  .DydNullData {
    display:block;
    text-align: center;
    align-self: center;
    padding: 50px;
    .dyd-null-page-text {
      margin-top: 50px;
      font-size: 18px;
      color: #333333;
      letter-spacing: 0.31px;
      text-align: center;
    }
  }
</style>

