<template>
  <div>
    <div class="header-wrap">
      <div class="header">
        <i class="iconfont icon-huitui back"></i>
        <span class="tit">购物车</span>
        <i class="iconfont icon-gengduoyingyong more"></i>
      </div>
    </div>
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
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  img
    display block
    vertical-align middle
  .header-wrap
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
