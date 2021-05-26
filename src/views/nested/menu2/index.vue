<template>
  <div style="padding:30px;" class="index">
    <dyd-file />
  </div>
</template>
<script>
export default {
  name: 'Index',
  components: {},
  props: {

  },
  data() {
    return {
      style:{
        width:''
      },
      list: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }]
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
  .index {
  }
</style>
