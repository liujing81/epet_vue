import ajax from './ajax'

/*
 获取分类的数据
 */
export const reqClassCategory = () => ajax('/classify/categorys')
export const reqClassBrand = () => ajax('/classify/brand')

export const reqHomeInfo = () => ajax('/classify/homeInfo')
