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
import bizQry from "../biz/bizQry"
export default {
  name: "dengmi",
  data() {
    return {
      riddle: "",
      answer: "",
      title: "",
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
      let hasDmId = localStorage.hasOwnProperty("dm_id")
      let id = 0;
      if (hasDmId) {
        id = localStorage.getItem("dm_id")
        id = parseInt(id)
      }
      let dm = await bizQry.qryById("/dengmi/qryLargerId", id)
      if (dm !== "") {
        localStorage.setItem("dm_id", dm.id + "")
        this.riddle = dm.riddle
        this.answer = dm.answer
        this.title = dm.hint
        this.showAnswer = false
        this.$common.setTitle(this.title)
      }
      if(done)done()
    },
    show() {
      this.showAnswer = true
    }
  }
};
</script>

<style scoped>
.riddle {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
   font-size: 15px;
}
.answer {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}
</style>

