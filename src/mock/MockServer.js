/**
 * Created by hasee on 2018/3/16.
 */
import Mock from 'mockjs'
import data from './categorys.json'
import home from './newhomepage.json'


Mock.mock('/classify/categorys',{code:0,data:data.categorys})
Mock.mock('/classify/brand',{code:0,data:data.brand})
Mock.mock('/classify/homeInfo',{code:0,data:home})

