<template>
  <div class="epetHome">
    <div class="headerWrap" >
      <div class="downloadApp" @click="closeDL" v-if="isClose">
        <a href="#">
          <img src="../../common/img/downloadApp.jpg" alt="">
        </a>
        <span class="closebtn">
        <img src="../../common/img/closebtn_03.png" alt="">
      </span>
      </div>
      <HeaderEpet/>
    </div>
    <div class="bts" ref="bts" >
      <div class="contentWrap">
        <div class="banner">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(dog_banner,index) in home.dog_banner" :key="index">
                <a href="#">
                  <img :src="dog_banner" alt="">
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="activity">
          <a href="javascript:;">
            <img :src="home.dog_img" alt="">
          </a>
        </div>
        <div class="hottype">
          <div class="hotItem" v-for="(menulist,index) in home.menu_list" :key="index">
            <a href="javascript:;">
              <img :src="menulist" alt="">
            </a>
          </div>
        </div>
        <div class="adv">
          <a href="javascript:;">
            <img :src="home.miaosha" alt="">
          </a>
        </div>
        <div class="berserk">
          <div class="berserkTime">
            <div class="tit">
            <span class="titimg">
              <img src="https://static.epetbar.com/static_wap/appmall/main/new_index_icon_suprice.png?version=03" alt="">
            </span>
              <span class="nexttip">本场结束</span>
              <span class="time">
              <div class="nextTime">
                <span class="time1-1">20</span>
                <span class="time-zi">:</span>
                <span class="time1-1">00</span>
              </div>
            </span>
              <span class="more">
              <img src="https://img2.epetbar.com/nowater/2018-03/13/00/3e7c62238a46eb5da0317422f531a7c6.png" alt="">
            </span>
            </div>
            <div class="pro">
              <div class="swiper-container">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <a href="#">
                      <img src="https://img1.epetbar.com/2017-09/28/10/9876aff7e2c82b7e07fc0d2b5f47c576.jpg?x-oss-process=style/fill&$1=300&$2=300">
                      <div class="price">
                        <span class="ft12">¥</span>
                        <span class="ft17">4.80</span>
                      </div>
                      <p class="saveMoney">省43.20</p>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <img src="https://img1.epetbar.com/2017-03/08/8/e9d557ad275060a67574834a21aecf15.jpg?x-oss-process=style/fill&$1=300&$2=300">
                      <div class="price">
                        <span class="ft12">¥</span>
                        <span class="ft17">4.80</span>
                      </div>
                      <p class="saveMoney">省88.20</p>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <img src="https://img1.epetbar.com/2015-05/16/d2d57fa9309ea5c52a4d91fa2cadfefe.jpg?x-oss-process=style/fill&$1=300&$2=300">
                      <div class="price">
                        <span class="ft12">¥</span>
                        <span class="ft17">4.80</span>
                      </div>
                      <p class="saveMoney">省31.50</p>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <img src="https://img1.epetbar.com/2016-03/28/8/5180618245d1b13632b6d5d15f1f9a18.jpg?x-oss-process=style/fill&$1=300&$2=300">
                      <div class="price">
                        <span class="ft12">¥</span>
                        <span class="ft17">4.80</span>
                      </div>
                      <p class="saveMoney">省170.0</p>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <img src="https://img1.epetbar.com/2016-03/25/16/cd0923d809de170f809faaf1cbb2029f.jpg?x-oss-process=style/fill&$1=300&$2=300">
                      <div class="price">
                        <span class="ft12">¥</span>
                        <span class="ft17">4.80</span>
                      </div>
                      <p class="saveMoney">省43.20</p>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <img src="https://img1.epetbar.com/2016-03/24/10/560a3dc659c5e3878339494a6c4bf46e.jpg?x-oss-process=style/fill&$1=300&$2=300">
                      <div class="price">
                        <span class="ft12">¥</span>
                        <span class="ft17">4.80</span>
                      </div>
                      <p class="saveMoney">省43.20</p>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <img src="https://img1.epetbar.com/2016-03/28/8/5180618245d1b13632b6d5d15f1f9a18.jpg?x-oss-process=style/fill&$1=300&$2=300">
                      <div class="price">
                        <span class="ft12">¥</span>
                        <span class="ft17">4.80</span>
                      </div>
                      <p class="saveMoney">省43.20</p>
                    </a>
                  </div>

                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="adv">
          <a href="javascript:;">
            <img :src="home.brand_power" alt="">
          </a>
        </div>
        <div class="adv">
          <a href="javascript:;">
            <img :src="home.gif" alt=""></a>
        </div>
        <div class="adv">
          <a href="javascript:;">
            <img :src="home.vip" alt="">
          </a>
        </div>
        <div class="service">
          <a href="javascript:;" v-for="(Vservice,index) in home.vip_services" :key="index">
            <img :src="Vservice" alt="">
          </a>
        </div>
        <div class="adv">
          <a href="javascript:;">
            <img :src="home.dapaituan" alt="">
          </a>
        </div>
        <div class="sale">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide" v-for="(item,index) in home.dapaituan_list" :key="index">
                <a href="#">
                  <img :src="item" alt="">
                </a>
              </div>
            </div>
            <div class="swiper-pagination"></div>
          </div>
        </div>
        <div class="adv">
          <a href="javascript:;">
            <img :src="home.haohuo" alt="">
          </a>
        </div>
        <div class="brand">
          <a href="javascript:;" v-for="(item,index) in home.haohuo_list" :key="index">
            <img :src="item" alt="">
          </a>
        </div>
        <div class="adv">
          <a href="javascript:;">
            <img :src="home.zuican" alt="">
          </a>
        </div>
        <div class="adv">
          <a href="javascript:;">
            <img :src="home.zuican_content" alt="">
          </a>
        </div>
        <div class="adv">
          <a href="javascript:;">
            <img :src="home.special" alt="">
          </a>
        </div>
        <div class="trend" v-if="home.special_list">
          <a class="left" href="javascript:;" >
            <img :src="home.special_list[0]" alt="">
          </a>
          <div class="right">
            <a href="javascript:;">
              <img :src="home.special_list[1]" alt="">
            </a>
            <a href="javascript:;">
              <img :src="home.special_list[2]" alt="">
            </a>
          </div>
        </div>
        <div class="adv">
          <a href="javascript:;">
            <img :src="home.lanmu" alt="">
          </a>
        </div>
        <div class="epetType">
          <a href="javascript:;" v-for="(item,index) in home.lanmu_list" :key="index">
            <img :src="item" alt="">
          </a>
        </div>
        <div class="footer">
          <div class="contactUs">
            <a href="javascript:;" class="highlight">触屏版</a>
            <a href="javascript:;">手机客户端</a>
            <a href="javascript:;">关于我们</a>
            <a href="javascript:;">联系我们</a>
          </div>
          <div class="copyright">© wap.epet.com 版权：重庆易宠科技有限公司</div>
        </div>

      </div>
    </div>
    <div class="switchType"></div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HeaderEpet from '../../components/HeaderEpet/HeaderEpet.vue'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

  export default{
    data(){
      return {
        isClose:true
      }
    },
    mounted(){
      this.$store.dispatch('getHomeInfo')
    },
    watch:{
      home(){
        this.$nextTick(()=>{
          var swiper = new Swiper('.banner>.swiper-container', {
            loop: true,
            autoplay:true,
            delay:1000,
            pagination: {
              el: '.swiper-pagination'
            }
          })
          var swiper2 = new Swiper('.pro>.swiper-container', {
            slidesPerView: 3.5,
            spaceBetween: 10,
          });
          var swiper3 = new Swiper('.sale>.swiper-container', {
            loop: true,
            /*循环*/
            autoplay:true,
            delay:1000,
            /*小圆点*/
            pagination: {
              el: '.swiper-pagination'
            }
          });
          var scroll = new BScroll('.bts',{
            click: true,
          })
        })
      }
    },
    methods:{
      closeDL(){
        this.isClose = false
        this.$refs.bts.style.paddingTop = 86+'px'
      },
    },
    computed: {
      ...mapState(['home']),
    },

    components:{
      HeaderEpet,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  img
    display block
  .swiper-pagination-bullet-active
    background: #fff;
.epetHome
  width 100%
  .headerWrap
    position fixed
    top 0
    left 0
    right 0
    z-index 5
    .downloadApp
      width 100%;
      position relative
      >a
        display inline-block
        width 100%
        >img
          width 100%
      .closebtn
        display inline-block
        width 5%
        position absolute
        top: 20%
        left: 2%
        >img
          width 100%
          height 100%
  .bts
    height 500px
    padding-top 141px
    .contentWrap
      padding-bottom 150px
      width 100%
      /*轮播*/
      .banner
        width 100%
        height 100%
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              width 100%
              height 100%
              display block
              >a
                display block
                width 100%
                height 100%
                >img
                  display block
                  width 100%
                  height 100%
      /*活动图片*/
      .activity
        width 100%
        a
          display block
          width 100%
          img
            width 100%
            display block
      /*热门分类*/
      .hottype
        width 100%
        display flex
        flex-wrap wrap
        .hotItem
          width 20%
          a
            width 100%
            display block
            img
              display block
              width 100%
      /*广告*/
      .adv
        a
          display block
          width 100%
          img
            width 100%
      /*每日疯抢轮播*/
      .berserk
        width 100%
        background-color #fff
        padding-bottom 10px
        .berserkTime
          width 100%
          .tit
            width 100%
            box-sizing border-box
            padding: 10px;
            position relative
            overflow hidden
            .titimg
              float: left;
              img
                width 85px
                display: block;
                vertical-align: middle;
            .nexttip
              position: absolute;
              right: 130px;
              margin-right: 2px;
              font-size: 13px;
              margin-left: 10px;
            .time
              position: absolute;
              right: 70px;
              .nextTime
                .time1-1
                  border 1px solid #ddd
                  padding 1px 2px
                  font-size 13px
                .time-zi
                  font-weight 700
                  font-size 12px
            .more
              display inline-block
              position absolute
              right -55px
              top -2px
              img
                width: 50%;
                vertical-align: middle;
          .pro/*疯抢轮播*/
            width 100%
            height 100%
            .swiper-container
              width 100%
              height 100%
              .swiper-wrapper
                width 100%
                height 100%
                .swiper-slide
                  width 100%
                  height 100%
                  display block
                  >a
                    display block
                    width 100%
                    height 100%
                    >img
                      width 80%
                      height 100%
                      padding-left 10px
                      box-sizing border-box
                    .price
                      color red
                      text-align: center;
                      .ft12
                        font-size 12px
                    .saveMoney
                      color #999
                      font-size 12px
                      text-align center

      /*爱宠星球服务*/
      .service
        display flex
        flex-wrap wrap
        a
          width 50%
          display block
          img
            width 100%
      /*今日特价团*/
      .sale
        width 100%
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              width 100%
              height 100%
              display block
              >a
                display block
                width 100%
                height 100%
                >img
                  display block
                  width 100%
                  height 100%
      /*所有品牌*/
      .brand
        background-color #000
        display flex
        flex-wrap wrap
        a
          width 50%
          display block
          img
            width 100%
      /*潮品萌爪*/
      .trend
        background-color #000
        overflow hidden
        .left
          width 50%
          display block
          float left
          img
            width 100%
        .right
          float right
          width 50%
          a
            width 100%
            display block
            img
              width 100%

      /*e宠分类*/
      .epetType
        background-color #000
        display flex
        flex-wrap wrap
        a
          width 50%
          img
            width 100%
      /*底部*/
      .footer
        padding 1em 0 0
        background #fff
        .contactUs
          font-size 14px
          padding 15px 0 5px
          text-align center
          a
            padding-right 10px
            &.highlight
              color red
        .copyright
          text-align center
          margin-top 10px
          padding-bottom 25px
          font-size 12px
      @keyframes nnh
        0%{
          background-position-x: 1px;
          background-position-y: center;
        }
        100% {
          background-position: -81px;
        }
  /*切换的小狗*/
  .switchType
    background-image url("./img/godog.png")
    background-size 80px auto
    width: 41px;
    height: 46px;
    position: fixed;
    bottom: 15%;
    right: -1px;
    z-index: 2;
    animation: nnh 2.5s steps(2) infinite
</style>
