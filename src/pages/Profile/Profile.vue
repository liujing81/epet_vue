<template>
  <div>
    <div class="header-bg">
      <div class="header-wrap">
        <div class="header">
          <i class="iconfont icon-huitui back"></i>
          <span class="register">注册</span>
        </div>
      </div>
      <div class="loginTab">
        <ul>
          <li @click="setLoginWay(true)" :class="{on:loginWay}">
            普通登陆
            <i></i>
          </li>
          <li @click="setLoginWay(false)" :class="{on:!loginWay}">
            手机动态密码登陆
            <i></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="content">
      <div class="login">
        <form action="#" @submit.prevent="login">
          <div class="pwdLogin" v-if="loginWay">
            <div>
              <i class="iconfont icon-denglu"></i>
              <input type="tel" maxlength="11" placeholder="手机号/邮箱/用户名" v-model="name">
            </div>
            <div>
              <i class="iconfont icon-mima"></i>
              <input type="text" maxlength="8" placeholder="请输入密码" v-model="password">
            </div>
          </div>

          <div class="phoneLogin" v-if="!loginWay">
            <div>
              <i class="iconfont icon-shouji"></i>
              <input type="text" maxlength="11" placeholder="已注册手机号" v-model="phone">
            </div>
            <div>
              <i class="iconfont icon-mima"></i>
              <input type="text" placeholder="请输入图片内容" v-model="imgCode">
              <span>
                <img ref="captcha" src="http://localhost:3000/captcha" alt="captcha" @click="getCaptchaCode" style="height: 40px ">
                <!--<img src="./img/yzm.png">-->
              </span>
            </div>
            <div>
              <i class="iconfont icon-mima"></i>
              <input type="text" class="dttext" placeholder="动态密码" v-model="changeCode">
              <a href="javascript:;">获取动态密码</a>
            </div>
          </div>
        </form>
      </div>
      <p>
        <a href="javascript:;">忘记密码？</a>
      </p>
      <div class="btnLogin" @click="login">
        <a href="javascript:;">登陆</a>
      </div>
      <div class="otherLogin">
        <p>合作网站登陆</p>
        <ul>
          <li>
            <a href="javascript:;">
              <img src="//static.epetbar.com/mpet/images/login/login_ico4.png" alt="">
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <img src="//static.epetbar.com/mpet/images/login/login_ico2.png" alt="">
            </a>
          </li>
        </ul>
      </div>
    </div>
    <AlertTip v-if="alertShow" :alertText="alertText" @closeTip="closeTip"/>

  </div>
</template>
<script>
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
   export default{
    data(){
      return{
        captcha: '', // 验证码
        captchaImg: null, //验证码图片
        loginWay: true, // true代表短信登陆, false密码登陆
        name:'',
        password:'',
        phone:'',
        imgCode:'',
        changeCode:'',
        alertShow:false, //提示框是否显示
        alertText: '', // 提示框文本
      }
    },
    methods:{
      // 获取图形验证码
      getCaptchaCode() {
        this.$refs.captcha.src = 'http://localhost:3000/captcha?time='+new Date()
      },
      setLoginWay (loginWay) {
        this.loginWay = loginWay
      },
      async login(){
        let result
        if(this.loginWay){
          const {name,password} = this
          if(!name){
            this.alertShow = true
            this.alertText = '请输入正确的用户名'
            return
          }else if(!password){
            this.alertShow = true
            this.alertText = '请输入正确的密码'
            return
          }
          // 提交登陆请求
          alert(1)
          // 处理返回
        } else {// 手机登陆
          const {phone,imgCode,changeCode} = this
          // 表单验证
          if(!phone) { // 用户名
            this.alertShow = true
            this.alertText = '请输入用户名'
            return
          } else if(!imgCode) { // 密码
            this.alertShow = true
            this.alertText = '请输入密码'
            return
          } else if(!changeCode) { // 图片验证码
            this.alertShow = true
            this.alertText = '请输入验证码'
            return
          }
          // 提交登陆请求
          alert(2)
          // 处理返回
        }
      },
      // 关闭提示框
      closeTip () {
        this.alertShow = false
      }
    },
    components:{
      AlertTip,
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  img
    display block
    vertical-align middle
.header-bg
  width 100%
  height 180px
  background-image url("./img/loginBg.png")
  background-size 100% 100%
  position relative
  .header-wrap
    color #333
    height 50px
    line-height 50px
    padding 0 1em
    .header
      position relative
      color #fff
      .back
        position absolute
        left -10px
        font-size 20px
      .register
        font-size 16px
        position absolute
        right 0



  .loginTab
    position absolute
    bottom 0
    left 0
    right 0
    height 44px
    ul
      height 100%
      display flex
      li
        text-align center
        height 100%
        width 50%
        line-height 44px
        color #fff
        background rgba(255,255,255,.3)
        position relative
        &.on>i
          width 0
          height 0
          border-left 10px solid transparent
          border-right 10px solid transparent
          border-bottom 10px solid #fff
          position absolute
          bottom 0
          left 45%

.content
  background #fff
  .login
    margin 0 15px 12px 15px
    padding 0 6px
    .pwdLogin
      width 100%
      div
        border-bottom #e2e2e2 solid 1px
        padding 15px 0 12px 30px
        position relative
        i
          position absolute
          left 5px
          font-size 20px
          color #d0d0d0
        input::-webkit-input-placeholder
          color #d0d0d0
    .phoneLogin
      width 100%
      div
        border-bottom #e2e2e2 solid 1px
        padding 15px 0 12px 30px
        position relative
        i
          position absolute
          left 5px
          font-size 20px
          color #d0d0d0
        input::-webkit-input-placeholder
          color #d0d0d0
        span
          display block
          position absolute
          top 5px
          right 0px
          img
            display block
            width 85px
        a
          background: #fff;
          color: #ff4259;
          border: 1px solid #eb4c33;
          position: absolute;
          right: 0;
          top: 8px;
          border-radius: 3px;
          width: 100px;
          text-align: center;
          padding: 8px 0;
          font-size 12px
  p
    padding 0 24px
    overflow hidden
    a
      color #898989
      float right
      font-size 14px
  .btnLogin
    padding-top 10px
    text-align center
    a
      display block
      letter-spacing 5px
      border-radius 5px
      background #2ec975
      font-size 15px
      padding 9px 0
      color #fff
      margin 0 4%
  .otherLogin
    margin-top 120px
    text-align center
    color #d7d7d7
    p
      margin-top: 8px;
    ul
      padding 18px 0
      display flex
      justify-content space-around
      li
        a
          width 100%
          display block
          img
            width 60%
            display block
            margin auto

</style>
