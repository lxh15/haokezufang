<template>
  <div class="my">
    <!-- 用户未登录状态 -->
    <div class="img" v-if="!isToKen">
      <img :src="img" alt="" />
      <!-- 登录信息 -->
      <div class="denglu">
        <div class="toux">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
        </div>
        <p>游客</p>
        <van-button class="btn" type="primary" @click="click"
          >去登陆</van-button
        >
      </div>
    </div>

    <!-- 用户登录状态 -->
    <div class="img" v-else>
      <img :src="img2" alt="" />
      <!-- 登录信息 -->
      <div class="denglu">
        <div class="toux">
          <img :src="userimg" alt="" />
        </div>
        <p>用户_82932</p>
        <van-button class="btn" type="primary" @click="clickFn"
          >退出</van-button
        >
        <div class="edit">编辑个人资料></div>
      </div>
    </div>

    <!-- 分类信息 -->
    <div class="feilei">
      <van-grid :column-num="3" clickable>
        <van-grid-item text="我的收藏" @click="shoucangFn">
          <template #icon>
            <span class="iconfont icon-shoucang"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="我的出租" @click="chuzuFn">
          <template #icon>
            <span class="iconfont icon-chuzuwu"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="看房记录">
          <template #icon>
            <span class="iconfont icon-lishijilu_huaban"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="成为房主">
          <template #icon>
            <span class="iconfont icon-shenfenzheng"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="个人资料">
          <template #icon>
            <span class="iconfont icon-gerenziliao"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="联系我们">
          <template #icon>
            <span class="iconfont icon-kefu"></span>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 底部图片 -->
    <div class="banner">
      <img :src="imgSrc" alt="" />
    </div>
  </div>
</template>

<script>
import img from '@/assets/imgs/bgc.png'
import img2 from '@/assets/imgs/avatar.png'
import imgSrc from '@/assets/imgs/banner.png'
import userimg from '@/assets/imgs/abc.png'
export default {
  data () {
    return {
      img, // 未登录背景图
      img2, // 用户登陆以后背景图
      imgSrc, // 底部背景图
      userimg
    }
  },
  computed: {
    isToKen () {
      // 两个叹号代表把这个表达式转为布尔值 true或者false return
      return !!this.$store.state.user.token // 看看能不能取到token
    }
  },
  methods: {
    // 点击登录 去login页面
    click () {
      this.$router.push({
        path: '/login'
      })
    },
    clickFn () {
      // 弹出层确认
      this.$dialog
        .confirm({ title: '好客租房', message: '是否退出登录' })
        .then(() => {
          // 点击确认退出登录 // 退出登录给token清空 传递一个空对象
          this.$store.commit('setUser', {})
        })
        .catch(() => {
          // on cancel
          // console.log('用户取消')
        })

      // this.$router.go(0)
    },
    // 去我的收藏
    shoucangFn () {
      // 判断token是否存在决定用户是否登录
      // 登录以后在跳转 否则就去登陆页面
      if (this.isToKen) {
        this.$router.push('/favorites')
      } else {
        this.$router.push('/login')
      }
    },
    // 去我的出租
    chuzuFn () {
      // 判断token是否存在决定用户是否登录
      // 登录以后在跳转 否则就去登陆页面
      if (this.isToKen) {
        this.$router.push('/rent')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.my {
  margin-bottom: 100px;
  .img {
    min-height: 300px;
    position: relative;
    // background-color: aqua;
    img {
      width: 100%;
    }
    .denglu {
      position: absolute;
      background: #fff;
      width: 85%;
      height: 55%;
      bottom: 0px;
      left: 50%;
      transform: translateX(-50%);
      box-shadow: 0 0 10px 3px #ddd;
      margin: 50px auto 0;
      padding: 0 20px;
      text-align: center;
      font-size: 13px;
      // background-color: pink;
      .toux {
        position: relative;
        transform: translateY(-50%);
        border-radius: 50%;
        width: 100px;
        height: 100px;
        border: 5px solid #f5f5f5;
        display: inline-block;
        box-shadow: 0 2px 2px #bdbdbd;
        img {
          width: 100%;
          border-radius: 50%;
        }
      }
      p {
        margin-top: -30px;
      }
      .btn {
        width: 150px;
        height: 60px;
        border-radius: 10%;
      }
      .edit {
        margin-top: 40px;
      }
    }
  }
  .feilei {
    margin-top: 50px;
  }
  .banner {
    width: 92%;

    margin: 20px auto;
    img {
      width: 100%;
    }
  }
  .iconfont {
    font-size: 50px;
  }
}
</style>
