<template>
  <div>
    <!-- 登陆导航栏 -->
    <van-nav-bar title="账号登陆" class="navbar">
      <template #left>
        <van-icon name="arrow-left" />
      </template>
    </van-nav-bar>
    <!-- 登录 账号输入框 -->
    <van-form @submit="onSubmit" class="from">
      <van-field
        v-model="username"
        name="用户名"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <!-- 登录 密码输入框 -->
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <!-- 提交按钮 -->
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登录</van-button>
      </div>
    </van-form>
    <p class="reg">还没有账号？<a @click.prevent href="#">去注册</a></p>
  </div>
</template>

<script>
import { login } from '@/Apis/user'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async onSubmit () {
      //   console.log(this.username, this.password)
      const res = await login(this.username, this.password)
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  background: #21b97a;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  :deep(.van-icon-arrow-left) {
    color: #fff;
  }
}
//  van-button--info van-button--normal van-button--block
// van-button--round
.from {
  .van-button {
    background: #1cb676;
    border: none;
  }
}
.reg {
  width: 100%;
  text-align: center;
  font-size: 12px;
}

// .from {
//   :deep(.van-nav-bar__content) {
//     background: #21b97a;
//     color: #fff;
//   }
// }
</style>
