import wx from 'weixin-js-sdk'

const hideMenuItems = [
  'menuItem:share:qq',
  'menuItem:share:weiboApp',
  'menuItem:favorite',
  'menuItem:share:facebook',
  'menuItem:share:QZone',
  'menuItem:editTag',
  'menuItem:delete',
  'menuItem:copyUrl',
  'menuItem:originPage',
  'menuItem:readMode',
  'menuItem:openWithQQBrowser',
  'menuItem:openWithSafari',
  'menuItem:share:email',
  'menuItem:share:brand',
  'menuItem:share:appMessage',
  'menuItem:share:timeline'
]
function invoke (config, onResult) {
  // 通过config接口注入权限验证配置
  let isDebug = false
  if (config.debug) {
    isDebug = config.debug
  }
  wx.config({
    debug: isDebug, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    appId: config.data.appId, // 必填，公众号的唯一标识
    timestamp: config.data.timestamp, // 必填，生成签名的时间戳
    nonceStr: config.data.nonceStr, // 必填，生成签名的随机串
    signature: config.data.signature, // 必填，签名，见附录1
    jsApiList: config.apiLst // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
  })
  // 通过ready接口处理成功验证
  wx.ready(() => {
    console.log('通过ready接口处理成功验证')
    if (onResult.onReady) {
      onResult.onReady(wx)
    }
  })
  // 通过error接口处理失败验证
  wx.error(res => {
    console.log('通过error接口处理失败验证:', res)
    if (onResult.onError) onResult.onError(res)
  })
}

function hiddenAll (config) {
  config.apiLst = ['hideMenuItems']
  const onResult = {}
  onResult.onReady = function (wx) {
    wx.hideMenuItems({
      'menuList': hideMenuItems
    })
  }
  this.invoke(config, onResult)
}

export default {invoke, hiddenAll}
