/**
 * Created by hasee on 2018/3/16.
 */
import {RECEIVE_CATEGORY,RECEIVE_BRAND,RECEIVE_HOMEINFO} from './mutation-types'

export default {
  [RECEIVE_CATEGORY](state,{categorys}){
    state.categorys = categorys
  },
  [RECEIVE_BRAND](state,{brand}){
    state.brand = brand
  },
  [RECEIVE_HOMEINFO](state,{home}){
    state.home = home
  },
}
