<template>
  <div>
    <div class="brand_wrap " v-for="(br,index) in brand" :key="index">
      <div class="title">
        <span>—— {{br.title}} ——</span>
      </div>
      <div class="list">
        <ul>
          <li class="allBrand" v-for="(brr,index) in br.list" :key="index">
            <a href="javascript:;">
              <div class="imgWrap">
                <img v-lazy="brr.photo || brr.logo">
              </div>
              <p class="name">{{brr.name}}</p>
              <p class="address">{{brr.address}}</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <router-link class="btnBrand" to="/allbrand">全部</router-link>
    <!--废盒子-->
    <div class="box"></div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default{
    mounted(){
      this.$store.dispatch('getBrand')
    },
    computed: {
      ...mapState(['brand']),
    },
  }

</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../../common/stylus/mixins.styl"
div
  position relative
  img
    display block
    vertical-align middle
  .box/*废物盒子*/
    padding-top 46px
  .btnBrand
    position fixed
    width 40px
    height 40px
    top 550px
    right 10px
    background-color rgba(0,0,0,.4)
    color #fff
    border-radius 50%
    text-align center
    line-height 40px
    font-size 12px
  .brand_wrap
    margin-bottom 10px
    background #fff
    &.frist
      margin-top 45px
    .title
      padding-top 20px
      font-size 12px
      color #999
      text-align center

    .list
      box-sizing border-box
      padding 0 5px
      ul
        padding-bottom 15px
        margin-bottom 10px
        display flex
        flex-wrap wrap
        .allBrand
          box-sizing border-box
          margin-top 20px
          width 33.33%
          padding 0 5px
          a
            display block
            color #333
            .imgWrap
              border 1px solid #e2e2e2
              text-align center
              padding 50px 10px 10px
              position relative
              img
                margin 10px auto 0
                height 40px
                right 0
                top 0
                left 0
                position absolute
            .smallPir
              .jian
                width 13px
                height 13px
                top -62px
                left 0
              .abs
                position absolute
              .gongyi
                font-size 8px
                padding 0 2px
                top -62px
                right 0
                background #e44b46
                color #fff
            .name
              height 20px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              font-size 13px
              margin-top 5px
              text-align center
            .address
              height 20px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              font-size 12px
              color #999
              text-align center
</style>
