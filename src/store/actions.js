/**
 * Created by hasee on 2018/3/16.
 */
import {reqClassCategory,reqClassBrand,reqHomeInfo,reqAllBrand,reqPwdLogin} from '../api'
import {RECEIVE_CATEGORY,RECEIVE_BRAND,RECEIVE_HOMEINFO,RECEIVE_ALLBRAND,RECEIVE_USERINFO} from './mutation-types'


  export default {
    async getCategory({commit,state},callback){
      const result = await reqClassCategory()
      commit(RECEIVE_CATEGORY,{categorys:result.data})
      callback && callback()
    },
    async getBrand({commit,state}){
      const result = await reqClassBrand()
      commit(RECEIVE_BRAND,{brand:result.data})
    },
    async getHomeInfo({commit,state},callback){
      const result = await reqHomeInfo()
      commit(RECEIVE_HOMEINFO,{home:result.data})
      callback && callback()
    },
    async getAllBrand({commit},cb){
      const result = await reqAllBrand()
      commit(RECEIVE_ALLBRAND,{allBrand:result.data})
      cb && cb()
    },
    getUserInfo({commit}){
      commit(RECEIVE_USERINFO,{userInfo:result.data})
    },


  }
