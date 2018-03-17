<template>
  <div>
    <div class="header-wrap">
      <div class="header">
        <i class="iconfont icon-huitui back" ></i>
        <span class="tit">购物车</span>
        <i class="iconfont icon-gengduoyingyong more" @click="switchShow"></i>
      </div>
    </div>
    <transition name="move">
      <div class="menu" v-if="isShow">
        <a href="javascript:;">
          <i class="iconfont icon-shouye"></i>
          <p>首页</p>
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-shangpin"></i>
          <p>商品分类</p>
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-gouwuche1">
            <em>0</em>
          </i>
          <p>购物车</p>
        </a>
        <a href="javascript:;">
          <i class="iconfont icon-xianhuachongwu"></i>
          <p>我的e宠</p>
        </a>
      </div>
    </transition>
    <div class="shopCart">
          <i class="iconfont icon-gouwuche cart"></i>
          <p class="text">购物车是空的</p>
          <div class="btn">
            <a href="javascript:;">去逛逛</a>
            <a href="javascript:;">我的收藏</a>
          </div>
        </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        isShow:false
      }
    },
    methods:{
      switchShow(){
        this.isShow = !this.isShow
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  img
    display block
    vertical-align middle
.header-wrap
  z-index 10
  color #333
  height 50px
  line-height 50px
  position relative
  padding 0 1em
  background #fff
  text-align center
  .header
    position relative
    .back
      position absolute
      left -10px
      font-size 20px
    .more
      font-size 22px
      position absolute
    .tit
      font-size 1.1em
      width 90%
      text-overflow ellipsis
      white-space nowrap
      overflow hidden
      display inline-block
      margin 0 auto
.menu
  &.move-enter-active, &.move-leave-active
    transition: all 0.3s
  &.move-enter, &.move-leave-to
    height: 0
  box-sizing border-box
  background #fff
  display flex
  flex-wrap wrap
  line-height 22px
  vertical-align bottom
  height 75px
  a
    display block
    width 25%
    text-align center
    margin-top 15px
    i
      font-size 25px
      position relative
      margin-top 5px
      em
        position absolute
        top -10px
        left 12px
        font-style normal
        display inline-block
        height 22px
        width 22px
        font-size 16px
        color #fff
        text-align center
        line-height 18px
        background #FF0000
        border-radius 1em
        border #fff solid 2px
        transform scale(0.8)
    p
      margin-top 1px
      font-size 16px
.shopCart
  top-border-1px(#f5f5f5)
  padding-bottom 50px
  background #fff
  text-align center
  .cart
    margin 50px auto 20px
    display inline-block
    font-size 100px
    color #dbdbdb
  .text
    color #dbdbdb
  .btn
    margin-top 18px;
    a
      display inline-block
      border-radius 5px
      border 1px solid #999
      height 40px
      line-height 40px
      width 100px
      &:nth-child(1)
        margin-right 5px
</style>
