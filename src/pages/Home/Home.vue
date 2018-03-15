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
    <div class="contentWrap">
      <div class="banner">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="#">
                <img src="./img/slider1.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="./img/slider2.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="./img/slider3.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="./img/slider4.jpg">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="./img/slider5.jpg">
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="activity">
        <a href="javascript:;">
          <img src="./img/activity.jpg" alt="">
        </a>
      </div>
      <div class="hottype">
        <div class="hotItem">
          <a href="javascript:;">
            <img src="https://img1.epetbar.com/2018-03/12/17/881c6f016aa0c22104011926e51b4f47.jpg@!water" alt="">
          </a>
        </div>
        <div class="hotItem">
          <a href="javascript:;">
            <img src="https://img1.epetbar.com/2018-03/12/17/5dc60db864d3123929f432e7757ceb96.jpg@!water" alt="">
          </a>
        </div>
        <div class="hotItem">
          <a href="javascript:;">
            <img src="https://img1.epetbar.com/2018-03/12/17/5dc60db864d3123929f432e7757ceb96.jpg@!water" alt="">
          </a>
        </div>
        <div class="hotItem">
          <a href="javascript:;">
            <img src="https://img1.epetbar.com/2018-03/12/17/a6cf6fd5d724bb125b40b17fba0cbe12.jpg@!water" alt="">
          </a>
        </div>
        <div class="hotItem">
          <a href="javascript:;">
            <img src="https://img1.epetbar.com/2018-03/12/17/f8ea826966dcee6abccf2a9574b0e36e.jpg@!water" alt="">
          </a>
        </div>
        <div class="hotItem">
          <a href="javascript:;">
            <img src="https://img1.epetbar.com/2018-03/12/20/5a6991defe3616bb1208506f5f0d78da.jpg@!water" alt="">
          </a>
        </div>
        <div class="hotItem">
          <a href="javascript:;">
            <img src="https://img1.epetbar.com/2018-03/12/17/b799562d3f7f8ca39769dc5fd1794a4a.jpg@!water" alt="">
          </a>
        </div>
        <div class="hotItem">
          <a href="javascript:;">
            <img src="https://img1.epetbar.com/2018-03/12/17/420a7f62887b490aa7c627dc5364178d.jpg@!water" alt="">
          </a>
        </div>
        <div class="hotItem">
          <a href="javascript:;">
            <img src="https://img1.epetbar.com/2018-03/12/17/dfa5a7598e3ee203c05f0f03fc182edc.jpg@!water" alt="">
          </a>
        </div>
        <div class="hotItem">
          <a href="javascript:;">
            <img src="https://img1.epetbar.com/2018-03/12/17/038add951408054bafb01498e8d98635.jpg@!water" alt="">
          </a>
        </div>
      </div>
      <div class="adv">
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/13/09/85e2ada29e2157daeda797903cd13dd2.jpg@!water" alt="">
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
                    <img src="https://img1.epetbar.com/2016-03/28/8/5180618245d1b13632b6d5d15f1f9a18.jpg?x-oss-process=style/fill&$1=300&$2=300">
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
          <img src="https://img2.epetbar.com/nowater/2018-03/12/18/f1b7fefaf2e0a3b01498658788d75fbd.jpg@!water" alt="">
        </a>
      </div>
      <div class="adv">
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/081c4aec9c8c81fa8dcb5bb9a63ddac5.gif" alt="">
        </a>
      </div>
      <div class="adv">
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/18/02cdfda794ee4cc90e0e39462e17d49d.jpg@!water" alt="">
        </a>
      </div>
      <div class="service">
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/09463758eb284f5a12ab248e41f4aa11.jpg@!water" alt="">
        </a>
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/fd6e6a5c56820b18eb2e0f6e359d9f59.jpg@!water" alt="">
        </a>
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/3940d5339d02eebcdd5d7cc1d3a46845.jpg@!water" alt="">
        </a>
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/071f8a55cf20097fb53de090e0a0dc16.jpg@!water" alt="">
        </a>
      </div>
      <div class="adv">
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/18/5fd369ed534f5a32ac751ff29ab90034.jpg@!water" alt="">
        </a>
      </div>
      <div class="sale">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="#">
                <img src="https://img2.epetbar.com/nowater/2018-03/12/19/f122ae20ce1880988ff7e5c64440675a.jpg@!water">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="https://img2.epetbar.com/nowater/2018-03/12/19/3c54559f077235436b408a6839138b4f.jpg@!water">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="https://img2.epetbar.com/nowater/2018-03/12/19/9ab35e8f6f88e2adac715cd83ac5c69c.jpg@!water">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="https://img2.epetbar.com/nowater/2018-03/12/19/9e4502cf22ecb6f8b97715c7fc73ed50.jpg@!water">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="https://img2.epetbar.com/nowater/2018-03/12/19/3ea8f16882581307427bd3d962fc6dd0.jpg@!water">
              </a>
            </div>
            <div class="swiper-slide">
              <a href="###">
                <img src="https://img2.epetbar.com/nowater/2018-03/12/19/d3d4c3ee17f2a047f3eee2ec30591aac.jpg@!water">
              </a>
            </div>
          </div>
          <!-- Add Pagination -->
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="adv">
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/18/0d6125d9f846519e83e7354bd8638cf7.jpg@!water" alt="">
        </a>
      </div>
      <div class="brand">
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/18/48f18920d1f1ee4e52039bf92da2e805.jpg@!water" alt="">
        </a>
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/18/10a5324b7c6f1763122f2ee9cd54b5b7.jpg@!water" alt="">
        </a>
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/18/188ceb72ed63b6ddffa093f25f517727.jpg@!water" alt="">
        </a>
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/18/67301c12c7193d19e515c59d2bf2d15a.jpg@!water" alt="">
        </a>
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/18/fc7b286676d1bf3fbe2d2b4b1ac633a6.jpg@!water" alt="">
        </a>
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b91027e7b664ebd165c8dc690fd9b778.jpg@!water" alt="">
        </a>
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/18/3ea747d791b0923f775d1b23b5da9485.jpg@!water" alt="">
        </a>
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/18/b30bab969d87ef724986ad42420432f4.jpg@!water" alt="">
        </a>
      </div>
      <div class="adv">
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/313106e05cd8b140f4bc8d298d98e87a.jpg@!water" alt="">
        </a>
      </div>
      <div class="adv">
      <a href="javascript:;">
        <img src="https://img2.epetbar.com/nowater/2018-03/13/11/bac4f238ed715999f7d5bd9d4f0ab56e.jpg@!water" alt="">
      </a>
    </div>
      <div class="adv">
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/4e129b980839446eabb5fce594f60364.jpg@!water" alt="">
        </a>
      </div>
      <div class="trend">
        <a class="left" href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/62c5a1f0c1b4b535aee4a537864ecd45.jpg@!water" alt="">
        </a>
        <div class="right">
          <a href="javascript:;">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/19/ca4e375ccf9992ce0e8666c256b6ef4e.jpg@!water" alt="">
          </a>
          <a href="javascript:;">
            <img src="https://img2.epetbar.com/nowater/2018-03/12/19/e25b9300c387beec0b28499a8f19d83e.jpg@!water" alt="">
          </a>
        </div>
      </div>
      <div class="adv">
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/83a8298fad417a66415c11e0acfac335.jpg@!water" alt="">
        </a>
      </div>
      <div class="epetType">
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/c0cbc5428d12daf97c03ce5cb4b2eb41.jpg@!water" alt="">
        </a>
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/fd2e96a45cc0e35e8ae09fad888707e4.jpg@!water" alt="">
        </a>
        <a href="javascript:;">
        <img src="https://img2.epetbar.com/nowater/2018-03/12/19/972f41b92482a495640ad9be2793e8bf.jpg@!water" alt="">
      </a>
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/819706ef8fb7e34de1c4ae76729db425.jpg@!water" alt="">
        </a>
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/18442aea515fdb23ec49d837bbe3dac1.jpg@!water" alt="">
        </a>
        <a href="javascript:;">
          <img src="https://img2.epetbar.com/nowater/2018-03/12/19/b621c0313bc872ad97fa63e2e431750b.jpg@!water" alt="">
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
      <div class="switchType"></div>
    </div>
    <!--废盒子-->
    <div class="box"></div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import HeaderEpet from '../../components/HeaderEpet/HeaderEpet.vue'

  export default{
    data(){
      return {
        isClose:true
      }
    },
    mounted(){
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
    },
    methods:{
      closeDL(){
        this.isClose = false
      },
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
  /*废物盒子*/
  .box
    padding-top 46px
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
  .contentWrap
    padding-top 141px
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
    @keyframes nnh
      0%{
        background-position-x: 1px;
        background-position-y: center;
      }
      100% {
        background-position: -81px;
      }
</style>
