<template>
  <div>
    <div class="header">
      <router-link to="/classify/type" :class="{highlight: $route.path==='/classify/type'}">
        <span>分类</span>
      </router-link>
      <router-link to="/classify/brand" :class="{highlight: $route.path==='/classify/brand'}">
        <span>品牌</span>
      </router-link>
      <i class="iconfont icon-search"></i>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default{

  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  img
    display block
    vertical-align middle
div
  position relative
  .header
    background #fff
    padding 0 15px
    border-bottom 1px solid #cbcbcb;
    position fixed
    left 0
    right 0
    top 0
    height 40px
    z-index 11
    a
      display inline-block
      width 45%
      height 40px
      line-height 40px
      font-size 13px
      font-weight: 700;
      color #333
      &:nth-child(1)
        float left
        padding-right 5%
        text-align right
      &:nth-child(2)
        float right
        padding-left 5%
        text-align left
      &.highlight>span
        display inline-block
        height: 39px;
        line-height: 39px;
        color #ed4044
        border-bottom 2px solid #ed4044
    i
      position absolute
      top 13px
      right 15px
      width 14px
      height 14px

</style>
