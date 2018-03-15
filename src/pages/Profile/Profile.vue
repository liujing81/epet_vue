<template>
  <div>
    <div class="header-wrap">
      <div class="header">
        <i class="iconfont icon-huitui back"></i>
        <span class="register">注册</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  img
    display block
    vertical-align middle
  .header-wrap
    color #333
    height 50px
    line-height 50px
    padding 0 1em
    background #fff
    .header
      position relative
      .back
        position absolute
        left -10px
        font-size 20px
      .register
        font-size 16px
        position absolute
        right 0



</style>
