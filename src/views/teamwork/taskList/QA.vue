<template>
  <div class="qa">
    <div class="qa-row">
      <div class="qa-row-title origin">原文</div>
      <div class="qa-row-text ">
        {{origin}}
      </div>
    </div>
    <div class="qa-row">
      <div class="qa-row-title now">变更</div>
      <div class="qa-row-text ">
        {{now}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QA',
  components: {},
  // eslint-disable-next-line vue/require-prop-types
  props: ['origin', 'now'],
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
  .qa {
    .qa-row{
      min-height: 54px;
      max-height: 90px;
      height: 100%;
      padding: 9px 6px 9px 12px;
      border-radius: 0 0 2px 2px;
      border: 1px solid #D3DAE3;
      display: flex;
      align-items: center;
      .qa-row-text{
        min-height: 36px;
        max-height: 72px;
        height: 100%;
        width: 100%;
        overflow: auto;
        padding-left: 10px;
      }
    }
    .qa-row-title {
      display: inline-block;
      width: 23px;
      height: 40px;
      background: rgba(0, 145, 255, 0.1);
      font-size: 14px;
      font-weight: 400;
      line-height: 16px;
      text-align: center;
      padding: 3px 2px;
    }
    .origin {
      color: #0DD8B1
    }
    .now{
      color: #0091FF;
    }
  }
</style>

