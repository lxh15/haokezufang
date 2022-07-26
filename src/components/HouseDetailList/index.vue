<template>
  <!-- 可复用列表 -->
  <van-list finished-text="没有更多了" class="list">
    <van-cell v-for="(item, index) in list" :key="index">
      <van-card
        :price="item.price + ' 元/月'"
        :desc="item.desc"
        :title="item.title"
        :thumb="`${imgSrc}${item.houseImg}`"
      >
        <template #tags>
          <van-tag plain type="danger">{{ item.tags[0] }}</van-tag>
        </template>
      </van-card>
    </van-cell>
  </van-list>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
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
