<template>
  <div>
    <!-- <h1>首页</h1> -->
    <!-- 其他页面的出口 -->
    <router-view></router-view>
    <!-- 底部导航栏 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from '@/components/footer/index.vue'
export default {
  components: {
    Footer
  }
}
</script>

<style></style>
