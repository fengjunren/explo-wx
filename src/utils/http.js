import axios from 'axios'
// import Qs from 'qs'
import AES from './aes'
import {global} from '../config/global'
import RSA from './rsa'

function getBaseUrl () {
  return global.baseUrl
}

let http = function (pwd) {
  return axios.create({
    baseURL: getBaseUrl(),
    transformRequest: [
      data => {
        data = AES.encrypt(data,pwd)
        let REQ = {}
        REQ.Key=RSA.encrypt(pwd)
        REQ.Data=data
        console.info('REQ:', REQ)
        return JSON.stringify(REQ)
      }
    ],
    headers: {
      'Content-Type': 'application/json'
    },
    timeout: 60000
  })
}


export {http,axios}
