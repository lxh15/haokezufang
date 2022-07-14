<template>
  <div class="my">
    <div class="img" v-if="!user">
      <img src="http://liufusong.top:8080/img/profile/bg.png" alt="" />
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
    <div class="img" v-if="user">
      <img src="http://liufusong.top:8080/img/avatar.png" alt="" />
      <!-- 登录信息 -->
      <div class="denglu">
        <div class="toux">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
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
      <van-grid :column-num="3">
        <van-grid-item text="我的收藏">
          <template #icon>
            <span class="iconfont icon-shoucang"></span>
          </template>
        </van-grid-item>
        <van-grid-item text="我的出租">
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
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
  </div>
</template>

<script>
// 引入Vuex的token
import { mapState } from 'vuex'

export default {
  data () {
    return {
      // img: '/src/assets/imgs/bgc.png'
    }
  },
  methods: {
    click () {
      this.$router.push({
        path: '/login'
      })
    },
    clickFn () {
      // window.localStorage.getItem('token')
      window.localStorage.removeItem('token')
      this.$router.go(0)
    }
  },
  computed: { ...mapState(['user']) }
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
