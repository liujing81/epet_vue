<template>
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
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(menuItem,index) in home.menus"
             :key="index" :class="{on:curIndex == index}" @click="switchShow(index)">
          <a href="javascript:;">{{menuItem.menu_name}}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import {mapState} from 'vuex'

  export default{
    data(){
      return {
        curIndex:0
      }
    },

    mounted(){
      this.$store.dispatch('getHomeInfo')
    },
    watch:{
      home(){
        this.$nextTick(()=>{
          var swiper4 = new Swiper('.header>.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 5,
          });
        })
      }
    },
    computed: {
      ...mapState(['home']),
    },
    methods:{
      switchShow(index){
        this.curIndex = index
      },
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .header
    width 100%
    background #fff
    margin-top -3px
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
          a
            display: block;
            line-height: 36px;
            font-size: 14px;
            text-align: center;
            color: #666;
          &.on>a
            color #459d36

</style>
