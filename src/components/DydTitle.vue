<template>
  <div class="DydTitle">
    <div class="line" />
    <span class="text">
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: 'DydTitle',
  components: {},
  props: [''],
  data() {
    return {}
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
  .DydTitle {
    display: inline-block;
    height: 20px;
    line-height: 20px;
    .line {
      float: left;
      height: calc(100% - 4px);
      margin-top: 2px;
      margin-right: 8px;
      width: 4px;
      background: #538AFD;
      border-radius: 2px;
    }
    .text {
      font-weight: 600;
      font-size: 18px;
      color: #333333;
      letter-spacing: 0;
      line-height: 18px;
    }
  }
</style>

