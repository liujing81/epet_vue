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
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
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
    overflow hidden
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
</style>
