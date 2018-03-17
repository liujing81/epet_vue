<template>
  <div class="footer_guide border-1px">
    <router-link href="javascript:;" class="guide_item"
                 :class="{on: $route.path==='/home'}" to="/home">
      <div class="index-a"></div>
    </router-link>
    <router-link href="javascript:;" class="guide_item"
                 :class="{on: $route.path.indexOf('classify')!= -1}" to="/classify">
      <div class="type-a"></div>
    </router-link>
    <router-link href="javascript:;" class="guide_item"
                 :class="{on: $route.path==='/shopCart'}" to="/shopCart">
      <div class="cart-a"></div>
    </router-link>
    <router-link href="javascript:;" class="guide_item"
                 :class="{on: $route.path==='/profile'}" to="/profile">
      <div class="myepet-a"></div>
    </router-link>
  </div>
</template>
<script>
  export default{

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 46px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      color #999999
      height: 55px
      &.on:nth-child(1)>div
        background-image url("../../common/img/img.png");
        background-position: 0 0;
      &.on:nth-child(2)>div
        background-image url("../../common/img/img.png");
        background-position: 0 -41px;
      &.on:nth-child(3)>div
        background-image url("../../common/img/img.png");
        background-position: 0 -81px;
      &.on:nth-child(4)>div
        background-image url("../../common/img/img.png");
        background-position: 0 -122px;
      div
        height: 40px;
        width: 42px;
        background-size 234px 163px
        margin-top: 2px;
        &.index-a
          background-image url("../../common/img/img.png");
          background-position: -85px 0;
        &.type-a
          background-image url("../../common/img/img.png");
          background-position: -85px -41px;
        &.cart-a
          background-image url("../../common/img/img.png");
          background-position: -85px -81px;
        &.myepet-a
          background-image url("../../common/img/img.png");
          background-position: -85px -122px;



</style>
