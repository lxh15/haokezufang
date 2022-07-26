<template>
  <div class="houseDetail">
    <!-- 顶部导航 -->
    <van-nav-bar :title="houses.community" class="navbar">
      <template #left>
        <van-icon name="arrow-left" @click="clickFn" />
      </template>
    </van-nav-bar>
    <!-- 图片 -->
    <div class="swipe">
      <van-swipe :autoplay="3000" lazy-render>
        <van-swipe-item v-for="image in houses.houseImg" :key="image">
          <img :src="`${imgSrc}${image}`" />
        </van-swipe-item>
      </van-swipe>
    </div>

    <main>
      <!-- 房屋详细信息 -->
      <div class="housedetails">
        <div class="housedetails_title">
          <div>{{ houses.title }}</div>
          <van-tag
            type="primary"
            v-for="(item, index) in houses.tags"
            :key="index"
            >{{ item }}
          </van-tag>
        </div>
        <div class="housedetails_info">
          <div class="info_left">
            <div class="box1">{{ houses.price }} <span>/月</span></div>
            <div class="box2">租金</div>
          </div>
          <div class="info_left">
            <div class="box1">{{ houses.roomType }}<span>+</span></div>
            <div class="box2">房型</div>
          </div>
          <div class="info_left">
            <div class="box1">{{ houses.size }}<span>平米</span></div>
            <div class="box2">面积</div>
          </div>
        </div>
        <div class="housedetails_bottom">
          <div class="bottom">
            <div class="bottom_left">装修: <span>精装</span></div>
            <div class="bottom_right">
              朝向:
              <span v-for="(item, index) in houses.oriented" :key="index"
                >{{ item }}
              </span>
            </div>
          </div>
          <div class="bottom">
            <div class="bottom_left">
              楼层: <span>{{ houses.floor }}</span>
            </div>
            <div class="bottom_right">类型: <span>普通住宅</span></div>
          </div>
        </div>
      </div>
      <!-- 房屋地址 -->
      <div class="Houseaddress">
        <p class="nav">小区：<span>天山星城</span></p>
        <div class="map_img">
          地图占位
          <img src="http://api.map.baidu.com/images/openhand.cur" alt="" />
        </div>
        <div style="padding: 10px"><div class="nav_title">房屋配套</div></div>
        <ul>
          <li v-for="(item, index) in houses.supporting" :key="index">
            <span>
              <i class="iconfont" :class="iconObj[item]"></i>
              <div>{{ item }}</div>
            </span>
          </li>
        </ul>
      </div>
      <!-- 房屋概况 -->
      <div class="house_survey">
        <div class="nav_title">房源概况</div>
        <div class="user_info">
          <img src="http://liufusong.top:8080/img/avatar.png" alt="图片" />
          <div class="user_info1">
            <div>王女士</div>
            <van-icon name="passed"> 已认证房主</van-icon>
          </div>
          <van-button plain type="primary">发消息</van-button>
        </div>
        <div>
          1.周边配套齐全，地铁四号线陶然亭站，交通便利，公交云集，距离北京南站、西站都很近距离。
          2.小区规模大，配套全年，幼儿园，体育场，游泳馆，养老院，小学。
          3.人车分流，环境优美。
          4.精装两居室，居家生活方便，还有一个小书房，看房随时联系。
        </div>
      </div>
      <div style="padding: 15px; background: #fff; margin-top: 10px">
        <div class="nav_title">猜你喜欢</div>
      </div>
      <HouseDetailList :list="list"></HouseDetailList>
    </main>

    <!-- 底部导航 -->
    <footer>
      <div class="box1">
        <img src="http://liufusong.top:8080/img/star.png" alt="" />
        <span>收藏</span>
      </div>
      <div class="box2">在线咨询</div>
      <div class="box3"><a href="#">电话预约</a></div>
    </footer>
  </div>
</template>

<script>
import { houseDetail } from '@/Apis/user'
import HouseDetailList from '@/components/HouseDetailList'

export default {
  data () {
    return {
      houses: {},
      list: [
        {
          desc: '72.32㎡/南 北/低楼层',
          houseImg: '/img/message/1.png',
          price: 4500,
          tags: ['随时看房'],
          title: '安贞西里 3室1厅'
        },
        {
          desc: '83㎡/南/高楼层',
          houseImg: '/img/message/2.png',
          price: 7200,
          tags: ['近地铁'],
          title: '天居园 2室1厅'
        },
        {
          desc: '52㎡/西南/低楼层',
          houseImg: '/img/message/3.png',
          price: 4300,
          tags: ['集中供暖'],
          title: '角门甲4号院 1室1厅'
        }
      ],
      iconObj: {
        衣柜: 'icon-yigui',
        洗衣机: 'icon-xiyiji',
        空调: 'icon-kongdiao',
        天然气: 'icon-meiqitianranqi',
        冰箱: 'icon-bingxiang',
        暖气: 'icon-nuanqi',
        电视: 'icon-dianshiji',
        热水器: 'icon-reshuiqi',
        宽带: 'icon-kuandai',
        沙发: 'icon-shafa'
      }
    }
  },
  components: {
    HouseDetailList
  },
  created () {
    // console.log(this.$route.query.houseCode)
    this.houseDetail()
  },
  methods: {
    // 点击左侧 返回到上一页
    clickFn () {
      this.$router.go(-1)
    },
    // 获取房屋的详情
    async houseDetail () {
      const { data } = await houseDetail(this.$route.query.houseCode)
      this.houses = data.body
      console.log(this.houses)
    }
  }
}
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.houseDetail {
  // 头部导航
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f6f5f6;
  .navbar {
    background: #21b97a;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;

    :deep(.van-nav-bar__title) {
      color: #fff;
      font-size: 40px;
    }
    :deep(.van-icon-arrow-left) {
      color: #fff;
    }
  }

  // 图片
  .swipe {
    margin-top: 100px;
    width: 100%;
    // height: 500px;
    min-height: 500px;
    > img {
      height: 100%;
    }
  }
  main {
    margin-bottom: 100px;
  }
  // 房屋详情
  .housedetails {
    //
    background-color: #fff;
    padding: 20px;
    .housedetails_title {
      margin: 20px 0;
      font-size: 40px;
      > .van-tag--primary {
        background-color: #e1f5f8;
        color: #50c3d0;
        font-size: 14px;
        margin: 20px 0;
      }
    }

    // 中间部分
    .housedetails_info {
      border-top: 1px solid #d1d1d1;
      border-bottom: 1px solid #d1d1d1;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .info_left {
        margin: 50px 0;
        text-align: center;
        .box1 {
          font-size: 40px;
          font-weight: bold;
          color: red;
          span {
            font-size: 12px;
          }
        }
        .box2 {
          margin-top: 10px;
          font-size: 16px;
          color: #999;
        }
      }
    }
    // 底部部分
    .housedetails_bottom {
      //
      margin: 40px 0;
      .bottom {
        // width: 50%;
        margin-bottom: 10px;
        display: flex;
        font-size: 30px;
        font-weight: 400;
        .bottom_left {
          flex: 1;
          color: #999;
          span {
            color: #000;
          }
        }
        .bottom_right {
          flex: 1;
          color: #999;
          span {
            color: #000;
          }
        }
      }
    }
  }
  .Houseaddress {
    margin: 30px 0;
    background-color: #fff;
    font-size: 30px;
    > .nav {
      padding: 15px;
      color: #999;
      span {
        color: #333;
      }
    }
    .map_img {
      margin: 10px 0;
      height: 300px;
      background-color: pink;
    }
    .nav2 {
      padding: 20px 15px;
      font-size: 30px;
      color: #000;
      font-weight: 700;
      border-bottom: 1px solid #d1d1d1;
    }
    ul {
      // display: flex;
      width: 100%;
      // justify-content: center;
      // align-content: center;
      li {
        display: inline-block;
        margin-top: 50px;
        text-align: center;
        line-height: 30px;
        width: 20%;
        height: 150px;
        // background-color: pink;
        font-size: 30px;
        > span {
          width: 100%;
          height: 100%;
          div {
            margin-top: 20px;
          }
          .iconfont {
            margin-bottom: 20px;
            font-size: 50px;
          }
        }
      }
    }
  }
  .nav_title {
    font-weight: 600;
    font-size: 30px;
    margin-bottom: 20px;
    padding: 30px 0;
    border-bottom: 1px solid #cecece;
  }

  // 房屋概况
  .house_survey {
    background-color: #fff;
    padding: 20px;
    .user_info {
      position: relative;
      display: flex;
      margin-bottom: 20px;
      align-items: center;
      img {
        width: 100px;
        height: 100px;
        margin: 10px 10px 0 0;
      }
      .user_info1 {
        font-size: 30px;
        .van-icon-passed {
          color: red;
          font-size: 20px;
          margin-top: 10px;
        }
      }
      .van-button--normal {
        position: absolute;
        right: 15px;
        top: 20px;
        height: 70px;
        padding: 0px 30px;
      }
    }
    > div {
      font-size: 30px;
      line-height: 50px;
      font-weight: normal;
    }
  }
  footer {
    position: fixed;
    left: 0;
    bottom: -300px;
    display: flex;
    margin-bottom: 300px;
    align-items: center;
    width: 100%;
    height: 100px;
    background-color: #fff;
    border-top: 1px solid #a9b0c7;
    > div {
      line-height: 100px;
      height: 100%;
      flex: 1;
      width: 33.3333%;
      text-align: center;
      font-size: 40px;
      color: #999;
    }
    .box1 {
      img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
      }
      border-right: 1px solid #a9b0c7;
    }
    .box3 {
      height: 100%;
      text-align: center;
      background-color: #21b97a;
      border-left: 1px solid #a9b0c7;

      a {
        width: 100;
        height: 100%;
        text-decoration: none;
        color: #fff;
      }
    }
  }
}
</style>
