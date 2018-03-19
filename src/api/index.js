import ajax from './ajax'

/*
 获取分类的数据
 */
export const reqClassCategory = () => ajax('/classify/categorys')
export const reqClassBrand = () => ajax('/classify/brand')
/*
 获取主页的数据
 */
export const reqHomeInfo = () => ajax('/homeInfo')
/*
 获取分类的全部品牌数据
 */
export const reqAllBrand = () => ajax('/AllBrand')

export const reqMsgCode = (phone) => ajax('/api/sendcode',{phone})

export const smsLogin = ({phone,code}) => ajax('/api/login_sms',{phone,code},'POST')

