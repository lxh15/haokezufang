<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home">
        <template #icon> <span class="iconfont icon-shouye"></span></template>
        首页</van-tabbar-item
      >
      <van-tabbar-item to="/home/search">
        <template #icon>
          <span class="iconfont icon-chazhaofangyuan"></span
        ></template>
        找房</van-tabbar-item
      >
      <van-tabbar-item to="/home/info">
        <template #icon> <span class="iconfont icon-zixun"></span></template>
        资讯</van-tabbar-item
      >
      <van-tabbar-item to="/home/my">
        <template #icon> <span class="iconfont icon-wode"></span></template>
        我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style lang="less" scoped>
.iconfont {
  font-size: 40px;
}
</style>
