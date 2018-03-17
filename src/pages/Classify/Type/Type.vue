<template>
  <div class="type">
    <div class="typeLeft" ref="sortpage">
      <ul>
        <li v-for="(category,index) in categorys" :class="{on:curIndex==index}"
            :key="index" @click="switchIndex(index)" >{{category.name}}</li>
      </ul>
    </div>
    <div class="typeRight" ref="sortcontent">
      <div class="detail-list" v-if="categorys[curIndex]">
        <div class="detail-list-food">
          <a href="javascript:;">
            {{categorys[curIndex].cate_list[0].title}}
            <img class="allGoods" src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png" alt="">
          </a>
          <ul>
            <li v-for="(ca,index) in categorys[curIndex].cate_list[0].list" :key="index">
              <a href="javascript:;">
                <img :src="ca.photo || ca.logo" alt="">
                <p>{{ca.name}}</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="detail-list-brand" v-if="categorys[curIndex].cate_list[1]">
          <a href="javascript:;">
            {{categorys[curIndex].cate_list[1].title}}
          </a>
          <ul>
            <li class="mt10" v-for="(ca,index) in categorys[curIndex].cate_list[1].list" :key="index">
              <a href="javascript:;">
                <img :src="ca.photo || ca.logo" alt="">
                <p>{{ca.name}}</p>
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
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default{
    data(){
      return {
          curIndex: 9,
      }
    },
    methods: {
      switchIndex(index){
        this.curIndex = index
      }
    },
    mounted(){
      this.$store.dispatch('getCategory',()=>{
        this.$nextTick(()=>{
          if(!this.scrollleft){
            this.scrollleft= new BScroll(this.$refs.sortpage,{
              click:true
            })
          }else {
            this.scrollleft.refresh()
          }
          if(!this.scrollright){
            this.scrollright= new BScroll(this.$refs.sortcontent,{
              click:true
            })
          }else {
            this.scrollright.refresh()
          }
        })
      })
    },
    computed: {
      ...mapState(['categorys']),
    },

  };
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
      height 550px
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
      height 550px
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
              margin-bottom 10px
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
