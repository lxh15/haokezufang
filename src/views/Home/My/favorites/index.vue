<template>
  <div>
    <!-- 顶部导航 -->
    <van-nav-bar title="收藏列表" class="navbar">
      <template #left>
        <van-icon name="arrow-left" @click="clickFn" />
      </template>
    </van-nav-bar>
    <!-- 收藏列表 -->
    <van-list finished-text="没有更多了" class="list">
      <van-cell v-for="(item, index) in list" :key="index">
        <van-card
          @Click="xiangQ"
          :price="item.price + ' 元/月'"
          :desc="item.desc"
          :title="item.title"
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        >
          <template #tags>
            <van-tag plain type="danger">{{ item.tags[0] }}</van-tag>
          </template>
        </van-card>
      </van-cell>
    </van-list>
  </div>
</template>

<script>
// 引入收藏接口
import { favorites } from '@/Apis/user'
export default {
  name: 'favorites',
  data () {
    return {
      list: [],
      loading: false,
      finished: false
    }
  },
  async created () {
    try {
      const res = await favorites()
      this.list = res.data.body
      //   console.log(res.data.body)
      //   console.log(this.list)
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    clickFn () {
      this.$router.back()
    },
    onLoad () {},
    xiangQ () {
      console.log(1)
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
.list {
  .van-card {
    background-color: #fff;
    .van-card__title {
      font-size: 20px;
      font-weight: bolder;
    }
    .van-card__desc {
      font-size: 12px;
      color: #afb2b3;
    }
    .van-tag--danger.van-tag--plain {
      color: #39becd;
      background: #e1f5f8;
    }
    .van-tag--plain::before {
      border: none;
    }
    .van-card__price {
      font-size: 12px;
      color: #fa5741;
    }
  }
}
</style>
