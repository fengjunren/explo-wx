export default {
  computed: {
    // 获取userid
    UserID () {
      return sessionStorage.getItem('userId')
    }
  },
  methods: {
    // 跳转路由(有历史记录)
    jump (to) {
      if (this.$router) {
        this.$router.push(to)
      }
    },
    // 跳转路由(无历史记录)
    replaceTo (to) {
      this.$router.replace(to)
    },
    // 回退到上一个页面
    back () {
      this.$router.back()
    },
    // 微信分享参数查询
    async getShareConfig (params) {
      let pwd = this.$common.random(16)
      console.log("pwd:", pwd) 
      const res = await this.$http(pwd).post('/getWxPara', params)
      console.log('查询微信分享参数', res)
      let data = res.data
      let decryptedData = this.$AES.decrypt(data, pwd) 
      console.log("decryptedData:", decryptedData) 
      data = JSON.parse(decryptedData) 
      if (data.REP_HEAD.TRAN_CODE === "000000") {
        console.info("查询微信分享参数成功:", res) 
        return data.REP_BODY 
      } else {
        console.info("查询微信分享参数失败:", res) 
        return "" 
      }
    },
    formatStr () {
      let ary = []
      for (let i = 1;  i < arguments.length;  i++) {
        ary.push(arguments[i])
      }
      return arguments[0].replace(/\{(\d+)\}/g, function (m, i) {
        return ary[i]
      })
    },
    /**
     * 生成一个介于 min ~ max 的随机整数
     */
    randomInt (min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    closeWindow () {
      const onResult = {}
      onResult.onReady = function (wx) {
        wx.closeWindow()
      }
      const config = {}
      config.data = {}
      config.apiLst = ['closeWindow']
      this.$wxbase.invoke(config, onResult)
    },
    isAndroid () {
      const u = navigator.userAgent
      const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
      // const isiOS = !!u.match(/\(i[^ ]+ ( U )? CPU.+Mac OS X/) // ios终端
      return isAndroid
    },
    async hiddenMenu(){
     let para = {}
      para.url = location.href.split('#')[0]
      const REP_BODY = await this.getShareConfig(para)
      if(REP_BODY!==''){
        this.$wxbase.hiddenAll({
          data:REP_BODY
        })
      }
    }
  }
}
