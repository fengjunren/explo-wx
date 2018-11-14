export default {
  setTitle(title) {
    document.title = title
  },
  random(n) {
    let random = ""
    let v = "abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (let i = 0; i < n; i++) {
      random += v.charAt(Math.floor(Math.random() * v.length))
    }
    return random
  },
  // 获取 URL 参数
  getUrlParams() {
    const map = new Map()
    const href = location.href
    const indexQ = href.indexOf('?')
    if (indexQ !== -1) {
      const query = href.substr(indexQ + 1)
      const params = query.split('&')
      for (let i = 0; i < params.length; i++) {
        const temp = params[i].split('=')
        map.set(temp[0], temp[1])
      }
    }
    return map
  },
  // 微信浏览器禁止页面下拉
  overscroll(el) {
    el.addEventListener('touchstart', function () {
      let top = el.scrollTop
      let totalScroll = el.scrollHeight
      let currentScroll = top + el.offsetHeight
      if (top === 0) {
        el.scrollTop = 1
      } else if (currentScroll === totalScroll) {
        el.scrollTop = top - 1
      }
    })
    el.addEventListener('touchmove', function (evt) {
      if (el.offsetHeight < el.scrollHeight) {
        evt._isScroller = true
      }
    })
  },
}