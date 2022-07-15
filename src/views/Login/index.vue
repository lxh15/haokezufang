<template>
  <div>
    <!-- 登陆导航栏 -->
    <van-nav-bar title="账号登陆" class="navbar">
      <template #left>
        <van-icon name="arrow-left" @click="clickFn" />
      </template>
    </van-nav-bar>
    <!-- 登录 账号输入框 -->
    <van-form @submit="onSubmit" class="from">
      <van-field
        v-model="user.username"
        name="用户名"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <!-- 登录 密码输入框 -->
      <van-field
        v-model="user.password"
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
// 按需引入请求登录接口
import { login } from '@/Apis/user'
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      this.$toast.loading({
        duration: 0, // 持续时间，0表示持续展示不停止
        forbidClick: true // 是否禁止背景点击 message: '登录中...' // 提示消息 })
      })
      try {
        const res = await login(this.user.username, this.user.password)
        console.log(res)
        this.$store.commit('setUser', res.data.body) // 把taken传给Vuex
        // this.$toast.success('登陆成功') // 登陆成功提示
        this.$toast({
          // 延时登录 等待登陆成功提示再去跳转页面
          message: '登录成功',
          icon: 'passed',
          type: 'success',
          duration: 1000, // 提示展示的时长
          onClose: () => {
            this.$router.push('/home/my')
          }
        })
        // this.$router.push({
        //   path: '/home/my'
        // })
      } catch (err) {
        console.log(err)
        this.$toast.fail('登陆失败')
      }
    },
    clickFn () {
      this.$router.back()
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
