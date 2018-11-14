<template>
 <wait-loading></wait-loading>
</template>

<script>
 let _vm = null
 import waitLoading from '@/components/wait-loading'
 import bizQry from "../../biz/bizQry"
 export default {
   name: 'gateWay',
   async mounted(){
    _vm=this
    const params = this.$common.getUrlParams()
    console.log('---------------------params:' + JSON.stringify(params))
    console.log('---------------------code:' + params.get('code'))
     if (params.size > 0) {
       await this.findUserId(params)
    }
    // const data = await qryUserInfo("00939843484994958")
    // console.log(data)
    let p=JSON.parse(_vm.$route.params.p)
    let pageId=p.pageId
    let bizId=p.bizId
    console.info('pageId:',pageId)
    if(pageId===1){
       _vm.replaceTo({ name: 'GuShiCi' ,params:{ id: bizId} })
    }else if(pageId===2){
       _vm.replaceTo({ name: 'Dengmi' })
    }else if(pageId===3){
       _vm.replaceTo({ name: 'XieHouYu' })
    }
   },
   methods: {
     async findUserId (params) {
       let succ = false
       const data = await bizQry.qryUserInfo(params.get('code'))
       const userId = data.userId
       const openid = data.openId
       const accessToken = data.access_token
       console.log('---qryOpenId---data:', data)
       if (userId !== null && userId !== undefined) {
         sessionStorage.setItem('userId', userId)
         sessionStorage.setItem('openid', openid)
         sessionStorage.setItem('accessToken', accessToken)
         succ = true
       }
       return succ
     }
   },
   components: {
     'wait-loading': waitLoading
   }
}
</script>