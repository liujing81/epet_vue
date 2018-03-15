<template>
  <div class="type">
    <div class="typeLeft">
      <ul>
        <li>为您推荐</li>
        <li class="on">狗狗主粮</li>
        <li>狗狗零食</li>
        <li>狗狗服饰</li>
        <li>狗狗窝垫</li>
        <li>狗狗生活</li>
        <li>狗狗玩具</li>
        <li>狗狗保健</li>
        <li>狗狗医疗</li>
        <li>狗狗牵引</li>
        <li>狗狗美容</li>
        <li>狗狗周边</li>
        <li>狗狗清洁</li>
      </ul>
    </div>
    <div class="typeRight">
      <div class="detail-list">
        <div class="detail-list-food">
          <a href="javascript:;">
            狗狗主粮
            <img class="allGoods" src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png" alt="">
          </a>
          <ul>
            <li>
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/2016-07/21/14/0f972761c08a37c8baff88fa9302053d.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                <p>进口狗粮</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/2017-05/12/10/f38b8a4245c34c33061d04ad1e8009dd.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                <p>国产狗粮</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/cates/2014-03/24/3512594b71a2efd14b5c5925848d2e5a.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                <p>处方狗粮</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/2017-09/01/16/4e3455a75bc8d75be71816e51b917103.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="">
                <p>冻干狗粮</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="detail-list-brand">
          <a href="javascript:;">热门品牌</a>
          <ul>
            <li class="mt10">
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2013-06/28/c72319096507029d8d145c6b18aabda2.jpg?x-oss-process=style/waterfall&$1=200" alt="">
                <p>天衡宝(原雪山)</p>
              </a>
            </li>
            <li class="mt10">
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2017-08/09/20/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg?x-oss-process=style/waterfall&$1=200" alt="">
                <p>ZIWI Peak</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/c2adde2885a24e1152d744524a1d2c67.jpg?x-oss-process=style/waterfall&$1=200" alt="">
                <p>比瑞吉</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2012-12/06/b13de5404822dec7fec61a1fc4ba29c6.jpg?x-oss-process=style/waterfall&$1=200" alt="">
                <p>牛油果</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2013-06/28/c72319096507029d8d145c6b18aabda2.jpg?x-oss-process=style/waterfall&$1=200" alt="">
                <p>天衡宝(原雪山)</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2017-08/09/20/64ac5fd97740cb0fab0cfe3eac1d27f7.jpg?x-oss-process=style/waterfall&$1=200" alt="">
                <p>ZIWI Peak</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2016-08/12/14/c2adde2885a24e1152d744524a1d2c67.jpg?x-oss-process=style/waterfall&$1=200" alt="">
                <p>比瑞吉</p>
              </a>
            </li>
            <li>
              <a href="javascript:;">
                <img src="https://img2.epetbar.com/nowater/brand_logo/2012-12/06/b13de5404822dec7fec61a1fc4ba29c6.jpg?x-oss-process=style/waterfall&$1=200" alt="">
                <p>牛油果</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!--废盒子-->
    <div class="box"></div>
  </div>
</template>
<script>
  export default{
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" >
  @import "../../../common/stylus/mixins.styl"
  img
    display block
    vertical-align middle
  .type
    /*废物盒子*/
    .box
      padding-top 46px
    .typeLeft
      position fixed
      top 40px
      left 0
      bottom 0
      padding-bottom 45px
      border-right 5px solid #f3f4f5
      ul
        li
          box-sizing border-box
          padding 15px 0
          border-bottom 1px solid #f3f4f5
          width 70px
          height 50px
          font-size 13px
          text-overflow ellipsis
          white-space nowrap
          overflow hidden
          background #fff
          text-align center
          &.on
            background #f3f4f5
            color #ed4044
    .typeRight
      margin-top 40px
      margin-left 75px
      border-top 5px solid #f3f4f5
      background #fff
      .detail-list
        background #fff
        padding 5px 5px 20px
        box-sizing border-box
        border-top 1px solid #f3f4f5
        .detail-list-food
          box-sizing border-box
          padding-bottom 20px
          a:nth-child(1)
            position relative
            font-size 12px
            display block
            color #999
            padding-left 5px
            margin-top 10px
            box-sizing border-box
            .allGoods
              position absolute
              top 2px
              right 5px
              height 10px
          ul
            overflow hidden
            li
              box-sizing border-box
              width 33.33%
              height 117px
              padding 0 5px
              margin-top 10px
              float left
              a
                height 100%
                display block
                color #333
                position relative
                img
                  position absolute
                  top -6px
                  left 0
                  width 100%
                p
                  color #333
                  position absolute
                  bottom 10px
                  left 20%
                  text-overflow ellipsis
                  white-space nowrap
                  height 20px
                  font-size 13px
                  margin-top 10px
                  text-align center
        .detail-list-brand
          background #fff
          padding 5px 5px 20px
          border-top 1px solid #f3f4f5
          a
            font-size 12px
            display block
            color #999
            padding-left 5px
            margin-top 10px
          ul
            display flex
            flex-wrap wrap
            li
              box-sizing border-box
              padding 0 5px
              width 50%
              margin-top 20px
              &.mt10
                margin-top 10px
              a
                border 1px solid #f3f4f5
                text-align center
                padding 0
                height 55px
                display block
                color #333
                img
                  height 45px
                  margin 0 auto
                  margin-top 4px
                  padding-bottom 10px
                p
                  text-overflow ellipsis
                  white-space nowrap
                  height 20px
                  font-size 12px
                  margin-top 5px
                  text-align center
</style>
