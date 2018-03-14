<template>
  <div class="epetHome">
    <div class="headerWrap">
      <div class="downloadApp">
        <a href="#">
          <img src="../../common/img/downloadApp.jpg" alt="">
        </a>
        <span class="closebtn">
        <img src="../../common/img/closebtn_03.png" alt="">
      </span>
      </div>
      <div class="header">
        <div class="headerSearch">
          <div class="epet-search">
            <span class="search-type">
              <a href="javascript:;">
                <span class="catordog">狗狗</span>
                <span>|</span>
                <span class="myposition">北京</span>
                <i></i>
              </a>
            </span>
            <span class="search-text">
              <a href="javascript:;">
                <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
                <i class="iconfont icon-search"></i>
              </a>
            </span>
            <a href="javascript:;" class="epet-category">
              <img src="../../common/img/epet-category.png">
            </a>
          </div>
        </div>
        <div class="headerNav">
          <ul class="nav">
            <li class="on"><a href="javascript:;">首页</a></li>
            <li><a href="javascript:;">狗狗主粮</a></li>
            <li><a href="javascript:;">服饰城</a></li>
            <li><a href="javascript:;">医疗保健</a></li>
            <li><a href="javascript:;">零食玩具</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="contentWrap">
      <div class="banner border-1px">
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
            <img src="https://img1.epetbar.com/2018-03/12/17/881c6f016aa0c22104011926e51b4f47.jpg@!water" alt="">
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
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  export default{
    mounted(){
      var swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
.epetHome
  width 100%
  display fixed
  .headerWrap
    width 100%
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



    .header
      width 100%
      background #fff
      .headerSearch
        padding-left 10px
        padding-bottom 5px
        padding-right 10px
        padding-top 5px
        .epet-search
          padding 8px 0
          text-align center
          width 100%
          .search-type
            padding-top 4px
            margin-right: 20px;
            float left
            a
              span
                color #898989
              &.catordog
              &.myposition
                font-size 13px
              >i
                display inline-block
                border-width: 4px;
                border-style: solid solid dotted;
                border-color: #898989 transparent transparent;
          .search-text
            margin-left -15px
            a
              position relative
              input
                width: 223px
                text-indent 10px
                height 25px
                background #e9e9e9
                border-radius 4px
                color #bcbcbc
                font-size 13px
              i
                width: 11px;
                height: 11px;
                position: absolute;
                right: 10px;
                top: 0;
                bottom: 0;
                margin: auto 0;
          .epet-category
            float right
            img
              width 25px
              margin-left 10px
              vertical-align: middle;
      .headerNav
        width 100%
        .nav
          width 100%
          white-space nowrap
          display flex
          li
            flex 1
            &.on>a
              color #459d36
            a
              display: block;
              line-height: 36px;
              font-size: 14px;
              text-align: center;
              color: #666;
  .contentWrap
    width 100%
    /*轮播*/
    .banner
      bottom-border-1px(#e4e4e4)
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
            >a
              display block
              width 100%
              height 100%
              >img
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

</style>
