<template>
  <div class="home">
    <!-- 顶部搜索框  -->
    <div class="top">
      <!-- 搜索框 -->
      <van-cell-group inset>
        <van-field
          v-model="value1"
          label="北京"
          placeholder="请输入小区或地址"
          class="top-inp"
        >
          <template #left-icon>
            <span class="bor-fff">|</span>

            <span class="iconfont icon-xiangxia1 left"></span>
          </template>
          <template #right-icon>
            <span class="iconfont icon-31sousuo right"></span>
          </template>
        </van-field>
      </van-cell-group>

      <!-- 地图图标 -->
      <span class="iconfont icon-dituzhaofang"></span>
    </div>

    <!-- 轮播图 -->
    <div class="swipe">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in images" :key="image">
          <img :src="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 中间租房字体图标 -->
    <van-grid :border="false" class="grid">
      <van-grid-item text="整租">
        <template #icon>
          <span class="iconfont icon-pinzhizhengzu"></span>
        </template>
      </van-grid-item>

      <van-grid-item text="合租">
        <template #icon>
          <span class="iconfont icon-shuangren"></span>
        </template>
      </van-grid-item>

      <van-grid-item text="地图找房">
        <template #icon>
          <span class="iconfont icon-dituzhaofang"></span>
        </template>
      </van-grid-item>
      <van-grid-item text="去出租">
        <template #icon>
          <span class="iconfont icon-chuzuwu"></span>
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 租房小组 -->
    <div class="zufang">
      <van-cell title="租房小组" value="更多" />
      <van-grid direction="horizontal" :column-num="2" :border="false">
        <van-grid-item icon="photo-o" v-for="item in homeGroups" :key="item.id">
          <van-image width="50" height="50" :src="`${imgSrc}${item.imgSrc}`" />
          <template>
            {{ item.title }}
            <br />
            {{ item.desc }}
          </template>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import img1 from '@/assets/imgs/1.png'
import img2 from '@/assets/imgs/2.png'
import img3 from '@/assets/imgs/3.png'
// 引入Api
import { getHomeGroups } from '@/Apis/user'
export default {
  data () {
    const images = [img1, img2, img3] // 轮播图
    return {
      images,
      value1: '',
      homeGroups: [],
      imgUrl: 'http://115.159.87.220:8080'
    }
  },
  created () {
    this.getHomeGroups()
  },
  methods: {
    async getHomeGroups () {
      const { data } = await getHomeGroups()
      this.homeGroups = data.body
      console.log(this.homeGroups)
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  .top {
    position: absolute;
    top: 2%;
    left: 0%;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    > .iconfont {
      font-size: 60px;
      color: #fff;
      margin-right: 30px;
      .top-inp {
        position: relative;
      }
    }
    :deep(.left) {
      position: absolute;
      top: 20%;
      left: 16%;
    }
    :deep(.right) {
      position: absolute;
      top: 2%;
      left: -10%;
    }
    .bor-fff {
      position: absolute;
      left: 25%;
      color: #e5e5e5;
    }
  } // 轮播图
  .swipe {
    width: 100%;
    height: 220px;
    margin-bottom: 213px;
    img {
      width: 100%;
    }
  }
  .grid {
    .van-grid-item__icon-wrapper {
      position: relative;
      width: 40px;
      height: 40px;
      background-color: #f2fbf7;
      border-radius: 50%;
    }

    .iconfont,
    :deep(.van-icon-wap-home-o:before),
    :deep(.van-icon-friends-o:before) {
      font-size: 70px;
      color: #33be84;
    }
    :deep(.van-grid-item__text) {
      font-size: 30px;
      margin-top: 20px;
    }
  }
  .zufang {
    .van-cell {
      background-color: #f6f5f6;
    }
    :deep(.van-grid-item__content--horizontal) {
      font-size: 12px;
    }
    :deep(.van-image) {
      margin-right: 30px;
    }

    .van-grid {
      //
      background-color: #f6f5f6;
      .van-grid-item {
        padding: 15px;
      }
    }
  }
}
</style>
