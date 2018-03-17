<template>
  <div>
    <HeadCartBrand/>
    <div class="allBrand">
      <div class="BrandType">
        <h2>A</h2>
        <div class="BrandItem">
          <a href="javascript:;">
            <div class="brandWrap">
              <div class="left">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2013-01/18/16b0a6dd2bc28ee4809ac8945bc8f282.jpg?x-oss-process=style/waterfall&$1=200" alt="">
              </div>
              <div class="right">
                <p>艾尔</p>
                <p>中国</p>
              </div>
            </div>
          </a>
        </div>  <!--从这里做-->
        <div class="BrandItem">
          <a href="javascript:;">
            <div class="brandWrap">
              <div class="left">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2012-12/19/f92c8f39a5bbe5d98364a83c6a4cdd35.jpg?x-oss-process=style/waterfall&$1=200" alt="">
              </div>
              <div class="right">
                <p>爱丽思IRIS</p>
                <p>日本</p>
              </div>
            </div>
          </a>

        </div>
      </div>
      <div class="BrandType">
        <h2>B</h2>
        <div class="BrandItem">
          <a href="javascript:;">
            <div class="brandWrap">
              <div class="left">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/7e157e3b5b1303aa4a4107f76ddab4cd.jpg?x-oss-process=style/waterfall&$1=200" alt="">
              </div>
              <div class="right">
                <p>湃特安琪儿</p>
                <p>中国</p>
              </div>
            </div>
          </a>

        </div>
        <div class="BrandItem">
          <a href="javascript:;">
            <div class="brandWrap">
              <div class="left">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/d79dbf085149f97b2d518d3ccdc91437.jpg?x-oss-process=style/waterfall&$1=200" alt="">
              </div>
              <div class="right">
                <p>宝路Pedigree</p>
                <p>美国</p>
              </div>
            </div>
          </a>

        </div>
       </div>
    </div>
    <div class="letter">
        <span v-for="(le,index) in letter" :key="index" @click="switchIndex(index)">{{le}}</span>
      </div>
  </div>
</template>
<script>
  import HeadCartBrand from '../../components/HeadCartBrand/HeadCartBrand.vue'
  export default{
    data(){
      return {
        letter:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        currentIndex:0
      }
    },
    methods:{
      switchIndex(index){
        this.currentIndex = index
      }
    },
    components:{
      HeadCartBrand,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  img
    display block
    vertical-align middle
div
  .letter
    position fixed
    right 4px
    text-align center
    bottom 50%
    transform translateY(50%)
    z-index 10
    >span
      font-size 12px
      display block
      color #333
      margin-top 2px
      &.on
        color #fe3e3e
  .allBrand
    padding-top 0
    background #f3f4f5
    .BrandType
      h2
        text-indent 15px
        line-height 24px
        font-size 12px
        color #999
        font-weight 400

      .BrandItem
        a
          display block
          background #fff
          color #333
          .brandWrap
            padding 10px
            border-bottom 1px solid #f3f4f5
            margin-right 20px
            overflow hidden
            .left
              width 30%
              height 50px
              border 1px solid #f3f4f5
              float left
              position relative
              img
                height 40px
                margin 5px auto
                position: absolute
                top: 0
                left: 0
                right: 0

            .right
              box-sizing border-box
              height 50px
              float left
              margin 0 0 5px 20px
              padding-top 10px
              p:nth-child(1)
                font-size 14px
                margin-bottom 5px
              p:nth-child(2)
                font-size 12px
                color #999
</style>
