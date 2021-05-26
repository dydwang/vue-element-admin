<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <img :src="logo" class="sidebar-logo">
    <h1 class="sidebar-title">{{ title }} </h1>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: '贵阳市12345公共服务热线知识线上闭环管理系统',
      logo: require('./logo.png')
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 240px;
  padding: 60px 0;
  // line-height: 50px;
  background: #0E2533;;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo {
    width: 50px;
    height: 50px;
    vertical-align: middle;
    margin-right: 12px;
    margin-bottom: 20px;
  }

  & .sidebar-title {
    display: inline-block;
    margin: 0 12px;
    vertical-align: middle;
    font-size: 18px;
    color: #0DD8B1;
    letter-spacing: 0.2px;
    text-align: center;
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
