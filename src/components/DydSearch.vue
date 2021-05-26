<template>
  <el-input
    class="DydSearch"
    v-model="filterText"
    v-bind="$attrs"
    :placeholder="$attrs.placeholder || '搜索'"
    v-on="$listeners"
    @keyup.enter="search()"
  />
</template>

<script>
export default {
  name: 'DydSearch',
  components: {},
  props: [''],
  data() {
    return {
      filterText: ''
    }
  },
  computed: {},
  watch: {},
  mounted() {
  },
  created() {
  },
  methods: {
    search() {
      this.$emit('search', this.filterText)
    }
  }
}
</script>

<style scoped lang="scss">
  .DydSearch {
  }
</style>

