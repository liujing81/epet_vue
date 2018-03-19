<template>
  <div>
    <HeadCartBrand titName="购物车"/>
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
  import HeadCartBrand from '../../components/HeadCartBrand/HeadCartBrand.vue'
  export default{
    components:{
      HeadCartBrand,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
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
