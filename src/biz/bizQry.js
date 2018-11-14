import AES from "../utils/aes"
import common from '../utils/common'
import {http} from '../utils/http'

async function qryById(url,id) {
    let pwd = common.random(16)
    console.log("pwd:", pwd) 
    const res = await http(pwd).post(url, {
      id: id
    }) 
    let data = res.data 
    let decryptedData = AES.decrypt(data, pwd) 
    console.log("decryptedData:", decryptedData) 
    data = JSON.parse(decryptedData) 
    if (data.REP_HEAD.TRAN_CODE === "000000") {
      console.info("查询成功:", res) 
      return data.REP_BODY 
    } else {
      console.info("查询失败:", res) 
      return "" 
    }
  }

  async function qryRandom() {
    let pwd = common.random(16)
    console.log("pwd:", pwd) 
    const res = await http(pwd).post('/gushici/qryRandom', {
    }) 
    let data = res.data 
    let decryptedData =  AES.decrypt(data, pwd) 
    console.log("decryptedData:", decryptedData) 
    data = JSON.parse(decryptedData) 
    if (data.REP_HEAD.TRAN_CODE === "000000") {
      console.info("查询成功:", res) 
      return data.REP_BODY 
    } else {
      console.info("查询失败:", res) 
      return "" 
    }
  }

  async function qryUserInfo(code) {
    let pwd = common.random(16)
    console.log("pwd:", pwd) 
    const res = await http(pwd).post('/getUserInfo', {
     'code':code
    }) 
    let data = res.data 
    let decryptedData = AES.decrypt(data, pwd) 
    console.log("decryptedData:", decryptedData) 
    data = JSON.parse(decryptedData) 
    if (data.REP_HEAD.TRAN_CODE === "000000") {
      console.info("查询成功:", res) 
      return data.REP_BODY 
    } else {
      console.info("查询失败:", res) 
      return "" 
    }
  }

  export default {qryById,qryRandom,qryUserInfo}