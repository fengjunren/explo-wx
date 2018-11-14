<template>
 <scroller 
  :on-refresh="refresh" >
    <div class="riddle">
    <span>{{riddle}}</span>
    </div>
<mu-divider></mu-divider>
    <div class="answer">
      <span v-if="showAnswer">{{answer}}</span>
      <mu-icon  v-else value="remove_red_eye"  @click="show" :size="55" ></mu-icon>
    </div>
 </scroller>
</template>

<script>
import bizQry from "../biz/bizQry";
export default {
  name: "dengmi",
  components: {},
  data() {
    return {
      riddle: "",
      answer: "",
      title: "歇后语",
      refreshing: false,
      eyeImg: require("../assets/eye.svg"),
      showAnswer: false
    };
  },
  async mounted() {
    this.refresh()
    this.hiddenMenu()
  },
  methods: {
    async refresh(done) {
      let hasXhyId = localStorage.hasOwnProperty("xhy_id")
      let id=0
      if(hasXhyId){
         id = localStorage.getItem("xhy_id")
         id = parseInt(id)
      }
      console.log('id:',id)
      let xhy = await bizQry.qryById("/xiehouyu/qryLargerId",id)
      if (xhy !== "") {
        localStorage.setItem("xhy_id", xhy.id + "")
        this.riddle = xhy.riddle
        this.answer = xhy.answer
        this.showAnswer = false
      }
       if(done)done()
    },
    show() {
      this.showAnswer = true
    }
  }
}
</script>

<style scoped>
.riddle {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:18px;
}
.answer {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
 
</style>

