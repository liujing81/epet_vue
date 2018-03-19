<template>
  <div>
    <HeadCartBrand titName="全部品牌"/>
    <div class="wrap" ref="wrap">
      <div class="allBrand" ref="allBrand">
        <div class="BrandType" v-for="(Bt,index) in allBrand.brand" :key="index">
          <h2>{{Bt.order}}</h2>
          <div class="BrandItem" v-for="(item,index) in Bt.list" :key="index">
            <a href="javascript:;">
              <div class="brandWrap">
                <div class="left">
                  <img v-lazy="item.logo">
                </div>
                <div class="right">
                  <p>{{item.name}}</p>
                  <p>{{item.address}}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="letter">
      <span v-for="(br,index) in allBrand.brand" :key="index" :class="{on:index==currentIndex}"
            @click="switchIndex(index)">{{br.order}}</span>
    </div>
  </div>
</template>
<script>
  import HeadCartBrand from '../../components/HeadCartBrand/HeadCartBrand.vue'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default{
    data(){
      return {
        curIndex:0,
        tops:[],
        scrollY: 0, //左侧Y轴滑动的坐标
      }
    },
    computed:{
      ...mapState(['allBrand']),
      // 当前分类的下标
      currentIndex () { // findIndex(): 返回值是第个返回true所对应的index
        const {scrollY, tops} = this
        // scrollY要>=当前的top && 小于下一个top
        return tops.findIndex((top, index) => scrollY>=top && scrollY<tops[index+1])
      }
    },
    methods:{
      switchIndex(index){
        const top = this.tops[index]
        this.brandsScroll.scrollTo(0,-top,300)
      }
    },
    components:{
      HeadCartBrand,
    },
    mounted(){
      this.$store.dispatch('getAllBrand',()=>{
        this.$nextTick(()=>{
          if(!this.brandsScroll){
            // 左侧内容区列表的BScroll
            this.brandsScroll = new BScroll('.wrap',{
              probeType: 2, // 手指滑动(惯性滑动和编码滑动不监视)
              click: true //响应点击
            })
            this.brandsScroll.on('scroll', (pos) => {
              this.scrollY = Math.abs(pos.y)//实时监控手指滑动距离，就为scrollY的值
            })
            this.brandsScroll.on('scrollEnd',(pos)=>{
              this.scrollY=Math.abs(pos.y) //滚动条滑动记录
            })
            //获取每个div的高度
            const tops = []
            let top = 0
            tops.push(top)
            const divs = this.$refs.allBrand.getElementsByClassName('BrandType')
            Array.prototype.slice.call(divs).forEach((div,index)=>{
              top += div.clientHeight
              tops.push(top)
            })
            this.tops = tops
          }else {
            this.brandsScroll.refresh()
          }
        })
      })
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
  .wrap
    height 660px
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
