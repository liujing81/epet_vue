<template>
  <div>
    <div class="header-bg">
      <div class="header-wrap">
        <div class="header">
          <i class="iconfont icon-huitui back" @click="$router.back()"></i>
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
        <form action="#">
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
              <input type="text" placeholder="请输入图片内容" v-model="imgCode" maxlength="4">
              <span>
                <img ref="captcha" src="http://localhost:3000/captcha" @click="getCaptchaCode" style="height: 40px ">
              </span>
            </div>
            <div>
              <i class="iconfont icon-mima"></i>
              <input type="text" placeholder="动态密码" v-model="changeCode" maxlength="6">
              <button href="javascript:;" :class="{right_phone:rightPhone}"
                 v-if="computedTime==0" @click.prevent="getCode" ref="clickCode">获取动态密码</button>
              <button href="javascript:;" disabled v-if="computedTime>0">{{computedTime}}s</button>
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
  import {reqMsgCode,smsLogin} from '../../api'
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
        computedTime:0, //按钮点击倒计时
      }
    },
    methods:{
      getCaptchaCode() {
        this.$refs.captcha.src = 'http://localhost:3000/captcha?time='+new Date()
      },
      setLoginWay (loginWay) {
        this.loginWay = loginWay
      },
      async getCode(){
        if(this.rightPhone){//输入合法手机号
          this.computedTime = 60
          const IntervalId = setInterval(()=>{
            this.computedTime--
            //发送ajxa请求短信验证码
            if(this.computedTime==0){
              clearInterval(IntervalId)
            }
          },1000)
          //异步发送获取手机号的验证码
          const result = await reqMsgCode({phone:this.phone})
          if(result.code === 1){   // 请求发送失败
            this.alertShow = true
            this.alertText = result.msg
          }
        }
      },

      async login(){
        let result
        if(this.loginWay){//用户名
          const {name,password} = this
          if(!/^[a-zA-Z0-9_-]{4,11}$/.test(name)){
            this.alertShow = true
            this.alertText = '请输入正确的用户名'
            return
          }else if(!/^[0-9a-zA-Z]{4,8}$/.test(password)){
            this.alertShow = true
            this.alertText = '请输入正确的密码'
            return
          }
          console.log(1111)
        } else {// 手机登陆
          const {rightPhone,changeCode,imgCode} = this
          // 表单验证
          if(!rightPhone) { // 手机号
            this.alertShow = true
            this.alertText = '请输入正确手机号'
            return
          } else if(!imgCode) { // 图片验证码
            this.alertShow = true
            this.alertText = '请输入图片验证码'
            return
          }else if(!changeCode) { // 短信验证码
            this.alertShow = true
            this.alertText = '请输入真确的短信码'
            return
          }
        }
        // 如果上述内容基本输入都没有问题，发送ajax请求进入后台验证
        result = await smsLogin({phone:this.phone,code:this.changeCode})
        if(result.code ===1){
          this.alertShow = true
          this.alertText = result.msg
        }else{
          //发送成功保存用户信息到state中
          const userInfo = result.data
          // 回退到上一级
          this.$router.back()
        }
      },
      closeTip () {
        this.alertShow = false
      }
    },
    computed:{
      rightPhone(){
        return /^1(3|4|5|7|8)\d{9}$/.test(this.phone)
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
        button
          background: #fff;
          color: #999;
          border: 1px solid #666;
          position: absolute;
          right: 0;
          top: 8px;
          border-radius: 3px;
          width: 100px;
          text-align: center;
          padding: 8px 0;
          font-size 12px
          &.right_phone
            color: #2ec975;
            border: 1px solid #249657;
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
