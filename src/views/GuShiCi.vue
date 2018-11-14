<template>
 <scroller 
  :on-refresh="refresh" >
    <div class="origin">
    <span>{{origin}} </span> 
    </div>
<mu-divider></mu-divider>
    <div class="content">
      <span>{{c1}}</span><br/>
      <span>{{c2}}</span>
    </div>
 </scroller>
</template>

<script>
import bizQry from "../biz/bizQry"
let _vm=null
export default {
  name: "gushici",
  components: {},
  data() {
    return {
      origin: "",
      author: "",
      c1: "",
      c2: "",
      content: "",
      category: "",
      refreshing: false
    }
  },
  async mounted() {
    _vm=this
    let id=_vm.$route.params.id
    this.qryById(id)
    this.hiddenMenu()
  },
  methods: {
    async qryById(id){
      if(id!==null&&id!==undefined&&id!==''){
        id=parseInt(id)
        let gsc = await bizQry.qryById('/gushici/qryWithId',id)
        this.setValue(gsc)
      }
    },
    async refresh(done) {
      let gsc = await bizQry.qryRandom()
      this.setValue(gsc)
       if(done)done()
    },
    setValue(gsc){
       if (gsc !== "") {
        this.origin = gsc.origin
        this.author = gsc.author
        this.title = this.author
        let content = gsc.content
        let c = content.split("，")
        if (c != "" && c.length === 2) {
          this.c1 = c[0] + "，"
          this.c2 = c[1]
          console.log("c1:", this.c1, "c2:", this.c2)
        }else{
          this.c1=c
        }
        // this.$common.setTitle(this.title.replace('古诗文-',''))
        this.$common.setTitle(this.title)
      }
    }
  }
};
</script>

<style scoped>
.origin {
  height: 80px;
display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding-top: 40px;
}
.content {
  height: 150px;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  font-size: 24px;
}
 
</style>

